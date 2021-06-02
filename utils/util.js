const moment = require('./moment.min')
moment.locale('en', {
  longDateFormat: {
    I: 'YYYY-MM_DD',
    L: 'YYYY-MM-DD HH:mm'
  }
})


const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 获取当月时间区间文本和时间戳
 * return {
 *  currentMonthTimeText:String,
 *  timeStar: Number,
 *  timeEnd:Number
 * }
 * */
const getCurrentMonthTime = () => {
  let now = new Date(); //当前日期
  let nowMonth = now.getMonth(); //当前月
  let nowYear = now.getFullYear(); //当前年
  let monthStartDate = new Date(nowYear, nowMonth, 1);
  let monthEndDate = new Date(nowYear, nowMonth + 1, 0);
  let timeStar = Date.parse(monthStartDate); // 本月的开始时间 ms时间戳
  let timeEnd = Date.parse(monthEndDate) + 60 * 60 * 24 * 1000; // 本月的结束时间 ms时间戳 为确保精确 取第二天凌晨的时间

  let timeStarText = formatTime(new Date(timeStar));
  timeStarText = timeStarText.slice(0, timeStarText.length - 9)

  let timeEndText = formatTime(new Date(timeEnd));
  timeEndText = timeEndText.slice(0, timeEndText.length - 9)


  return {
    timeStar: timeStar,
    timeEnd: timeEnd,
    currentMonthTimeText: timeStarText + ' - ' + timeEndText
  }
}


/**
 * 获取当年时间区间文本和时间戳
 * return {
 *  currentYearTimeText:String,
 *  timeStar: Number,
 *  timeEnd:Number
 * }
 * */

const getCurrentYearTime = () => {

  //获取本年
  const startDate = moment().year(moment().year()).startOf('year').valueOf();
  const endDate = moment().year(moment().year()).endOf('year').valueOf();

  let timeStarText = formatTime(new Date(startDate));
  timeStarText = timeStarText.slice(0, timeStarText.length - 9)

  let timeEndText = formatTime(new Date(endDate));
  timeEndText = timeEndText.slice(0, timeEndText.length - 9)

  console.log('startDate====',startDate)
  console.log('endDate====',endDate)

  return {
    timeStar: startDate,
    timeEnd: endDate,
    currentMonthTimeText: timeStarText + ' - ' + timeEndText
  }
}

/**
 * 判断数组对象中是否存在某个对象
 * @param arr 数组对象
 * @param origin(String)要匹配的某个字段
 * @param value 要匹配的字段值
 * @return {index: number, value}
 * */
const hasValueFromArray = (arr, origin, value) => {
  if (!Array.isArray) {
    //Polyfill
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
  }
  if (!Array.isArray(arr)) {
    throw new Error("arr 不是一个数组");
  } else {
    let flag = false; //没有匹配
    let temp = {};
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][origin] === value) {
        flag = true;
        temp = arr[i];
        index = i;
        break;
      }
    }
    if (!flag) {
      temp = null;
    }
    return {index: index, value: temp};
  }
}




module.exports = {
  formatTime: formatTime,
  getCurrentMonthTime: getCurrentMonthTime,
  getCurrentYearTime: getCurrentYearTime,
  hasValueFromArray:hasValueFromArray
}
