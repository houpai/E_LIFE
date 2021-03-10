const app = getApp()

Page({
  data: {
    dialogShow:false,
    renewValue:''
  },
  openMembership() {
    wx.navigateTo({
      url: '/pages/openMembership/openMembership'
    })
  },
  renewValueChange(e) {
    
  },
  closeDialog() {
    this.setData({
      dialogShow:false
    })
  },
  openDialog() {
    this.setData({
      dialogShow:true
    })
  },
  onLoad: function () {
    
  }
})