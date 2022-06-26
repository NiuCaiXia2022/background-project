<template>
  <div class="login-content">
    <!-- 表单 -->
    <el-form
      :model="loginForm"
      ref="LoginForm"
      :rules="logingRoules"
      class="loginform"
    >
      <!-- 头部  -->
      <div class="login-top">
        <h3 class="login-title">用户登录</h3>
        <span class="icon">icon</span>
      </div>
      <el-form-item prop="username">
        <!-- 第一种icon -->
        <span class="svg-content">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="inputType" v-model="loginForm.password">
          <!-- 第二种icon -->
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
          <template #suffix>
            <el-icon v-if="inputType==='password'" @click="handlePasswordStatus()" class="el-input__icon">
              <Hide />
            </el-icon>
            <el-icon v-else @click="handlePasswordStatus()" class="el-input__icon">
              <View />
            </el-icon>
          </template>
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
// script setup 另一种方式 不用xiereturn
<script setup>
// 引入 reactive 参数必须是对象
import { reactive, ref } from 'vue'
// 图标
import { Avatar, Search, View, Hide } from '@element-plus/icons-vue'
import { validatePassword } from './rule.js'

const LoginForm = ref(null)// 表单验证
const inputType = ref('password')// 密码状态
// 表单数据
const loginForm = reactive({
  username: '',
  password: ''
})
// 验证 移动到 rule.js
// const validatePassword = (rule, value, callback) => {
//   if (value.length < 6) {
//     callback(new Error('密码不能少于6位'))
//   } else {
//     callback()
//   }
// }

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
  LoginForm.value.validate(async (valid) => {
    if (!valid) return
    if (valid) {
      alert('登录')
      // const res=await store.dispatch('handleloginsumit',loginform)
    }
  })
  // console.log(LoginForm)
  // if (!LoginForm) return
  // await LoginForm.validate((valid) => {
  //   if (valid) {
  //     alert('登录')
  //   }
  // })
  // await formEl.validate((valid, fields)
}
// 密码切换
const handlePasswordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
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
      top: 0;
      right: 0;
      font-size: 22px;
      color: $light_gray;
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
    .el-input__inner {
      color: $cursor !important;
    }
    .svg-content {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
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
