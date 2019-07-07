<template>
  <div class="page no-nav">
    <div class="home">
      <div class="topSpace">
        <div class="nav-part">
          <div @click="goPage('/hisRoute')">
            <i class="fa fa-map-marker"></i>
          </div>
          <div @click="goPage('/report')">
            <h4>查看健康报告</h4>
          </div>
        </div>

        <div class="tab-part">
          <van-tabs
            type="line"
            background="transparent"
            :border = 'false'
            color="#FFD800"
            title-active-color="#fff"
            line-height="4px"

          >
            <van-tab v-for="index in 2" :title="'tab' + index"></van-tab>
          </van-tabs>
        </div>
        <div class="photo-part">
          <img src="../assets/temp.jpg">
        </div>

        <div class="info-space">
          <h4>父亲</h4>
          <i class="fa  fa-mars"></i>
          <h4>68岁</h4>
        </div>
        <div class="info-space">
          <h4>2018-10-12 10:12:30</h4>
        </div>
      </div>
      <div class="mainSpace">
        <ul>
          <li v-for="item in 4" @click="goPage('/dataDetail/1')">
            <div class="left">
              <img src="../assets/images/xueyang.png"/>
            </div>
            <div class="center">
              <h4>血氧</h4>
              <h1>96%</h1>
            </div>
            <div class="right">
              <img src="../assets/images/arrowRight.png"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
   <footer-space></footer-space>
  </div>
</template>

<script>
import FooterSpace from '../components/FooterSpace'
export default {
  name: 'home',
  components: { FooterSpace },
  data () {
    return {

    }
  },
  methods: {
    goPage(path) {
      this.$router.push(path)
    }
  },

  mounted () {

  }
}
</script>

<style lang="less" scoped>

  .home {
    .topSpace {
      background: #25AEFF;
      padding: 25px;
      .nav-part {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;

        i {
          font-size: 20px;
        }
        h4 {
          font-weight: normal;
          font-size: 12px;
        }
      }

      .tab-part {
        margin-top: 20px;

        /deep/ .van-tab {
          font-size: 16px !important;
        }
      }
      .photo-part {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        overflow: hidden;
        margin: 10px auto;
        background: #fff;
        border: 2px solid #fff;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .info-space {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;

        h4 {
          margin: 5px;
          font-weight: normal;
          font-size: 14px;
        }
      }

    }

    .mainSpace {
      padding: 15px 12px;

      ul {
        width: 100%;
        li {
          height: 82px;
          background: #fff;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          border-radius: 12px;
          .left {
            width: 38px;
            height: 38px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .right {
            width: 23px;
            height: 23px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .center {
            flex: 1;
            padding: 0 20px;
            h4 {
              font-size: 16px;
              margin-bottom: 10px;
              font-weight: normal;
            }
            h1 {
              font-size: 24px;
              opacity: 0.8;
            }
          }

        }
      }
    }
  }

</style>
