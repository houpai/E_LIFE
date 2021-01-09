const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  menuLink(e) {
    let query = e.currentTarget.dataset['menu']
    console.log('query ===', query)
    if (query === 'storeIndex') {
      wx.navigateTo({
        url: '/pages/storeIndex/storeIndex'
      })
    } else if (query === 'customer_sys') {
      wx.navigateTo({
        url: '/pages/customerList/customerList'
      })
    } else if (query === 'card_sys') {
      wx.navigateTo({
        url: '/pages/cardSys/cardSys'
      })
    } else if (query === 'member_sys') {
      wx.navigateTo({
        url: '/pages/memberSys/memberSys'
      })
    } else if (query === 'staff_sys') {
      wx.navigateTo({
        url: '/pages/staffSys/staffSys'
      })
    } else if (query === 'shareholder_sys') {
      wx.navigateTo({
        url: '/pages/shareholderSys/shareholderSys'
      })
    } else if(query === 'coupon') {
      wx.navigateTo({
        url: '/pages/coupon/coupon'
      })
    }else if(query === 'wallet') {
      wx.navigateTo({
        url: '/pages/wallet/wallet'
      })
    } else if(query === 'goods_sys') {
      wx.navigateTo({
        url: '/pages/goodsSys/goodsSys'
      })
    } else if(query === 'bonus_sys') {
      wx.navigateTo({
        url: '/pages/bonusSys/bonusSys'
      })
    } else if(query === 'shareBusiness') {
      wx.navigateTo({
        url: '/pages/shareBusiness/shareBusiness'
      })
    }
  },
  goSetting() {
    wx.navigateTo({
      url: '/pages/setting/setting'
    })
  }
})