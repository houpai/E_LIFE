Page({
  data: {
    value:''
  },
  onChange(event) {
    this.setData({
      value:event.detail
    })
  },
  pay() {
    wx.navigateTo({
      url: '/pages/paySuccess/paySuccess'
    })
  },
  onLoad: function (options) {
    
  }
})