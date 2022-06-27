// loading
import { ElLoading } from 'element-plus'
const loading = {
  loadingInstanst: null,
  open() {
    // 判断 等于空
    if (this.loadingInstanst === null) {
      // 在重新加载
      this.loadingInstanst = ElLoading.service({
        target: 'body',
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  close() {
    // 不等于空
    if (this.loadingInstanst !== null) {
      // 关闭
      this.loadingInstanst.close()
      // 重置
      this.loadingInstanst = null
    }
  }
}

export default loading
