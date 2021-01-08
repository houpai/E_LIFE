const app = getApp()

Page({
  data: {
    activeNames:'', // 此处可能在循环模板里使用 需要实际修改 详情见文档https://youzan.github.io/vant-weapp/#/collapse
    dialogShow:false,
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  closeDialog() {
    this.setData({
      dialogShow:false
    })
  },
  submitHandle() {
    this.setData({
      dialogShow:true
    })
  },
  onLoad: function () {

  }
})