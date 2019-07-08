<template>
  <div>
    <h4>心率历史数据</h4>

    <div class="legend">
        <div class="legendItem">
          <div class="tip"></div>
          <div>心率</div>
        </div>
    </div>
    <div id="echart"></div>

  </div>
</template>

<script>
import "zrender/lib/svg/svg";

export default {
  name: "chartDisplay",
  props: [],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // 初始化
    const chart = this.$echarts.init(document.getElementById("echart"), null, {
      renderer: "svg"
    });

    const data = [
      ["2019-10-12 10:10", 10],
      ["2019-10-13 20:11", 20],
      ["2019-10-14 10:12", 15],
      ["2019-10-15 10:12", 15],
      ["2019-10-16 10:12", 15],
      ["2019-10-17 10:12", 15],
      ["2019-10-18 10:12", 15],
      ["2019-10-19 10:12", 15]
    ];

    chart.setOption({
      color: ['#863BEB', '#FC8C39'],
      grid: {
        left: 0,
        right: 0,
        borderColor: "rgba(255,255,255,1)"
      },
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: [0]
          // minValueSpan: 3600 * 1000,
          // maxValueSpan: 3600 * 24 * 1000 * 10
        }
      ],
      xAxis: {
        type: "time",
        splitLine: {
          lineStyle: {
            type: "dotted"
          }
        },
        axisTick: {
          show: false
        }

        // splitNumber: Date.parse(3600 * 24 * 1000) ,
        // min: new Date('2019-10-12 10:10'),
        // max: new Date('2019-10-14 10:10')
      },
      yAxis: {
        min: 0,
        max: 30,
        nameLocation: 'end',
        name: '%',
        splitLine: {
          lineStyle: {
            type: "dotted"
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        nameTextStyle: {
          padding: [0,0,0,105]
        },
        axisLabel: {
          margin: -60
        }
      },
      series: [
        {
          type: "line",
          symbol: 'circle',
          symbolSize: 6,
          data: data
        }
      ]
    });
  }
};
</script>
<style lang="less" scoped>
h4 {
  font-size: 14px;
  font-weight: 400;
  padding: 0 15px;

}
.legend {
  display: flex;
  justify-content: center;
  margin: 25px 0;
  
  .legendItem {
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-size: 12px;
    
    .tip {
      width: 15px;
      height: 3px;
      margin-right: 5px;

      &:first-child {
        background: #863BEB
      }

      &:nth-child(2) {
        background: #FC8C39
      }
    }
  }
}

#echart {
  width: 100%;
  height: calc(~'100vh - 350px');
}


</style>
