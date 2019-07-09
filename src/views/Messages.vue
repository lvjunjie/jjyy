<template>
  <div class="page">
    <header-space title="消息中心"></header-space>
    <div class="notice-list">
      <van-pull-refresh v-model="isLoading" @refresh="refresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多消息了"
          @load="getMessages"
        >
          <van-cell v-for="(item, index) in list" :key="index">
            <ul>
              <li>
                <div class="left">
                  <img src="../assets/images/bell.png" />
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
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
    <footer-space></footer-space>
  </div>
</template>

<script>
import HeaderSpace from "../components/HeaderSpace";
import FooterSpace from "../components/FooterSpace";
export default {
  name: "messages",
  components: {
    FooterSpace,
    HeaderSpace
  },
  data() {
    return {
      isLoading: false,
      loading:false,
      finished: false,
      IsReadFilter: 0,
      SkipCount: 0,
      MaxResultCount: 15,
      list: [],
      totalCount: 0
    };
  },
  methods: {
    getMessages() {
      const curElderInfo = JSON.parse(sessionStorage.getItem("curElderInfo"));

      this.$http
        .GetAllMessages({
          IsReadFilter: this.IsReadFilter,
          UserId: curElderInfo.elderId,
          SkipCount: this.SkipCount,
          MaxResultCount: this.MaxResultCount
        })
        .then(res => {
          this.isLoading = false;
          this.loading = false;
          this.totalCount = res.totalCount;
          this.list = [
            ...this.list,
            ...res.items.map(item => {
              item.messageTips.genTime = this.$moment(item.genTime).format("YYYY-MM-DD HH:mm");
              return item;
            })
          ];

          if (this.list.length >= this.totalCount) {
            this.finished = true;
          }
        });
    },
    refresh() {
      // 重置条件
      this.SkipCount = 0;
      this.MaxResultCount = 15;
      this.list = [];

      this.getMessages();
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.page {
  .notice-list {
    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        padding: 10px 5px;
        height: 65px;

        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 10px;
          img {
            width: 34px;
            height: 34px;
          }
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
            min-width: 100px;
            font-size: 12px;
            color: #666666;
            font-weight: normal;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
