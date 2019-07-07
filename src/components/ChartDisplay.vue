<template>
  <div id="echart"></div>
</template>

<script>
import 'zrender/lib/svg/svg'

export default {
  name: 'chartDisplay',
  props: [],
  data () {
    return {}
  },
  methods: {},
  mounted () {
    // 初始化
    const chart = this.$echarts.init(document.getElementById('echart'), null, {
      renderer: 'svg'
    })

    const data = [[new Date('2019-10-12 10:10'),10], [new Date('2019-10-12 10:11'),20],  [new Date('2019-10-12 10:12'), 15]]


    chart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      dataZoom: [
        {type: 'inside', xAxisIndex: [0],}
      ],
      xAxis: {
        type: 'time',
      },
      yAxis: {
        min: 0,
        max: 30
      },
      series: [
        {
          type: 'line',
          data: data
        }
      ]
    })
  }
}
</script>
<style lang="less" scoped>
#echart {
  width: 100%;
  height: 100%;
}
</style>
