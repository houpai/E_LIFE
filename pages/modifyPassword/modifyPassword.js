//stoeSys.js
const app = getApp()


Page({
  data: {
    phone:'',
    verificationCode:'',
    password:'',
    passwordAgain:'',
    countDown:0,
    timer:null
  },
  phoneChange(e) {
    this.setData({
      phone:e.detail
    })
  },
  verificationCodeChange(e) {
    this.setData({
      verificationCode:e.detail
    })
  },
  passwordChange(e) {
    this.setData({
      password:e.detail
    })
  },
  sendVerificationCodeChange() {
    if(this.data.countDown) {
      return false
    }
    this.setData({
      countDown:60
    })

    clearInterval(this.data.timer);

    this.data.timer = setInterval(() => {
      let countDown = this.data.countDown
      countDown --;
      this.setData({
        countDown:countDown 
      })
      if(this.data.countDown <= 1) {
        clearInterval(this.data.timer);
      }
    },1000)
  },
  passwordAgainChange(e) {
    this.setData({
      passwordAgain:e.detail
    })
  },
  // 确认修改
  submitHandle() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  onLoad: function () {

  }
})
