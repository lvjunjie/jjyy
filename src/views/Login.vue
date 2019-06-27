<template>
  <div class="login">
    <div class="logo-space">
      <h1>玖久易养</h1>
    </div>
    <div class="input-space">
      <van-cell-group>
        <van-field left-icon="manager" placeholder="请输入账号" v-model="userNameOrEmailAddress"/>
      </van-cell-group>
      <van-cell-group>
        <van-field
          style="margin-top: 20px"
          left-icon="lock"
          type="password"
          placeholder="请输入密码"
          v-model="password"
        />
      </van-cell-group>
      <div class="action-space">
        <div>
          <label>
            <input type="checkbox" v-model="remember">
            记住密码
          </label>
        </div>
        <div>
          <label @click="forgetPassword()">忘记密码?</label>
        </div>
      </div>

      <button @click="login()" :disabled="isDisable">登录</button>
    </div>
  </div>
</template>

<script>
import { initToken } from '@/utils/common'

export default {
  name: 'login',
  data () {
    return {
      userNameOrEmailAddress: '',
      password: '',
      remember: false
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
          const path = '/index/home'
          this.$router.push(path)
        })
    },
    forgetPassword () {
      alert('忘记密码操作')
    }
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
.logo-space {
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.25rem;
    font-family: "PingFangSC-bold";
    color: #8c8c8c;
  }
}

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
      background: #6f6f6f;
    }
  }
}

[class*="van-hairline"]::after {
  border-top: 0 solid #ebedf0;
}
</style>
