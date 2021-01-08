Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    lists: [],
    page: 1,
    number: 30,
    height: '',
    isFinish:false
  },

  // 滑动底部分页加载 此处为模拟
  lower() {
    console.log('lower emit')
    if(this.data.lists.length > 60) {
      this.setData({
        isFinish:true
      })
    }
    if(this.data.isFinish) return false
    let lists = this.data.lists.concat([]);
    this.setData({
      lists:this.data.lists.concat(lists)
    })

  },
  onLoad: function (options) {
    this.setData({
      lists: this.data.list.slice(this.data.page, this.data.number),
      height: wx.getSystemInfoSync().windowHeight
    })
  }
})