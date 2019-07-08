<template>
  <div class="page no-footer">
    <header-space :title="title"></header-space>
    <div class="data-detail">
      <div class="top-info">
        <h4>{{title}}最新数据</h4>
        <div class="info-card">
          <div class="title-space">{{name}}</div>
          <div class="data-space">97%</div>

          <div class="tip-space">
            <div class="tip-item">
              <div class="tip"></div>
              <div>正常</div>
            </div>
            <div class="tip-item">
              <div class="tip unhealth"></div>
              <div>不正常</div>
            </div>
          </div>
        </div>
      </div>

      <div class="echart-space">
        <chart-display></chart-display>
      </div>
    </div>
  </div>
</template>

<script>
import ChartDisplay from "@/components/ChartDisplay";
import HeaderSpace from "../components/HeaderSpace";
export default {
  name: "dataDetail",
  components: {
    HeaderSpace,
    ChartDisplay
  },
  data() {
    return {
      title: "",
      name: ''
    };
  },
  methods: {
    getData(params) {
      this.$http.GetSignRecordBySignCodeAndTimespan(params).then(res => {

        console.log(res)
      })
    }
  },
  mounted() {
    const type = this.$route.params.type;

    switch (type) {
      case "blood_pressure":
        this.title = "血压";
        this.name = "收缩压/舒张压";
        break;

      case "blood_oxygen":
        this.title = "血氧";
        this.name = "血氧值";
        break;

      case "heart_rate":
        this.title = "心率";
        this.name = "心率值";
        break;
    }

    this.getData({
      ElderId: 7,
      signIdList: ['08d6fdc8-6a4e-3030-3a6e-c3ad6b71c8bd'],
      StartTime: '',
      EndTime: ''
    })
  }
};
</script>
<style lang="less" scoped>
.page {
  min-height: 100vh;
  background: #fff;

  .top-info {
    padding: 12px;
    h4 {
      font-weight: normal;
      font-size: 14px;
    }

    .info-card {
      width: 240px;
      margin: 17px auto;

      .title-space {
        height: 33px;
        line-height: 33px;
        color: #fff;
        padding: 0 12px;
        font-size: 16px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background: #25aeff;
      }

      .data-space {
        height: 43px;
        line-height: 43px;
        padding: 0 12px;
        font-size: 16px;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.03);
      }

      .tip-space {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;

        .tip-item {
          display: flex;
          align-items: center;
          font-size: 16px;

          .tip {
            width: 34px;
            height: 18px;
            background: #25aeff;
            margin-right: 20px;

            &.unhealth {
              background: #c4c4c4;
            }
          }
        }
      }
    }
  }
}
</style>
