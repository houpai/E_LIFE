const app = getApp()

import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
  data: {
    searchValue: '',
    height: '',
    top: ""
  },
  onChange(e) {
    this.setData({
      searchValue: e.detail,
    });
  },
  onSearch() {
    console.log('search emit')
  },
  // 触底加载 分页逻辑
  scrolltolower(e) {
    console.log("滚动到底部", e);
  },
  checkCard(e) {
    let id = e.currentTarget.dataset['id']
    console.log('id ===', id)
    Dialog.confirm({
      title: '',
      message: '您现选择价格为180元的“红玫瑰”会员卡,此会员可以提供200积分，你是否开卡？',
    }).then(() => {
      // on confirm
    }).catch(() => {
      // on cancel
    });
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