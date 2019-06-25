<template>
  <div class="his-route">
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"  ak="WFzUa99YlHRakagmUEWIfBNCVGEy39Dz">
       <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" ></bm-polyline>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmPolyline from "vue-baidu-map/components/overlays/Polyline";
export default {
  name: "hisRoute",
  components: {
    BaiduMap,
    BmPolyline
  },
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ]
    };
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 100vh;
}
</style>
