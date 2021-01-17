import * as echarts from '../../components/ec-canvas/echarts';
import {
  getCurrentMonthTime,
  getCurrentYearTime,
  formatTime
} from '../../utils/util'

const app = getApp()
let chart = null;
let oneComponent = null;
var option = {
  color: ["#B761F7"],
  grid: {
    containLabel: true,
    left: '20px',
    right: '40px',
    top: "12px"
  },
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
  },
  yAxis: {
    x: 'center',
    type: 'value',
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        type: 'solid'
      }
    },
    axisLine: {
      show: false
    },
  },
  series: [{
    name: 'A',
    type: 'line',
    smooth: true,
    data: [18, 36, 65, 30, 78, 40, 33],
    areaStyle: {
      normal: {
        //前四个参数代表位置 左下右上，如下表示从上往下渐变色 紫色到暗蓝色，
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [{
              offset: 0,
              color: '#B761F7'
            },
            {
              offset: 1,
              color: '#FFFFFF'
            }
          ]
        )
      }
    },

  }]
};

function initChart(chart) {
  // chart = echarts.init(canvas, null, {
  //   width: width,
  //   height: height,
  //   devicePixelRatio: dpr // new
  // });
  // canvas.setChart(chart);

  chart.setOption(option);
  return chart;
}


Page({
  data: {
    height: '',
    top: "",
    active: 0,
    achievement: 0,
    canvasHeight: 300,
    ec: {
      // onInit: initChart,
      lazyLoad: true
    },
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
    dataType:0,
    achievement:0,
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
  achievementChange(event) {
    wx.showToast({
      title: `切换类型 ${event.detail.name}`,
      icon: 'none',
    });
    this.setData({
      achievement:event.detail.name
    })

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
    this.initCanvas()
  },
  timeSelectClose() {
    this.setData({
      calendarShow: false
    })
    this.initCanvas()
  },
  initCanvas: function () {
    oneComponent = this.selectComponent('#mychart-dom-line');
    oneComponent.init((canvas, width, height) => {
      console.log('canvas ===', canvas, width, height)
      const chartObj = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      initChart(chartObj)
      chart = chartObj;
      return chartObj;
    });
  },
  // 查看会员卡业绩详情
  goCardDetail() {
    let dataType = this.data.dataType;
    wx.navigateTo({
      url: `/pages/mCardData/mCardData?dataType=${dataType}`
    })
  },
  goProductDetail() {
    wx.navigateTo({
      url: `/pages/mProductData/mProductData`
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
    oneComponent = this.selectComponent('#mychart-dom-line');
    this.initCanvas()
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