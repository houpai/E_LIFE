const app = getApp()

Page({
  data: {
    height: '',
    top: "",

    // 3.10号新增
    goodsType:'全部商品'
  },
  // 滑动底部触发
  scrolltolower() {

  },
  addGoods(e) {
    let type = e.currentTarget.dataset['type']
    let titleName = type === 'add' ? '新增商品':'编辑商品'
    console.log(type,titleName)
    wx.navigateTo({
      url: `/pages/goodsMaintain/goodsMaintain?titleName=${titleName}&type=${type}`
    })
  },



  // 3.10新增 切换类型后用此方法切换下拉菜单的开启/关闭的状态

  onConfirm() {
    this.selectComponent('#item').toggle();
  },


  onLoad: function () {
    
  },
  onReady: function () {
    var that = this;
    wx.createSelectorQuery().select('#topContainer_box').boundingClientRect(function (rect) {
      that.setData({
        top: rect.top,
      })
    }).exec();
    setTimeout(() => {
      that.setData({
        height: wx.getSystemInfoSync().windowHeight - that.data.top - 100
      })
    }, 1000)
  },
})