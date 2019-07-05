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
  name: 'headerSpace',
  props: ['elderList'],
  data () {
    return {
      title: '',
      path: '',
      elderId: ''
    }
  },
  watch: {
    $route: {
      handler (newVal) {
        const { title } = newVal.meta
        const path = newVal.path

        this.path = path
        if (title) {
          this.title = title
        }
      },
      immediate: true
    },
    elderList: {
      handler () {
        this.elderId = this.elderList[0].value
      }
    },
    elderId: {
      handler () {
        this.$store.commit('updateState', {
          elderId: this.elderId
        })
      }
    }
  },
  methods: {
    choseItem () {
      // this.$store.commit("updateState", {
      //   elderId: this.elderId
      // });
      // this.$eventBus.$emit('handleElderId')
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
  mounted () {
    setTimeout(() => {
      console.log(this.elderList)
    }, 2000)
    // this.elderId = this.elderList[0].elderId
  }
}
</script>
<style lang="less" scoped>
</style>
