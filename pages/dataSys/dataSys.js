import * as echarts from '../../components/ec-canvas/echarts';
import {
  getCurrentMonthTime
} from '../../utils/util'

const app = getApp()

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ["#FFBF1E"],
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
                color: '#FFBF1E'
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
      onInit: initChart,
    },
    startTime: '',
    endTime: '',
    timeText: ""
  },
  // 查看详情 传入页面时间参数
  seeDetail() {
    let timeText = '2020.09.09-2020.10.01'
    wx.navigateTo({
      url: `/pages/dataDetail/dataDetail?timeText=${timeText}`
    })
  },
  // 切换类型
  onChange(event) {
    wx.showToast({
      title: `切换类型 ${event.detail.name}`,
      icon: 'none',
    });
  },
  achievementChange(event) {
    wx.showToast({
      title: `切换类型 ${event.detail.name}`,
      icon: 'none',
    });
  },
  // 触底加载 分页逻辑
  scrolltolower(e) {
    console.log("滚动到底部", e);
  },
  onLoad: function () {
    let timeObj = getCurrentMonthTime()
    this.setData({
      timeText: timeObj.currentMonthTimeText,
      startTime: timeObj.timeStar,
      endTime: timeObj.timeEnd
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