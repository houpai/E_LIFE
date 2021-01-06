const app = getApp()

Page({
  data: {
    isMember: false,
    is_member: false,
    is_shareholder: false,
    show:true,
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
  openMembership() {
    wx.navigateTo({
      url: '/pages/openMembership/openMembership'
    })
  },
  isShareholderChange({
    detail
  }) {
    wx.showModal({
      title: '提示',
      content: '是否切换股东开关？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            is_shareholder: detail,
            show:true
          });
        }
      },
    });
  },
  isMemberChange({
    detail
  }) {
    wx.showModal({
      title: '提示',
      content: '是否切换员工开关？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            is_member: detail,
            show:true
          });
        }
      },
    });
  },
  // 分红设置
  selectBonus(e) {
    this.setData({
      show:false
    })
  },
  onLoad: function () {

  }
})