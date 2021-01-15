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
    // if (query === 'storeIndex') {
    //   wx.navigateTo({
    //     url: '/pages/storeIndex/storeIndex'
    //   })
    // }
  },
  goSetting() {
    // wx.navigateTo({
    //   url: '/pages/setting/setting'
    // })
  }
})