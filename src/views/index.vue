<template>
  <div class="main">
    <header-space></header-space>

    <div class="view-space">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>

    <footer-space></footer-space>
  </div>
</template>

<script>
import HeaderSpace from '@/components/HeaderSpace'
import FooterSpace from '@/components/FooterSpace'

export default {
  name: 'index',
  components: {
    HeaderSpace,
    FooterSpace
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.view-space {
  padding-top: 46px;
  margin-bottom: 46px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
