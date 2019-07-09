<template>
  <div>
    <h4>{{chartTitle}}历史数据</h4>

    <div class="legend">
      <div class="legendItem">
        <div class="tip"></div>
        <div>{{chartTitle}}</div>
      </div>
    </div>
    <div id="echart"></div>
  </div>
</template>

<script>
import 'zrender/lib/svg/svg'

export default {
  name: 'chartDisplay',
  props: ['chartData', 'chartUnit', 'chartTitle', 'chartRange'],
  data () {
    return {}
  },
  methods: {},
  watch: {
    chartData: {
      handler () {
        // 初始化
        const chart = this.$echarts.init(
          document.getElementById('echart'),
          null,
          {
            renderer: 'svg'
          }
        )

        const { timeList, dataList } = this.chartData

        const seriesConfig = dataList.map(item => {
          return {
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            data: item
          }
        })

        const chartOption = {
          color: ['#863BEB', '#FC8C39'],
          grid: {
            left: 0,
            right: 0,
            borderColor: 'rgba(255,255,255,1)'
          },
          dataZoom: [
            {
              type: 'inside',
              xAxisIndex: [0],
              startValue: 0,
              endValue: 10,
              minValueSpan: 5,
              maxValueSpan: 100
            }
          ],
          xAxis: {
            data: timeList,
            boundaryGap: true,
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              // interval: 0
            }
          },
          yAxis: {
            min: this.chartRange[0],
            max: this.chartRange[1],
            nameLocation: 'end',
            name: this.chartUnit,
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            nameTextStyle: {
              padding: [0, 0, 0, 105]
            },
            axisLabel: {
              margin: -60
            }
          },
          series: seriesConfig
        }

        chart.setOption(chartOption)
      },
      deep: true
    }
  },
  mounted () {}
}
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
        background: #863beb;
      }

      &:nth-child(2) {
        background: #fc8c39;
      }
    }
  }
}

#echart {
  width: 100%;
  height: calc(~"100vh - 350px");
}
</style>
