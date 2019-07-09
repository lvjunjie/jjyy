<template>
  <div class="page no-footer">
    <header-space title="历史轨迹"></header-space>

    <div class="his-route">
      <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"  ak="WFzUa99YlHRakagmUEWIfBNCVGEy39Dz">
        <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" ></bm-polyline>
      </baidu-map>
    </div>

    <div class="date-space">
      <input @click="choseDate('StartTime')" v-model="StartTime" readonly/>
      <span>到</span>
      <input @click="choseDate('EndTime')" v-model="EndTime" readonly/>
    </div>

    <van-popup
      v-model="showDatePicker"
      position="bottom"
    >
      <van-datetime-picker
        v-model="pickerCurDate"
        type="datetime"
        @confirm="confirmDate"
        @cancel="cancleDate"
      />
    </van-popup>
  </div>

</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmPolyline from 'vue-baidu-map/components/overlays/Polyline'
import HeaderSpace from '../components/HeaderSpace'
export default {
  name: 'hisRoute',
  components: {
    HeaderSpace,
    BaiduMap,
    BmPolyline

  },
  data () {
    return {
      StartTime:'',
      EndTime: '',
      showDatePicker: false,
      pickerCurType: '',
      pickerCurDate: '',
      center: { lng: 0, lat: 0 },
      zoom: 3,
      polylinePath: []
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 114.51473225567625
      this.center.lat = 38.04232618270145
      this.zoom = 14
    },

    choseDate(type) {
      this.pickerCurType = type
      this.pickerCurDate = new Date(this[type])

      this.showDatePicker = true
    },

    confirmDate(value) {
      this[this.pickerCurType] = this.$moment(value).format('YYYY-MM-DD HH:mm')
      this.showDatePicker = false

      this.getData()
    },

    cancleDate() {
      this.showDatePicker = false
    },

    intDate () {
      this.StartTime = this.$moment(this.$moment().format('YYYY-MM-DD')).format('YYYY-MM-DD HH:mm')
      this.EndTime = this.$moment().format('YYYY-MM-DD HH:mm'); 
    },
    getData() {
      const curElderInfo = JSON.parse(sessionStorage.getItem("curElderInfo"));

      this.$http.GetlocationHistroiesByTimespanAndElderId({
        ElderId: curElderInfo.elderId,
        StartTime: this.StartTime,
        EndTime: this.EndTime
      }).then(res => {
        this.polylinePath = res.map(item=>{
          const tempData = item.locationHistory

          return {
              lng: tempData.longitude,
              lat: tempData.latitude
          }
        })

      })
    }
  },
  mounted () {
    this.intDate()

    this.getData()

  }
}
</script>
<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: calc(~'100vh - 49px');
}

  .date-space {
    height: 49px;
    background: #25AEFF;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 120px;
      background: #fff;
      height: 21px;
      text-align: center;
      outline: none;
      border: none;
      border-radius: 5px;
    }

    span {
      font-size: 14px;
      margin: 0 17px;
      color: rgba(255,255,255,1);
    }
  }
</style>
