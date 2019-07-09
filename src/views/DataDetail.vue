<template>
  <div class="page no-footer">
    <header-space :title="title"></header-space>
    <div class="data-detail">
      <div class="top-info">
        <h4>{{title}}最新数据</h4>
        <div class="info-card">
          <div class="title-space">{{name}}</div>
          <div class="data-space">{{lastValue}}{{chartUnit}}</div>

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
        <chart-display
          :chartData="chartData"
          :chartUnit="chartUnit"
          :chartTitle="title"
          :chartRange="chartRange"
        ></chart-display>
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
      name: "",
      signIdList: [],
      StartTime: "",
      EndTime: "",
      elderId: "",
      lastValue: "",
      chartData: [],
      chartUnit: "",
      chartTitle: "",
      chartRange: []
    };
  },
  methods: {
    getData(params) {
      return new Promise((resolve, reject) => {
        this.$http.GetSignRecordBySignCodeAndTimespan(params).then(res => {
          resolve(res);
        });
      });
    },
    dealData(recordList) {
      let timeList = [];
      let dataList = [];

      let tempDay = "";

      dataList.push(
        recordList.map(item => {
          const day = this.$moment(item.timePoint).format("YYYY-MM-DD");
          if (day === tempDay) {
            timeList.push(this.$moment(item.timePoint).format("HH:mm"));
          } else {
            tempDay = day;
            timeList.push(this.$moment(item.timePoint).format("M月D日"));
          }
          return item.signRecords[0].value;
        })
      );

      this.chartData = {
        timeList,
        dataList
      };
    },
    dealPressureData(recordListA, recordListB) {
      let timeList = [];
      let dataListA = [];
      let dataListB = [];

      let tempDay = "";

      recordListA.forEach(itemA => {
        const tempB = recordListB.find(
          itemB => itemA.timePoint === itemB.timePoint
        );
        if (tempB) {
          const day = this.$moment(itemA.timePoint).format("YYYY-MM-DD");
          if (day === tempDay) {
            timeList.push(this.$moment(itemA.timePoint).format("HH:mm"));
          } else {
            tempDay = day;
            timeList.push(this.$moment(itemA.timePoint).format("M月D日"));
          }
          dataListA.push(itemA.signRecords[0].value)
          dataListB.push(tempB.signRecords[0].value)

        }
      });
      this.chartData = {
        timeList,
        dataList: [dataListA, dataListB]
      };

    },
    async handleData() {
      const params = {
        ElderId: this.elderId,
        signIdList: this.signIdList.join(""),
        StartTime: this.StartTime,
        EndTime: this.EndTime
      };

      if (this.signIdList.length > 1) {
        // 血压特殊处理
        if (this.signIdList.length == 2) {
          params.signIdList = this.signIdList[0];
          const recordListA = await this.getData(params);
          params.signIdList = this.signIdList[1];
          const recordListB = await this.getData(params);

          this.dealPressureData(recordListA, recordListB);
        }
      } else {
        const recordList = await this.getData(params);
        this.lastValue = recordList[recordList.length - 1].signRecords[0].value;
        this.dealData(recordList);
      }
    }
  },
  mounted() {
    const type = this.$route.params.type;
    const curElderInfo = JSON.parse(sessionStorage.getItem("curElderInfo"));
    this.signIdList = JSON.parse(sessionStorage.getItem(type));
    this.elderId = curElderInfo.elderId;

    switch (type) {
      case "blood_pressure":
        this.title = "血压";
        this.name = "收缩压/舒张压";
        this.chartUnit = "mmhg";
        this.chartRange = [50, 170];

        break;

      case "blood_oxygen":
        this.title = "血氧";
        this.name = "血氧值";
        this.chartUnit = "%";
        this.chartRange = [88, 102];

        break;

      case "heart_rate":
        this.title = "心率";
        this.name = "心率值";
        this.chartUnit = "bpm";
        this.chartRange = [40, 110];
        break;
    }

    this.handleData();
    // this.getData({
    //   ElderId: curElderInfo.elderId,
    //   signIdList: signId,
    //   StartTime: "",
    //   EndTime: ""
    // });
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
