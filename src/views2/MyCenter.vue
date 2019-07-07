<template>
  <div class="main">
    <div class="info-list">
      <ul>
        <li :key="index" v-for="(item, index) in elderList">
          <div class="left">
            <img :src='item.elderheadPic' />
          </div>
          <div class="right">
            <div class="title-space">
              <h4>{{item.relation}}</h4>
            </div>
            <div>
              <h5>{{item.elderName}}</h5>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="link-space">
      <van-cell-group>
        <van-cell title="关于我们" is-link @click="goAbout()" />
        <van-cell title="退出登录" is-link @click="checkOut()" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { clearStore } from '@/utils/common'
export default {
  name: 'myCenter',
  components: {},
  data () {
    return {
      manDefalutHead: require('../assets/temp.jpg'),
      womenDefalutHead: require('../assets/temp.jpg'),
      elderList: []
    }
  },
  methods: {
    goAbout () {
      this.$router.push('/index/about')
    },
    checkOut () {
      clearStore()
      this.$router.push('/login')
    },
    getElderList (contactorId) {
      this.$http
        .GetElderByContactorId({
          contactorId
        })
        .then(res => {
          if (res.length > 0) {
            this.elderList = res.map((item) => {
              if (!item.elderheadPic) {
                item.elderheadPic = item.elderSex === 0 ? this.manDefalutHead : this.womenDefalutHead
              }
              return item
            })
          }
        })
    }
  },
  mounted () {
    const { userId } = this.$store.state
    this.getElderList(userId)
  }
}
</script>

<style lang="less" scoped>
.info-list {
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 5px;
      border-bottom: 1px solid #dbdbdb;
      width: 50%;
      display: flex;
      align-items: center;

      &:nth-child(odd) {
        border-right: 1px solid #dbdbdb;
      }

      &:nth-child(1),
      &:nth-child(2) {
        border-top: 1px solid #dbdbdb;
      }

      .left {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      .right {
        flex: 1;
        overflow: hidden;
        padding: 0 10px;

        .title-space {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
          flex-wrap: nowrap;
          h4 {
            font-size: 14px;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

.link-space {
  margin-top: 60px;
}
</style>
