import {
  getCurrentMonthTime,
  getCurrentYearTime,
  formatTime
} from '../../utils/util'

import {chartBg} from "../../assets/base64Img/chartBg"

const app = getApp()



Page({
  data: {
    chartImg:chartBg.chartBg,
    height: '',
    top: "",
    active: 0,
    startTime: '', // 开始时间
    endTime: '', // 结束时间
    timeText: "", // 时间区间文本
    // 自定义时间区间和文本 优化交互体验 此处单独整 切换类型可保留上次自定义的时间
    customObj: {
      startTime: '', // 开始时间
      endTime: '', // 结束时间
      timeText: "", // 时间区间文本
    },
    calendarShow: false,
    minDate: 1609430400000, // 自定义时间可选择的最小时间
    dataType:0, // 面板选中
    achievement:0
  },

  achievementChange(event) {
    wx.showToast({
      title: `切换类型 ${event.detail.name}`,
      icon: 'none',
    });
    this.setData({
      achievement:event.detail.name
    })
  },

  goSearch() {

  },
  
  // 查看详情 传入页面时间参数
  seeDetail() {
    let timeText = '2020.09.09-2020.10.01'
    wx.navigateTo({
      url: `/pages/dataDetail/dataDetail?timeText=${timeText}`
    })
  },
  // 切换时间类型 默认为索引为type 0 本月 1 本年 2 自定义
  onChange(event) {
    this.setData({
      active: event.detail.name
    })
    if (event.detail.name === 0) {
      let timeObj = getCurrentMonthTime()
      this.setData({
        timeText: timeObj.currentMonthTimeText,
        startTime: timeObj.timeStar,
        endTime: timeObj.timeEnd
      })
    } else if (event.detail.name === 1) {
      let timeObj = getCurrentYearTime()
      this.setData({
        timeText: timeObj.currentMonthTimeText,
        startTime: timeObj.timeStar,
        endTime: timeObj.timeEnd
      })
    } else if (event.detail.name === 2) {
      this.setData({
        calendarShow: true
      })
    }
  },

  // 触底加载 分页逻辑
  scrolltolower(e) {
    console.log("滚动到底部", e);
  },
  customTimeSelect() {
    if (this.data.active !== 2) return false
    this.setData({
      calendarShow: true
    })
  },
  // 日历自定义时间区间选择确认
  timeSelectConfirm(event) {
    const [start, end] = event.detail;

    let timeStarText = formatTime(new Date(start));
    timeStarText = timeStarText.slice(0, timeStarText.length - 9)

    let timeEndText = formatTime(new Date(end));
    timeEndText = timeEndText.slice(0, timeEndText.length - 9)

    this.setData({
      calendarShow: false,
      customObj: {
        startTime: new Date(start).getTime(), // 开始时间
        endTime: new Date(end + 60 * 60 * 24 * 1000).getTime(), // 结束时间
        timeText: timeStarText + ' - ' + timeEndText
      },
    });
  
  },
  timeSelectClose() {
    this.setData({
      calendarShow: false
    })
  },
  dataTypeChange(e) {
    let type = e.currentTarget.dataset.type;
    this.setData({
      dataType:type
    })
  },
  onLoad: function () {
    let timeObj = getCurrentMonthTime()
    this.setData({
      timeText: timeObj.currentMonthTimeText,
      startTime: timeObj.timeStar,
      endTime: timeObj.timeEnd,
      calendarShow: false
    })
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