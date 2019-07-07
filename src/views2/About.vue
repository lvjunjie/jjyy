<template>
  <div class="about">
    <div class="info-space">
      <div class="photo">
        <img src="../assets/temp.jpg">
      </div>
      <pre>      玖久易养是利用物联网、大数据管理分析技术分析老人身体健康数据，并将老人数据信息可视化；利用互联网+服务使养老便捷化；利用AI人工智能，解决老年人日常护理、疾病自查、康复等。
      我们致力于提高养老院对老人身体健康状况的检测水平，利用数据信息可视化的新型养老系统，使养老更便捷。</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {}
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.about {
  padding: 10px;
}

.info-space {
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  position: relative;
  padding-top: 60px;
  margin-top: 60px;
  min-height: 65vh;

  .photo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    width: 60px;
    width: 60px;
    border-radius: 60px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  pre {
    word-break: break-all;
    white-space: pre-wrap;
  }
}
</style>
