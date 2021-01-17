const app = getApp()

Page({
  data: {
    searchValue:'',
    height: '',
    top: ""
  },
  goCustomerDetail(e) {
    let customerId = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: '/pages/customerDetail/customerDetail'
    })
  },
  onLoad: function () {
    
  },
  onReady: function () {
    var that = this;
    wx.createSelectorQuery().select('#topContainer_box').boundingClientRect(function (rect) {
      that.setData({
        top: rect.top,
      })
    }).exec();
    setTimeout(() => {
      that.setData({
        height: wx.getSystemInfoSync().windowHeight - that.data.top - 160
      })
    }, 1000)
  },
})