<template>
  <div class="home">
    <div class="base-info">
      <div class="photo">
        <img src="../assets/temp.jpg">
      </div>
      <h5>苏大强 68</h5>
      <h5>2018-05-02 13:33:12</h5>
      <h5>注意事项：忌油腻、忌辛辣</h5>
    </div>
    <div class="health-data">
      <h4>健康数据</h4>

      <div class="data-list">
        <ul>
          <li @click="showDetail(0)">
            <div class="left">睡眠时间</div>
            <div class="right">
              <span>
                3h7m
                <br>深睡
              </span>
              <span>
                3h7m
                <br>浅睡
              </span>
              <span>
                3h7m
                <br>总时长
              </span>
              <van-icon name="arrow" size="20"/>
            </div>
          </li>
          <li @click="showDetail(1)">
            <div class="left">血压</div>
            <div class="right">
              <span>129/85</span>
              <van-icon name="arrow" size="20"/>
            </div>
          </li>
          <li @click="showDetail(2)">
            <div class="left">血氧</div>
            <div class="right">
              <span>129/85</span>
              <van-icon name="arrow" size="20"/>
            </div>
          </li>
          <li @click="showDetail(3)">
            <div class="left">心率</div>
            <div class="right">
              <span>129/85</span>
              <van-icon name="arrow" size="20"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  methods: {
    showDetail (type) {
      const path = `/index/dataDetail/${type}`
      this.$router.push(path)
    },
    getUserInfo (userId) {
      console.log(userId)
      this.$http.GetCurUserInfo({
        userId
      }).then((res) => {
        // console.log(res)
      })
    }
  },
  mounted () {
    const { userId } = this.$store.state
    this.getUserInfo(userId)
    
  }
}
</script>

<style lang="less" scoped>
.base-info {
  background: #3dc2f9;
  padding: 1rem 2rem 80px;
  /*padding-bo;*/

  .photo {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
    margin: 0 auto;
    background: #fff;
    border: 2px solid #fff;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  h5 {
    font-weight: initial;
    text-align: center;
    /*word-break: keep-all;*/
    /*white-space: nowrap;*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    margin-top: 15px;
    color: #fff;
    font-size: 14px;
  }
}

.health-data {
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  width: 90%;
  margin: -50px auto;
  /*margin-top: -30px;*/

  h4 {
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .data-list {
    ul {
      width: 100%;
      list-style: none;

      li {
        margin-bottom: 10px;
        padding: 15px 20px;
        background: #f4f0f0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;

        .left,
        .right {
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            text-align: center;
            margin-right: 10px;
          }
        }

        &:first-child {
          span:first-child {
            color: #259b24;
          }
          span:nth-child(2) {
            color: #ff9800;
          }
        }
      }
    }
  }
}
</style>
