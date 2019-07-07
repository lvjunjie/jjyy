<template>
  <div class="page">
    <header-space title="消息中心"></header-space>
   <div class="notice-list">
      <ul>
        <li :key="index" v-for="(item, index) in list">
          <div class="left">
            <img src="../assets/images/bell.png"/>
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
    <footer-space></footer-space>
  </div>
</template>

<script>

import HeaderSpace from '../components/HeaderSpace'
import FooterSpace from '../components/FooterSpace'
export default {
  name: 'messages',
  components: {
    FooterSpace,
    HeaderSpace

  },
  data () {
    return {
      IsReadFilter: 0,
      SkipCount: 1,
      MaxResultCount: 15,
      list: []
    }
  },
  methods: {
    getMessages () {
      const curElderInfo = JSON.parse(sessionStorage.getItem('curElderInfo'))

      this.$http.GetAllMessages({
        IsReadFilter: this.IsReadFilter,
        UserId: curElderInfo.elderId,
        SkipCount: this.SkipCount,
        MaxResultCount: this.MaxResultCount
      }).then((res) => {
        this.list = res.items.map(item => {
          item.genTime = this.$moment(item.genTime, 'YYYY-MM-dd HH:mm:ss')
          return item
        })
      })
    }
  },
  mounted () {
    this.getMessages()
  }
}
</script>

<style lang="less" scoped>
  .page {
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
