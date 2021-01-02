const app = getApp()

import {loginBg} from "../../assets/base64Img/loginBg"

Page({
  data: {
    loginBannerBg:loginBg.loginBg,
    passwordType:true,
    defaultType:true,
    userName:'',
    password:''
  },
  eyeStatus: function () {
    this.data.defaultType = !this.data.defaultType
    this.data.passwordType = !this.data.passwordType
    this.setData({
      defaultType: this.data.defaultType,
      passwordType: this.data.passwordType
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
  clearUserName() {
    let userName = '';
    this.setData({
      userName: userName
    })
  },
  loginSubmitHandle() {
    console.log('login btn submit');
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  onLoad: function () {

  }
})
