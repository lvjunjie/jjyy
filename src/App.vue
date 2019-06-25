<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "PingFangSC-regular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #101010;
  font-size: 14px;


}

</style>
