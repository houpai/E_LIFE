const app = getApp()

Page({
  data: {
   
  },
  identitySelect(e) {
    let identity = e.currentTarget.dataset.identity
    console.log('e ====',identity)
    wx.navigateTo({
      url: `/pages/login/login?identity=${identity}`
    })
  },
  onLoad: function () {
    
  }
})