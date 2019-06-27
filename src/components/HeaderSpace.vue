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
        <!--<van-icon size="20" name="edit" slot="right" @click="goEditInfo()"/>-->
      </template>

      <template v-else-if="path === '/index/messages'">
        <!--<van-icon size="20" name="edit" slot="right" @click="goEditInfo()"/>-->
      </template>

      <template v-else>
        <van-icon size="20" name="arrow-left" slot="left" @click="goBack()"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'headerSpace',
  props: [],
  data () {
    return {
      title: '',
      path: '',
      value: 0,
      option1: [
        { text: '父亲', value: 0 },
        { text: '母亲', value: 1 },
        { text: '儿子', value: 2 }
      ]
    }
  },
  watch: {
    '$route': {
      handler (newVal) {
        const { title } = newVal.meta
        const path = newVal.path

        this.path = path
        if (title) {
          this.title = title
        }
      },
      immediate: true
    }
  },
  methods: {
    choseItem () {
      console.log(this.value)
    },
    goHisRoute () {
      const path = '/index/hisRoute'
      this.$router.push(path)
    },
    goEditInfo () {},
    goBack () {
      this.$router.go(-1)
    }
  },
  created () {
    this.$eventBus.$on('handleHeader', ({ path, title }) => {
      this.$nextTick(() => {
        this.title = title
      })
    })
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
</style>
