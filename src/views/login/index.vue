<template>
  <div class="login-content">
    <!-- 使用icon -->
    <!-- 表单 -->
    <el-form
      :model="loginForm"
      ref="LoginForm"
      :rules="logingRoules"
      class="loginform"
    >
      <div class="login-top">
        <h3 class="login-title">用户登录</h3>

        <p class="icon">
          <span class="icon-next">
            <el-tooltip content="国际化" placement="bottom" effect="light">
              <el-button><svg-icon icon="language"></svg-icon></el-button>
            </el-tooltip>
          </span>
        </p>

        <!-- <el-tooltip
          class="box-item"
          effect="dark"
          content="Bottom Center prompts info"
          placement="bottom"
        >
          <el-button>bottom</el-button>
        </el-tooltip>
        <span class="icon">
          <svg-icon icon="language"></svg-icon>
        </span> -->

        <!-- 阿里巴巴图标-封装-显示 -->
        <!-- <IconPdf icon="icon-icon-test" size="50" color="#fff"></IconPdf> -->
        <!-- 阿里巴巴图标-本地图标-显示 -->
        <!-- <span
          class="iconfont icon-icon-test"
          style="font-size: 50px; color: '#fff'"
        ></span> -->

        <!-- svg-封装-显示-->
        <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
        <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon> -->

        <!-- <span class="icon">icon</span> -->
        <!-- <span class="icon">
          <svg-icon icon="passwordStatus"></svg-icon>
        </span> -->
        <!-- <svg-icon class="svg-icon " icon="passwordStatus"></svg-icon> -->
      </div>
      <el-form-item prop="username">
        <!-- 第一种icon -->
        <span class="svg-content">
          <el-icon>
            <!-- <avatar /> -->
            <svg-icon icon="user"></svg-icon>
          </el-icon>
        </span>
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="inputType" v-model="loginForm.password">
          <!-- 第二种icon -->
          <template #prefix>
            <el-icon class="el-input__icon">
              <!-- <search/> -->
              <svg-icon icon="password"></svg-icon>
            </el-icon>
          </template>
          <template #suffix>
            <!-- svg图标 -->
            <span class="svg-pwd" @click="handlePasswordStatus">
              <el-icon>
                <svg-icon :icon="passwordStatus"></svg-icon>
              </el-icon>
            </span>
          </template>

          <!-- <template #suffix>
            <el-icon
              v-if="inputType === 'password'"
              @click="handlePasswordStatus()"
              class="el-input__icon"
            >
              <Hide />
            </el-icon>
            <el-icon
              v-else
              @click="handlePasswordStatus()"
              class="el-input__icon"
            >
              <View />
            </el-icon>
          </template> -->
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="form-bottom" type="primary" @click="handleLoginForm()"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
// script setup 另一种方式 不用data return
<script setup>
/***
 * element-plus  内置icon图标
 * 阿里巴巴矢量图标
 * svg图标(两种)
 */
// 引入 reactive 参数必须是对象
import { reactive, ref, computed } from 'vue'
// 图标
// import { Avatar, Search, View, Hide } from '@element-plus/icons-vue'
// 引入 封装验证
import { validatePassword } from './rule.js'
// 封装的 Login 接口
import UserLogin from '../../api/login.js'
// 引入 md5 加密
import md5 from 'md5'
// 导入 深拷贝 utli
import util from '../../utils/util.js'
// 导入vuex
import { useStore } from 'vuex'
// 导入 svg
// import SvgIcon from '../../components/SvgIcon'

// 阿里巴巴图标 引入
// import IconPdf from '../../components/Icon.vue'

// 验证 移动到 rule.js
const LoginForm = ref(null) // 表单验证
const store = useStore()

const inputType = ref('password') // 密码状态

// 表单数据
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})

// 验证表单数据
const logingRoules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})

// 点击登录
const handleLoginForm = async () => {
  if (!LoginForm.value) return
  await LoginForm.value.validate(async (valid) => {
    if (valid) {
      // alert('登录')
      const newLoginForm = util.typeData(loginForm)
      // console.log(newLoginForm)
      newLoginForm.password = md5(newLoginForm.password)
      // const response = await UserLogin.getLogin(newLoginForm)
      // console.log(response)
      store.dispatch('user/login', newLoginForm)
    }
  })
}

// svg 图标 眼睛
const passwordStatus = computed(() => {
  return inputType.value === 'password' ? 'eye' : 'eye-open'
})
// 密码切换
const handlePasswordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}

// 登录
// LoginForm.value.validate(async (valid) => {
//   if (!valid) return
//   if (valid) {
//     alert('登录')
//     // const res=await store.dispatch('handleloginsumit',loginform)
//   }
// })
</script>

<style lang="scss" scoped>
// 定义全局颜色
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
//大盒子背景
.login-content {
  height: 100%;
  background-color: $bg;
  position: relative;
  // 表单
  .loginform {
    width: 520px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 160px;
  }
  // 头部标签
  .login-top {
    position: relative;
    .login-title {
      font-size: 26px;
      color: $light_gray;
      text-align: center;
      font-weight: 400;
      margin-bottom: 40px;
    }
    // 图标
    .icon {
      position: absolute;
      top: 8px;
      right: 3px;
      font-size: 18px;
      color: $light_gray;
      background-color: #fff;
      border-radius: 3px;
      padding: 3px 2px;
      .icon-next {
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0);
        padding: 0.5px;
      }
      .icon-next:hover {
        border: 1px solid #000;
        border-radius: 3px;
      }
    }
  }
  // 表单item
  ::v-deep .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    .form-bottom {
      width: 100%;
    }
    .el-input__wrapper {
      background: transparent;
      box-shadow: none;
    }
    .el-input__wrapper {
      height: 46px;
    }
    .el-input__inner {
      color: $cursor !important;
    }
    .el-input__prefix-inner,
    .svg-content {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
    .el-input__prefix-inner {
      padding: 14px 8px 1px 1px;
    }
    .el-form-item__content {
      flex-wrap: nowrap;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }
}
</style>
