<template>
  <div class="page no-footer">
    <header-space title="关于我们"></header-space>
    <div class="about">
      <div class="content">
        <div class="title">
          <img src="../assets/images/logoTitle.png"/>
        </div>
        <p>
          石家庄塔浠科技有限责任公司是国内领先的智慧养老解决方案与云服务提供商，公司总部位于石家庄市长安区，并在苏州设有研发和服务机构。塔浠科技主营：老年人服务、护理、健康监护、健康管理咨询、居家服务、护工培训、养老机构设立、康复设备研发销售、旅居服务等一系列服务。
        </p>
        <p>
          玖久易养是塔浠科技有限责任公司旗下一款专门为老人研发的智慧养老系统。分为：老人端、子女端和社区端3个APP，让养老变得更简单。
        </p>
      </div>
    </div>
  </div>

</template>
<script>
import HeaderSpace from '../components/HeaderSpace'
export default {
  name: 'about',
  components: { HeaderSpace },
  data () {
    return {}
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.page {
  background: #fff;
  min-height: 100vh;

  .about {
    padding: 75px 15px;
    .content {
      position: relative;
      border: 2px solid #25AEFF;
      border-radius: 5px;
      padding: 35px 15px 27px 15px;

      .title {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 15px;
        width: 180px;
        background: #fff;

        img {
          width: 100%;
        }

        p {
          word-break: break-all;
          color: rgba(33,23,20,1);
          line-height: 22px;
          font-size: 12px;
        }
      }
    }
  }
}

</style>
