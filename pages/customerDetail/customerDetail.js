const app = getApp()

Page({
  data: {
    isMember:false
  },
  openMembership() {
    wx.navigateTo({
      url: '/pages/openMembership/openMembership'
    })
  },
  onLoad: function () {
    
  }
})