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
  timeStarText = timeStarText.slice(0,timeStarText.length - 9)

  let timeEndText = formatTime(new Date(timeEnd));
  timeEndText = timeEndText.slice(0,timeEndText.length - 9)


  return {
    timeStar:timeStar,
    timeEnd:timeEnd,
    currentMonthTimeText:timeStarText + ' - ' + timeEndText
  }
}

module.exports = {
  formatTime: formatTime,
  getCurrentMonthTime:getCurrentMonthTime
}