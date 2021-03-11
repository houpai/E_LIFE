const app = getApp()

Page({
  data: {
    searchValue: '',
    height: '',
    top: "",
    // 3.10新增
    selectShow:false,
    startTimeShow:false,
    endTimeShow:false,
    startTime: new Date().getTime(),
    endTime: new Date().getTime(),
    startTimeText:'2021-1月',
    endTimeText:'2021-2月',

    
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
      url: '/pages/memberDetail/memberDetail'
    })
  },


  // 3.10新增
  selectOpen() {
    this.setData({
      selectShow:true
    })
  },

  // 3.10新增
  selectShowClose() {
    this.setData({
      selectShow:false
    })
  },

  // 3.10新增 获取时间戳转换成时间文本
  submitStartTime() {
    this.setData({
      startTimeShow: false
    });
  },
 //  获取时间戳转换成时间文本
  submitEndTime() {
    this.setData({
      endTimeShow: false
    });
  },
  onInputStartTime(event) {
    this.setData({
      startTime: event.detail,
    });
  },
  onInputEndTime(event) {
    this.setData({
      endTime: event.detail,
    });
  },
  // 确保关闭其他pop
  selectStartTime() {
    this.setData({
      startTimeShow: true,
      endTimeShow: false
    });
  },
  selectEndTime() {
    this.setData({
      endTimeShow: true,
      startTimeShow: false,
    });
  },
  closeStartTime() {
    this.setData({
      startTimeShow: false,
    });
  },
  closeEndTime() {
    this.setData({
      endTimeShow: false,
    });
  },
  cancelSelect() {
    this.setData({
      selectShow: false,
    });
  },
  submitSelect() {
    
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