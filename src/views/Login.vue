<template>
  <div id="login">
    <div class="logo-space">
      <img src="../assets/images/logo.png">
    </div>
    <div class="inputGroup">
      <div class="inputItem">
        <i class="fa fa-user fa-2x" aria-hidden="true"></i>
        <input placeholder="请输入账号" v-model="userNameOrEmailAddress"/>
      </div>
      <div class="inputItem">
        <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </div>

      <button @click="login()" :disabled="isDisable">登录</button>
    </div>

  </div>
</template>

<script>
import { initToken, clearStore } from '@/utils/common'

export default {
  name: 'login',
  data () {
    return {
      userNameOrEmailAddress: '',
      password: '',
      remember: true
    }
  },
  computed: {
    isDisable: function () {
      return !this.userNameOrEmailAddress || !this.password
    }
  },
  methods: {
    login () {
      if (this.remember) {
        localStorage.setItem('loginInfo', JSON.stringify({ userNameOrEmailAddress: this.userNameOrEmailAddress, password: this.password }))
      } else {
        localStorage.removeItem('loginInfo')
      }

      this.$http
        .Authenticate({
          userNameOrEmailAddress: this.userNameOrEmailAddress,
          password: this.password
        })
        .then(res => {
          initToken(res)
          const path = '/home'
          this.$router.push(path)
        })
    },
    forgetPassword () {
      alert('忘记密码操作')
    }
  },
  beforeCreate () {
    clearStore()
  },
  mounted () {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    if (loginInfo) {
      this.userNameOrEmailAddress = loginInfo.userNameOrEmailAddress
      this.password = loginInfo.password
      this.remember = true
    }
  }
}
</script>
<style scoped lang="less">

#login {
  background: url('../assets/images/loginBg.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  min-height: 100vh;
  /*overflow: hidden;*/
  position: relative;
  padding-top: 132px;

  .logo-space {
    width: 96px;
    height: 96px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .inputGroup {
    margin-top: 120px;
    .inputItem {
      width: 250px;
      height: 40px;
      position: relative;
      margin: 20px auto;
      i {
        color: #3CAFD6;
        /*font-size: 20px;*/
        position: absolute;
        top: 5px;
        left: 0;
      }

      input {
        outline: none;
        border: none;
        border-bottom: 1px solid #fff;
        width: 100%;
        height: 100%;
        padding-left: 32px;
        background: transparent;
        opacity: 0.7;
        color: #fff;
        font-size: 14px;

      }
    }

    button {
      display: block;
      outline: none;
      border: none;
      height: 49px;
      border-radius: 49px;
      text-align: center;
      width: 306px;
      margin: 100px auto 0;
      font-size: 14px;
      background: #FDD33B;

      &:disabled {
        background: #bfbfbf;
      }
    }
  }
}

xo

.input-space {
  padding: 0 3rem;

  .action-space {
    margin-top: 20px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }

  label {
    display: flex;
    align-items: center;

    input {
      margin-right: 5px;
    }
  }

  button {
    margin-top: 40px;
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    height: 2.4rem;
    color: #fff;
    border-radius: 2.4rem;
    background: #1989fa;

    &:disabled {
      background: #bfbfbf;
    }
  }
}

</style>
