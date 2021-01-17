const app = getApp()

Page({
  data: {
    height: '',
    top: "",
    isSearch: false, // 搜索
    active: 0,
    searchValue: '',
  },
  // 切换类型
  onChange(event) {
    wx.showToast({
      title: `切换类型 ${event.detail.name}`,
      icon: 'none',
    });
  },
  searchValueChange(e) {

  },
  // 滑动底部触发
  scrolltolower() {

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