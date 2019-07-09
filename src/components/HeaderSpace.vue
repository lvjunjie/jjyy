<template>
  <header>
    <div @click="goBack()">
      <i class="fa fa-angle-left"></i>
    </div>
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <div @click="rightAction()">
      <h4>{{rightTitle}}</h4>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerSpace',
  props: ['title', 'rightTitle', 'rightAction'],
  data () {
    return {

    }
  },
  watch: {

  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }

  },

  created () {

  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
  header {
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 12px;
    background: #25AEFF;

    div:not(:nth-child(2)) {
      width: 60px;
    }

    div:last-child {
      text-align: right;
    }

    i {
      font-size: 20px;
    }

    h3 {
      font-weight: 17px;
    }

    h4 {
      font-size: 12px;
      font-weight: normal;
    }
  }

</style>
