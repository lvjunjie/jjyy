<template>
  <div id="echart"></div>
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
    console.log(chart);

    chart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子",'test1','test2']
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: 'line',
          data: [5, 20, 36, 10, 10, 20,16,20]
        }
      ]
    });
  }
};
</script>
<style lang="less" scoped>
#echart {
  width: 100%;
  height: 100%;
}
</style>
