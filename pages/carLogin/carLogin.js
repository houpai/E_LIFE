Page({
  data: {
    loginType:2,

    phoneFocus: false,
    codeFocus: false,
    count: 0,
    codeTimer: null,
    phone: "",
    code: '',
    timer:null,
    seconds:5,
  },
  setLoginType(e) {
    this.setData({
      loginType:e.currentTarget.dataset['type']
    })
  },
  // 手机号输入
  inputWatchPhone(e) {
    this.setData({
      phone: e.detail.value
    })
    console.log('userName ===', this.data.userName)
  },
  // 验证码输入
  inputWatchCode(e) {
    this.setData({
      code: e.detail.value
    })
    console.log('password ===', this.data.password)
  },
  sendCode() {
    if (this.data.count >= 1) return false;
    clearInterval(this.data.codeTimer);
    this.setData({
      count: 60
    })
    this.codeTimer = setInterval(() => {
      let count = this.data.count;
      count--;
      this.setData({
        count: count
      })
      if (count <= 1) {
        clearInterval(this.data.codeTimer)
      }
    }, 1000)
    this.setData({
      codeFocus: true
    })
  },
})
