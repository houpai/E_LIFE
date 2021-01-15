const app = getApp()

Page({
  data: {
    searchValue:'',
    height: '',
    top: "",
    selectId:''
  },
  storeSelect(e) {
    let id = e.currentTarget.dataset.index;
    this.setData({
      selectId:id
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
        height: wx.getSystemInfoSync().windowHeight - that.data.top - 220
      })
    }, 1000)
  },
})