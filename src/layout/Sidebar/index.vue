<template>
  <!-- <div class="sidebar-content"> -->
  <div>
    <!-- sidebar 左侧菜单 -->
    <!-- <p v-for="(item, index) in 1000" :key="index">{{item}}</p> -->

    <!-- <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <template #title>个人中心</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>数据可视化</template>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <template #title>
              <el-icon><location /></el-icon>
            </template>
            员工管理
          </el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
          <el-menu-item index="1-3">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>文章</template>
      </el-menu-item>
    </el-menu> -->

    <el-menu
      active-text-color="#ffd04b"
      background-color="#304157"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  background-color: #304157;
  color: #ccc;
}
</style>
