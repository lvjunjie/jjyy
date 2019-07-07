<template>
  <div class="page no-footer">
    <header-space title="历史轨迹"></header-space>

    <div class="his-route">
      <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"  ak="WFzUa99YlHRakagmUEWIfBNCVGEy39Dz">
        <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" ></bm-polyline>
      </baidu-map>
    </div>

    <div class="date-space">
      <input @click="choseDate()"  readonly/>
      <span>到</span>
      <input @click="choseDate()"  readonly/>
    </div>

    <van-popup
      v-model="showDatePicker"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
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
      showDatePicker: false,
      currentDate: new Date(),
      center: { lng: 0, lat: 0 },
      zoom: 3,
      polylinePath: [
        { lng: 116.404, lat: 39.915 },
        { lng: 116.405, lat: 39.920 },
        { lng: 116.423493, lat: 39.907445 }
      ]
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 14
    },

    choseDate() {
      this.showDatePicker = true
    },

    confirmDate(value) {
      console.log(value)

      this.showDatePicker = false
    },

    cancleDate() {
      this.showDatePicker = false
    }
  },
  mounted () {}
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
