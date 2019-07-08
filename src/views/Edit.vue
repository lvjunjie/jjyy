<template>
  <div class="page no-footer">
    <header-space title="编辑信息" right-title="保存" :right-action="save"></header-space>
    <div class="edit">
      <ul>
        <li class="menuItem">
          <div class="item">头像</div>
          <div class="item"></div>
        </li>
        <li class="menuItem">
          <div class="item">姓名</div>
          <div class="item"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import HeaderSpace from "../components/HeaderSpace";
export default {
  name: "Edit",
  components: { HeaderSpace },
  data() {
    return {};
  },
  methods: {
    save() {
      console.log(11);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.page {
  min-height: 100vh;
  background: #fff;

  .edit {
    ul {
      list-style: none;
      width: 100%;
      padding: 0 12px;

      .menuItem {
        padding: 0 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 65px;
        border-bottom: 1px solid #aaaaaa;
        font-size: 14px;
        opacity: 0.5;
      }
    }
  }
}
</style>
