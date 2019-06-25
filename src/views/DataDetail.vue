<template>
  <div class="data-detail">
    <div class="top-info">
      <div class="info-space health">
        <h2>98/120</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataDetail",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const type = this.$route.params.type;

    const titleList = ["睡眠时间", "血压", "血氧", "心率"];

    // 发送事件, 切换顶部标题
    this.$eventBus.$emit("handleHeader", {
      title: titleList[type]
    });
  }
};
</script>ß
<style lang="less" scoped>
.data-detail {
}
.top-info {
  height: 40vh;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;

  .info-space {
    width: 9rem;
    height: 9rem;
    border-radius: 8rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2rem;
      letter-spacing: 3px;
    }

    &.health {
      background: linear-gradient(#c9eff9, #0eaeef);
    }
    &.danger {
      background: linear-gradient(#f36225, #e00606);
    }
  }
}
</style>

