<template>
  <div class="main">
    <header-space></header-space>

    <div class="view-space">
      <transition>
        <router-view/>
      </transition>
    </div>

    <footer-space></footer-space>
  </div>
</template>



<script>
import HeaderSpace from "@/components/HeaderSpace";
import FooterSpace from "@/components/FooterSpace";

export default {
  name: "index",
  components: {
    HeaderSpace,
    FooterSpace
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.view-space {
  padding-top: 46px;
  margin-bottom: 46px;
}
</style>


