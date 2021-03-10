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
    isFinish:false,

    // 3.10新增
    top:'',
    isActive:1,
    timeCheckShow:false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
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

  // 3.10有修改
  onLoad: function (options) {
    this.setData({
      lists: this.data.list.slice(this.data.page, this.data.number),
    })
  },

 //3.10新增
  openTimeCheck() {
    this.setData({
      timeCheckShow: true
    })
  },

  closeTimeCheck() {
    this.setData({
      timeCheckShow: false
    })
  },


  //3.10新增
  typeChange(e) {
    this.setData({
      isActive:e.target.dataset.type
    })
  },

  //3.10新增
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },

  //3.10新增 获取时间戳转换成时间文本
  submitCheck(event) {
   console.log(event.detail)
   this.setData({
    timeCheckShow: false
  });
  },

  // 3.10新增
  onReady: function () {
    var that = this;
    wx.createSelectorQuery().select('#topContainer_box').boundingClientRect(function (rect) {
      that.setData({
        top: rect.top,
      })
    }).exec();
    setTimeout(() => {
      that.setData({
        height: wx.getSystemInfoSync().windowHeight - that.data.top
      })
    }, 1000)
  },
})