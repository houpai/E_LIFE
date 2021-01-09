//stoeSys.js
const app = getApp()


Page({
  data: {
    bonusValue: '',
    bonusName: "",
  
  },
  bonusValueChange(e) {
    this.setData({
      bonusValue: e.detail
    })
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