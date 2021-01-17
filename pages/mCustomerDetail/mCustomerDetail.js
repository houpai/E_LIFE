const app = getApp()

Page({
  data: {
    searchValue: '',
    height: '',
    top: "",
    achievement:0
  },
  // 切换类型
  achievementChange(event) {
    console.log('event ===',event.detail.name )
    this.setData({
      achievement:event.detail.name
    })
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
        height: wx.getSystemInfoSync().windowHeight - that.data.top - 160
      })
    }, 1000)
  },
})