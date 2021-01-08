const app = getApp()

import {loginBg} from "../../assets/base64Img/loginBg"

Page({
  data: {
    loginBannerBg:loginBg.loginBg,
    passwordType:true,
    defaultType:true,
    userName:'',
    password:'',
    userNameFocus:false,
    phoneFocus:false,
    codeFocus:false,
    passwordFocus:false, // 是否是账号密码登录
    passwordLogin:true,
    count:0,
    codeTimer:null,
    phone:"",
    code:''
  },
  eyeStatus: function () {
    let defaultType = !this.data.defaultType
    let passwordType = !this.data.passwordType
    this.setData({
      defaultType: defaultType,
      passwordType: passwordType,
      passwordFocus:true
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
      userNameFocus:true
    })
  },
  clearPhone() {
    let phone = '';
    this.setData({
      phone: '',
      phoneFocus:true
    })
  },
  loginSubmitHandle() {
    console.log('login btn submit');
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },

  loginTypeChange() {
    let passwordLogin = !this.data.passwordLogin;
    let loginBannerBg = passwordLogin ? loginBg.loginBg : loginBg.loginBg2
    this.setData({
      passwordLogin:passwordLogin,
      loginBannerBg:loginBannerBg
    })
  },
  sendCode() {
    if(this.data.count >=  1) return false;
    clearInterval(this.data.codeTimer);
    this.setData({
      count:60
    })
    this.codeTimer = setInterval(()=> {
      let count = this.data.count;
      count--;
      this.setData({
        count: count
      })
      if( count <= 1) {
        clearInterval(this.data.codeTimer)
      }
    },1000)
    this.setData({
      codeFocus:true
    })
  },
  onLoad: function () {

  }
})
