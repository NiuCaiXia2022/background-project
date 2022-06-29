<template>
  <div class="appmain-content">
    <!-- appmain -->

    <!-- 坑 -->
    <router-view></router-view>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.appmain-content {
  height: calc(100vh - 93px);
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
</style>
