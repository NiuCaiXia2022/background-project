<template>
  <div class="layout-content">
    <!-- layout 页面 -->
    <!-- 左边 -->
    <Sidebar class="sidebar-content"></Sidebar>
    <!-- 右 -->
    <div class="main-content">
      <div class="layout-header">
        <Navbar></Navbar>
        <Tagview></Tagview>
      </div>
      <!-- 右下 -->
      <Appmain></Appmain>
    </div>
  </div>
</template>
<script setup>
// 四个子组件
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Appmain from './Appmain'
import Tagview from '../components/TagView'
// store
// import { useStore } from 'vuex'
// import {  ref } from 'vue'
// const store = useStore()
// console.log(store)
// const token = store.getters.token
// console.log(token)
</script>
<style lang="scss" scoped>
.layout-content {
  position: relative;
  width: 100%;
  height: 100%;
  // 左
  .sidebar-content {
    width: 210px;
    height: 100%;
    background-color: #304157;
    overflow: auto;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    // 取消滚动条
    -ms-overflow-style: none;
    // scrollbar-width: none;
    overflow: scroll;
  }
  // 右
  .main-content {
    width: calc(100% - 210px);
    height: 100%;
    margin-left: 210px;
    position: relative;
    padding: 104px 20px 20px 20px;
    // 右上
    .layout-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
      width: calc(100% - 210px);
    }
  }
}
// 取消滚动
::-webkit-scrollbar {
  display: none;
}
</style>
