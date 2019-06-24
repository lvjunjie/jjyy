<template>
  <div class="footer">
    <div class="menu-item" :key="index" v-for="(item, index) in menuList" @click="choseMenu(item)">
      <van-icon size="20px" :color="item.active?'#029CFF':'#a8a8a8'" :name="item.icon"/>
      <label :class="[item.active?'active':'']">{{item.name}}</label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'footerSpace',
  data () {
    return {
      menuList: [
        { name: '首页', title: '玖久易养', path: '/index/home', icon: 'wap-home', active: false },
        { name: '消息中心', path: '/index/messages', icon: 'volume-o', active: false },
        { name: '我的', path: '/index/myCenter', icon: 'contact', active: false }
      ]
    }
  },
  watch: {
    '$route.path': {
      handler (newVal) {
        this.menuList.forEach((item) => {
          item.active = false
          if (item.path === newVal) {
            item.active = true

            // 发送事件, 切换顶部标题
            this.$eventBus.$emit('handleHeader', {
              path: item.path,
              title: item.title || item.name
            })
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    choseMenu (item) {
      // 路由跳转
      this.$router.push({ path: item.path })
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.footer {
  height: 46px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #f7f7f7;

  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    label {
      display: block;
      width: 100%;
      text-align: center;
      color: #a8a8a8;
      font-size: 12px;

      &.active {
        color: #029CFF
      }
    }

  }
}
</style>
