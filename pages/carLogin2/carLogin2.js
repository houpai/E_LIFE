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

    xieyiChecked:false,
    xieyiShow:false,
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
