const app = getApp()

Page({
  data: {
    searchValue:'',
    height: '',
    top: ""
  },

  // 3.10新增

  onChange(e) {
    this.setData({
      searchValue: e.detail,
    });
  },
  onSearch() {
    console.log('search emit')
  },



  goCustomerDetail(e) {
    let customerId = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: '/pages/mCustomerDetail/mCustomerDetail'
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