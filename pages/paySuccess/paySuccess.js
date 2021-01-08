Page({
  data: {
    value:''
  },
  onChange(event) {
    this.setData({
      value:event.detail
    })
  },
  back() {
    wx.navigateBack({
      delta: 2
    })
  },
  onLoad: function (options) {
    
  }
})