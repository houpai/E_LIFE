const app = getApp()

Page({
  data: {
    searchValue:'',
    height: '',
    top: "",

    // 3.10新增
    shareholderType:'全部股东'
  },
  onChange(e) {
    this.setData({
      searchValue: e.detail,
    });
  },
  onSearch() {
    console.log('search emit')
  },
  goDetail(e) {
    let id = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: '/pages/shareholderDetail/shareholderDetail'
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
        height: wx.getSystemInfoSync().windowHeight - that.data.top - 100
      })
    }, 1000)
  },
})