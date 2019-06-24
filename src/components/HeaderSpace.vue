<template>
  <div class="header">
    <van-nav-bar :title="title" fixed>
      <template v-if="path === '/index/home'">
        <van-icon size="20" name="exchange" slot="left">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option1" :change="choseItem()"/>
          </van-dropdown-menu>
        </van-icon>
        <van-icon size="20" name="location-o" slot="right" @click="goHisRoute()"/>
      </template>

      <template v-else-if="path === '/index/myCenter'">
        <van-icon size="20" name="edit" slot="right" @click="goEditInfo()"/>
      </template>

      <template v-else>
         <van-icon size="20" name="arrow-left" slot="left" @click="goBack()"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "headerSpace",
  props: [],
  data() {
    return {
      title: "玖久易养2",
      path: "",
      value: 0,
      option1: [
        { text: "Option1", value: 0 },
        { text: "Option2", value: 1 },
        { text: "Option3", value: 2 }
      ]
    };
  },
  methods: {
    choseItem() {
      console.log(this.value);
    },
    goHisRoute() {},
    goEditInfo() {},
    goBack() {}
  },
  created() {
    this.$eventBus.$on("handleHeader", ({ path, title }) => {
      console.log(path, title);

      this.$nextTick(() => {
        this.title = title;
        this.path = path;

        switch (path) {
          case "":
            console.log("自定义操作");
            break;
        }
      });
    });
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>



