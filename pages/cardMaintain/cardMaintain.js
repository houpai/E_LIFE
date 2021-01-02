const app = getApp()


Page({
  data: {
    cardName:'', // 会员卡名称
    priceValue:'', // 办卡价格
    integralValue:'',// 实际价值
    fileList:[], // 会员卡图片
    bonusValue:'', // 分红值
    validityValue:'', // 有效期
    isEdit:false, 
    type:'add' // 新增/编辑
  },
  cardNameChange(e) {
    this.setData({
      cardName:e.detail
    })
  },
  priceValueChange(e) {
    this.setData({
      telValue:e.detail
    })
  },
  integralValueChange(e) {
    this.setData({
      addressValue:e.detail
    })
  },
  bonusValueChange(e) {
    this.setData({
      bonusValue:e.detail
    })
  },
  validityValueChange(e) {
    this.setData({
      validityValue:e.detail
    })
  },
  // 上传图片获取临时地址
  cardImgload(event) {
    const { file } = event.detail;
    const { fileList = [] } = this.data;
    fileList.push({ ...file, url: file.url});
    this.setData({ fileList });
  },
  deleteCardImg() {
    this.setData({
      fileList:[]
    })
  },
  isEditToggle() {
    let isEdit = !this.data.isEdit;
    this.setData({
      isEdit:isEdit
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.titleName,
    })
    this.setData({
      type:options.type,
      isEdit:options.type === 'add' ? true : false
    })
  }
})
