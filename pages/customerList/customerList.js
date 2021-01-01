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
  onLoad: function () {
    
  }
})