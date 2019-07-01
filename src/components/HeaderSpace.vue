<template>
  <div class="header">
    <van-nav-bar :title="title" fixed>
      <template v-if="path === '/index/home'">
        <van-icon size="20" name="exchange" slot="left">
          <van-dropdown-menu v-if="elderList.length > 0">
            <van-dropdown-item v-model="elderId" :options="elderList" :change="choseItem()" />
          </van-dropdown-menu>
        </van-icon>
        <van-icon size="20" name="location-o" slot="right" @click="goHisRoute()" />
      </template>

      <template v-else-if="path === '/index/myCenter'">
        <!--<van-icon size="20" name="edit" slot="right" @click="goEditInfo()"/>-->
      </template>

      <template v-else-if="path === '/index/messages'">
        <!--<van-icon size="20" name="edit" slot="right" @click="goEditInfo()"/>-->
      </template>

      <template v-else>
        <van-icon size="20" name="arrow-left" slot="left" @click="goBack()" />
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
      title: "",
      path: "",
      elderList: [],
      elderId: ""
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        const { title } = newVal.meta;
        const path = newVal.path;

        this.path = path;
        if (title) {
          this.title = title;
        }
      },
      immediate: true
    }
  },
  methods: {
    choseItem() {
      this.$store.commit("updateState", {
        elderId: this.elderId
      });

      this.$eventBus.$emit('handleElderId')
    },
    goHisRoute() {
      const path = "/index/hisRoute";
      this.$router.push(path);
    },
    goEditInfo() {},
    goBack() {
      this.$router.go(-1);
    },
    getElderList(contactorId) {
      this.$http
        .GetElderByContactorId({
          contactorId
        })
        .then(res => {
          if (res.length > 0) {
            this.elderList = res.map(item => {
              return {
                text: item.relation,
                value: item.elderId
              };
            });

            this.elderId = this.elderList[0].value;
          }
        });
    }
  },
  created() {
    this.$eventBus.$on("handleHeader", ({ path, title }) => {
      this.$nextTick(() => {
        this.title = title;
      });
    });
  },
  mounted() {
    const { userId } = this.$store.state;

    this.getElderList(userId);
  }
};
</script>
<style lang="less" scoped>
</style>
