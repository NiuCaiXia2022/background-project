<template>
  <!-- 展示svg 在线图标 -->
  <div
    v-if="isExternal"
    class="svg-icon svg-external-icon"
    :style="styleSvgIcon"
  ></div>
  <!-- 展示svg 本地图标 -->

  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup>
// 父传子 defineProps 接收
import { defineProps, computed } from 'vue'
import { isExternal as external } from '../utils/validate.js'
// 保存传的值
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})
const styleSvgIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
  }
})
const isExternal = computed(() => {
  // console.log(external(props.icon));返回布尔值
  return external(props.icon)
})
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
