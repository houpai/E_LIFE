const app = getApp()

Page({
  data: {
    searchValue:''
  },
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
      url: '/pages/customerDetail/customerDetail'
    })
  },
  onLoad: function () {
    
  }
})