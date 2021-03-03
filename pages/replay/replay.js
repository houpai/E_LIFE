

const app = getApp()



Page({
  data: {
    height: '',
    top: "",
    active: 0,
    searchValue:'',
  },
  onChangeSearch(e) {
    this.setData({
      searchValue: e.detail,
    });
  },
  onSearch() {
    console.log('search emit')
  },
  // 切换tab类型
  onChange(event) {
    this.setData({
      active: event.detail.name
    })
  },
  // 触底加载 分页逻辑
  scrolltolower(e) {
    console.log("滚动到底部", e);
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