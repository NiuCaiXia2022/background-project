<template>
  <!-- 阿里巴巴图标显示 -->
  <span
    class="iconfont"
    :class="[props.icon]"
    :style="{ 'font-size': props.size + 'px' + ';', color: props.color + ';' }"
  ></span>
  <!-- {{ props.icon }}--{{ props.size }}--{{ props.color }} -->
</template>
<script setup>
// defineProps 接收父组件 传递的参数
import { defineProps } from 'vue'
// 拿变量保存 传递过来的数据 并设置类型
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 16
  },
  color: {
    type: String,
    default: '#000'
  }
})
</script>
