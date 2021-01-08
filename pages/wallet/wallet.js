const app = getApp()

Page({
  data: {

  },
  goCashOutDetail() {
    wx.navigateTo({
      url: '/pages/cashOutDetail/cashOutDetail'
    })
  },
  recharge() {
    wx.navigateTo({
      url: '/pages/recharge/recharge'
    })
  },
  cashOut() {
    wx.navigateTo({
      url: '/pages/cashOut/cashOut'
    })
  },
  onLoad: function () {

  }
})