<template>
  <div class="main">
    <div>
      <van-tabs @click="choseType">
        <van-tab title="未读"></van-tab>
        <van-tab title="所有消息"></van-tab>
      </van-tabs>
    </div>
   <div class="notice-list">
      <ul>
        <li :key="index" v-for="(item, index) in list">
          <div class="left">
            <van-icon size="20" color="red" name="warning-o" />
          </div>
          <div class="right">
              <div class="title-space">
                <h4>{{item.messageTips.title}}</h4>
                <h5>{{item.messageTips.genTime}}</h5>
              </div>
              <div>
                <h5>{{item.messageTips.messageContent}}</h5>
              </div>
          </div>

        </li>
      </ul>
   </div>
  </div>
</template>

<script>

export default {
  name: 'messages',
  components: {

  },
  data () {
    return {
      IsReadFilter: 0,
      SkipCount: 1,
      MaxResultCount: 15,
      list:[]
    }
  },
  methods: {
    choseType (index, title) {
      this.IsReadFilter = index ===0 ? 0 : null

      this.getMessages( )
    },
    getMessages() {
      const { elderId } = this.$store.state

      this.$http.GetAllMessages({
        IsReadFilter: this.IsReadFilter,
        UserId: elderId,
        SkipCount: this.SkipCount,
        MaxResultCount: this.MaxResultCount
      }).then((res)=>{
        console.log(res)
        this.list = res.items
      })
    }
  },
  mounted() {
    this.getMessages()
  }
}
</script>

<style lang="less" scoped>
  .main {

  }

  .notice-list {

    ul {
      list-style: none;
      width: 100%;
      padding: 1rem;

      li {
        display: flex;
        align-items: center;
        padding: 10px 5px;
        border-bottom: 1px solid #dbdbdb;

        .left {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .right {
          flex: 1;
          overflow: hidden;

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

          h5 {
            min-width: 40px;
            font-size: 12px;
            color: #666666;
            font-weight: normal;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>
