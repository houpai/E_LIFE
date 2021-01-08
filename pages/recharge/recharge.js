Page({
  data: {
    value:''
  },
  onChange(event) {
    this.setData({
      value:event.detail
    })
  },
  onLoad: function (options) {
    
  }
})