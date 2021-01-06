const app = getApp()

Page({
  data: {
    isMember: false,
    show:false,
    dialogShow:false,
    actions:[
      {
        name:'一级',
        per:"(10%)",
        id:1
      },
      {
        name:'二级',
        per:"(20%)",
        id:2
      },
      {
        name:'三级',
        per:"(30%)",
        id:3
      },
      {
        name:'四级',
        per:"(40%)",
        id:4
      },
      {
        name:'五级',
        per:"(50%)",
        id:5
      }
    ]
  },
  onClose() {
    this.setData({ show: false });
  },
  stopUseUse() {
    
  },
  settBonus() {
    this.setData({
      show:true
    })
  },
  // 分红设置
  selectBonus(e) {
    this.setData({
      show:false
    })
  },
  closeDialog() {
    this.setData({
      dialogShow:false
    })
  },
  stopUseUse() {
    this.setData({
      dialogShow:true
    })
  },
  onLoad: function () {

  }
})