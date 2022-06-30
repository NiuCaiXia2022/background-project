<template>
  <div class="navbar-content">
    <!-- navbar -->

    <!-- vsg  折叠图标 -->
    <div class="navbar-icon">
      <el-icon>
        <!-- 开 -->
        <svg-icon icon="hamburger-opened"></svg-icon>
        <!-- 关 -->
        <!-- <svg-icon icon="hamburger-closed"></svg-icon> -->
      </el-icon>
    </div>
    <div class="navbar-left">左</div>

    <div class="navbar-secete">
      <!-- 下拉菜单 -->
      <el-dropdown trigger="click" @command="handleNavbarDropdown">
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="avatarUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <!-- divided 分割线 -->
            <el-dropdown-item divided command="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
// 导入路由
import { useRouter } from 'vue-router'
// vuex
import { useStore } from 'vuex'
// vue
import { computed } from 'vue'

const store = useStore()
const router = useRouter() // 路由
// 获取所有路由
// router.getRoutes()

// 获取右上角的 图片信息
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})

// 点击下拉菜单
const handleNavbarDropdown = (command) => {
  // console.log(command)
  switch (command) {
    case 'home':
      handlenavbarHome()
      break
    case 'logout':
      handlenavbarLogout()
      break
  }
}

// 返回首页
const handlenavbarHome = () => {
  router.push('/')
}

// 退出登录
const handlenavbarLogout = async () => {
  try {
    // 调用 logout 清空本地 清空vuex
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang="scss" scoped>
.navbar-content {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 20px;
  overflow: hidden;

  .navbar-icon {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    font-size: 22px;
    padding: 5px 0 0;
  }
  .navbar-left {
    float: left;
    margin-left: 16px;
  }
  .navbar-secete {
    float: right;
    .el-avatar {
      background: none;
      margin-top: 5px;
    }
  }
}
</style>
