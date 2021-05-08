const app = getApp()

Page({
  data: {
    passwordType: true,
    defaultType: true,
    userName: '',
    password: '',
    userNameFocus: false,
    phoneFocus: false,
    codeFocus: false,
    passwordFocus: false, // 是否是账号密码登录
    passwordLogin: true,
    count: 0,
    codeTimer: null,
    phone: "",
    code: '',
    identity: '',
    loginTitle: '欢迎来到老板端',
    xieyiChecked:false,
    xieyiShow:false,
    timer:null,
    seconds:5,
    isRead:false
  },

  onChange(event) {
    console.log('event====', event)
    if(event.detail && !this.isRead) {
      this.openXieyiDialog()
    } else {
      this.setData({
        xieyiChecked: event.detail,
      });
    }
  },

  closeXieyiDialog() {
    clearInterval(this.data.timer)
    this.setData({
      xieyiShow: false,
    });

    if(!this.data.isRead) {
      setTimeout(()=>{
        this.setData({
          seconds: 5,
        });
      },100)
    }
  },

  openXieyiDialog() {
    clearInterval(this.data.timer)

    if(!this.data.isRead) {
      this.data.timer = setInterval(()=>{
        let seconds = this.data.seconds;
        seconds --;
        if(seconds < 1) {
          clearInterval(this.data.timer)
          this.setData({
            isRead:true
          })
        }
        this.setData({
          seconds:seconds
        })
      },1000)
    }

    this.setData({
      xieyiShow: true,
    });
  },

  isReadedXieyi() {
    this.setData({
      xieyiChecked:true,
      xieyiShow:false
    })
  },

  eyeStatus: function () {
    let defaultType = !this.data.defaultType
    let passwordType = !this.data.passwordType
    this.setData({
      defaultType: defaultType,
      passwordType: passwordType,
      passwordFocus: true
    })
  },
  // 账号输入
  inputWatchUser(e) {
    this.setData({
      userName: e.detail.value
    })
    console.log('userName ===', this.data.userName)
  },
  // 密码输入
  inputWatchPassword(e) {
    this.setData({
      password: e.detail.value
    })
    console.log('password ===', this.data.password)
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
  clearUserName() {
    let userName = '';
    this.setData({
      userName: userName,
      userNameFocus: true
    })
  },
  clearPhone() {
    let phone = '';
    this.setData({
      phone: '',
      phoneFocus: true
    })
  },
  loginSubmitHandle() {
    console.log('login btn submit');


    // 补充上协议阅读的协议
    if(!this.data.xieyiChecked) {
      wx.showToast({
        title: `请先阅读服务协议`,
        icon: 'none',
      });
      return false
    }


    wx.navigateTo({
      url: '/pages/index/index'
    })
  },

  loginTypeChange() {
    let passwordLogin = !this.data.passwordLogin;
    this.setData({
      passwordLogin: passwordLogin,
    })
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
  onLoad: function (options) {
    this.setData({
      identity: options.identity
    })

    if (this.data.identity === 'boss') {
      this.setData({
        loginTitle: '欢迎来到老板端'
      })
    } else if (this.data.identity === 'staff') {
      this.setData({
        loginTitle: '欢迎来到员工端'
      })
    } else if (this.data.identity === 'shareholder') {
      this.setData({
        loginTitle: '欢迎来到股东端'
      })
    } else if (this.data.identity === 'business') {
      this.setData({
        loginTitle: '欢迎来到业务员端'
      })
    }
  }
})
