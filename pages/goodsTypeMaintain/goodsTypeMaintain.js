//stoeSys.js
const app = getApp()


Page({
  data: {
    bonusName: "",
  
  },

  bonusNameChange(e) {
    this.setData({
      bonusName: e.detail
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.titleName,
    })
  }
})