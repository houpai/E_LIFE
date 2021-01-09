const app = getApp()

Page({
  data: {
    height: '',
    top: ""
  },
  // 滑动底部触发
  scrolltolower() {

  },
  addBonus(e) {
    let type = e.currentTarget.dataset['type']
    let titleName = type === 'add' ? '新增分红方案':'编辑分红方案'
    wx.navigateTo({
      url: `/pages/goodsMaintain/bonusMaintain?titleName=${titleName}&type=${type}`
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