<template>
  <div class="main">
    <header-space  v-if="elderList" :elderList="elderList" ></header-space>

    <div class="view-space" v-if="elderList.length > 0">
      <transition name="fade" mode="out-in">
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
    return {
      elderList: [],
      elderId: ""
    }
  },
  methods: {
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
          }
        });
    }
  },
  mounted () {
    const { userId } = this.$store.state;

    this.getElderList(userId)
  }
}
</script>

<style lang="less" scoped>
.view-space {
  padding-top: 46px;
  margin-bottom: 46px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
