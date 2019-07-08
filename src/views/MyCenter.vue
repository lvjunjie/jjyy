<template>
  <div class="page">
    <header-space title="我的" right-title="编辑信息" :right-action="goEdit"></header-space>
    <div class="myCenter">
      <div class="photo-part">
        <img src="../assets/temp.jpg">
      </div>

      <div class="info-space">
        <h4>父亲</h4>
      </div>

      <div class="menu-space">
        <ul>
          <li @click="goPage('/about')">
            <h4>关于我们</h4>
            <i class="fa fa-angle-right"></i>
          </li>
        </ul>
      </div>
    </div>
    <footer-space></footer-space>

  </div>

</template>

<script>

  import FooterSpace from '../components/FooterSpace'
  import HeaderSpace from '../components/HeaderSpace'
  export default {
    name: 'myCenter',
    components: { HeaderSpace, FooterSpace },
    data () {
      return {
      }
    },
    methods: {
      goEdit() {
        this.$router.push('/edit')
      },
      goPage(path) {
        this.$router.push(path)
      }
    },
    mounted () {

    }
  }
</script>

<style lang="less" scoped>
  .myCenter {
    padding: 0 12px;

    .photo-part {
      width: 79px;
      height: 79px;
      border-radius: 79px;
      overflow: hidden;
      margin: 24px auto 10px auto;
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

      h4 {
        font-weight: normal;
        font-size: 16px;
      }
    }

    .menu-space {
      ul {
        margin-top: 23px;
        list-style: none;
        li {
          height: 60px;
          width: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          font-size: 16px;

          h4 {
            font-weight: normal;
            font-size: 16px;
          }

          i {
            font-size: 20px;
          }

        }
      }
    }
  }
</style>
