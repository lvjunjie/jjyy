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
            v-if="elderList.length > 0"
            v-model="chosenIndex"
            type="line"
            background="transparent"
            :border="false"
            color="#FFD800"
            title-active-color="#fff"
            line-height="4px"
            @click="choseElder"
          >
            <van-tab :key="index" v-for="(item, index) in elderList" :title="item.relation"></van-tab>
          </van-tabs>
        </div>
        <div class="photo-part">
          <img :src="elderInfo.elderheadPic || defaultPic" />
        </div>

        <div class="info-space">
          <h4>{{elderInfo.elderName}}</h4>
          <i :class="['fa', {'fa-venus' : elderInfo.elderSex === 1}, {'fa-mars' : elderInfo.elderSex === 0}]"></i>
          <h4>{{elderInfo.elderAge}}</h4>
        </div>
        <div class="info-space">
          <h4>{{gentime}}</h4>
        </div>
      </div>
      <div class="mainSpace">
        <ul>
          <li :key="index" v-for="(item, index) in signList" @click="showDetail(item)">
            <div class="left">
              <img :src="item.typePic" />
            </div>
            <div class="center">
              <h4>{{item.title}}</h4>
              <h1>
                <span v-if="item.mark">{{item.mark}}</span>
                {{item.value.length > 0? item.value.join('/') + item.unit :'--'}}
              </h1>
            </div>
            <div class="right">
              <img src="../assets/images/arrowRight.png" />
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
import xueyang from '@/assets/images/xueyang.png'
// import shuimian from '@/assets/images/shuimian.png'
import xueya from '@/assets/images/xueya.png'
import xinlv from '@/assets/images/xinlv.png'
import defaultPic from '@/assets/images/default.png'

import { notify } from '@/utils/common'

export default {
  name: 'home',
  components: { FooterSpace },
  data () {
    return {
      chosenIndex: 0,
      elderId: '',
      elderInfo: {},
      elderList: [],
      defaultPic: defaultPic,
      gentime: '',
      signList: []
    }
  },
  methods: {
    initSignList () {
      this.signList = [
        //   {
        //   signCode: '',
        //   title: '睡眠',
        //   typePic: shuimian,
        //   mark: '总时长',
        //   value: '',
        //   unit: ''
        // },
        {
          signCode: 'blood_pressure',
          title: '血压',
          typePic: xueya,
          mark: '',
          signId: [],
          value: [],
          unit: ''
        },
        {
          signCode: 'blood_oxygen',
          title: '血氧',
          typePic: xueyang,
          mark: '',
          signId: [],
          value: [],
          unit: ''
        },
        {
          signCode: 'heart_rate',
          title: '心率',
          typePic: xinlv,
          mark: '',
          signId: [],
          value: [],
          unit: ''
        }
      ]
    },
    goPage (path) {
      this.$router.push(path)
    },
    showDetail (item) {
      if (item.value.length <= 0) {
        return notify('暂无数据')
      }

      sessionStorage.setItem(item.signCode, JSON.stringify(item.signId))

      this.goPage(`/dataDetail/${item.signCode}`)
    },
    getElderList (contactorId) {
      this.$http
        .GetElderByContactorId({
          contactorId
        })
        .then(res => {
          if (res.length > 0) {
            this.elderList = res
            // 默认选取第一个

            const curElderInfo = JSON.parse(
              sessionStorage.getItem('curElderInfo')
            )
            if (curElderInfo) {
              this.chosenIndex = this.elderList.findIndex(
                item => item.elderId === curElderInfo.elderId
              )
              if (this.chosenIndex >= 0) {
                return this.choseElder(this.chosenIndex)
              }
            }

            this.choseElder(this.chosenIndex)
          }
        })
    },
    choseElder (num) {
      this.elderInfo = this.elderList[num]
      // 当前用户数据存入缓存
      sessionStorage.setItem('curElderInfo', JSON.stringify(this.elderInfo))

      this.initSignList()

      this.getInfo(this.elderInfo.elderId)
    },
    getInfo (elderId) {
      this.$http
        .GetElderInfoWithSignByElderId({
          elderId
        })
        .then(res => {
          if (res) {
            // 处理体征数据
            this.signList.forEach(signItem => {
              // 重置数据
              signItem.signId = []
              signItem.value = []

              const tempRecordList = res.signLastedRecord.filter(
                item => item.signCode.indexOf(signItem.signCode) >= 0
              )

              tempRecordList.forEach(item => {
                signItem.signId.push(item.signId)
                signItem.value.push(item.signValue)

                signItem.gentime = this.$moment(item.gentime).format('YYYY-MM-DD HH:mm')
              })
            })

            this.gentime = this.signList.find(item => item.gentime).gentime
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
.home {
  .topSpace {
    background: #25aeff;
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

            span {
              font-size: 14px;
              opacity: 0.8;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
