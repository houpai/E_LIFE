const app = getApp()



Page({
  data: {
    height: '',
    top: "",
  },

  // 触底加载 分页逻辑
  scrolltolower(e) {
    console.log("滚动到底部", e);
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
