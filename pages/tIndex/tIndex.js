const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {


  },
  menuLink(e) {
    let query = e.currentTarget.dataset['menu']
    if (query === 'dailiSys') {
      // wx.navigateTo({
      //   url: '/pages/dailiSys/dailiSys'
      // })
    }
  },
})