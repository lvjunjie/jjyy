<template>
  <div class="main">
    <div class="info-list">
      <ul>
        <li v-for="item in 4">
          <div class="left">
           <img src="../assets/temp.jpg"/>
          </div>
          <div class="right">
            <div class="title-space">
              <h4>父亲</h4>
            </div>
            <div>
              <h5>张三</h5>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="link-space">
      <van-cell-group>
        <van-cell title="关于我们" is-link  @click="goAbout()"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myCenter',
  components: {

  },
  methods: {
    goAbout() {
      this.$router.push('/index/about')
    }
  },
}
</script>

<style lang="less" scoped>
  .main {
  }

  .info-list {
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 5px;
        border-bottom: 1px solid #DBDBDB ;
        width: 50%;
        display: flex;
        align-items: center;

        &:nth-child(odd) {
          border-right: 1px solid #DBDBDB ;
        }

        &:nth-child(1),
        &:nth-child(2) {
          border-top: 1px solid #DBDBDB ;
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
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
  }
</style>
