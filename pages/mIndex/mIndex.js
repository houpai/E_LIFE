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
    if (query === 'mRanking') {
      wx.navigateTo({
        url: '/pages/mRanking/mRanking'
      })
    }else if(query === 'mDataSys') {
      wx.navigateTo({
        url: '/pages/mDataSys/mDataSys'
      })
    }
  },
  goSetting() {
    // wx.navigateTo({
    //   url: '/pages/setting/setting'
    // })
  }
})