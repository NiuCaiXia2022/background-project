<template>
  <div class="sidebar-content">
    <!-- sidebar 左侧菜单 -->
    <h2 class="layout-title">imooc-admin</h2>
    <!-- 左边菜单 子组件 -->
    <SidebarMenu></SidebarMenu>
  </div>
</template>
<script setup>
import SidebarMenu from './SidebarMenu'
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  background-color: #304157;
  color: #ccc;
}
.layout-title {
  text-align: center;
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  font-size: 16px;
}
.menu-conten {
  ::deep.el-menu-vertical-demo {
    color: #bfcbd9;
  }
}
</style>
