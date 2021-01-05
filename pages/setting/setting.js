const app = getApp()

import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';


Page({
  data: {
   
  },
  logout() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  modifyPassword() {
    wx.navigateTo({
      url: '/pages/modifyPassword/modifyPassword'
    })
  },
  onLoad: function (options) {
   
  }
})