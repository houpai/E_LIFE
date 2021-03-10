//stoeSys.js
const app = getApp()


Page({
  data: {
    goodsTitle: '',
    goodsPrice: "",
    price: '',
    goodsStock: "",
    dateValue: '',
    instructions: '',
    bonusValue: "",
    is_put: false,
    show: false,
    actions: [{
        name: '一级',
        per: "(10%)",
        id: 1
      },
      {
        name: '二级',
        per: "(20%)",
        id: 2
      },
      {
        name: '三级',
        per: "(30%)",
        id: 3
      },
      {
        name: '四级',
        per: "(40%)",
        id: 4
      },
      {
        name: '五级',
        per: "(50%)",
        id: 5
      }
    ],

    // 3.10新增
    typeValue:'',
    typeShow:false,
    actionsGoodsType: [{
      name: '母婴用品',
      id: 1
    },
    {
      name: '生活用品',
      id: 2
    }
  ],

  },
  goodsTitleChange(e) {
    this.setData({
      goodsTitle: e.detail
    })
  },

  goodsPriceChange(e) {
    this.setData({
      goodsPrice: e.detail
    })
  },

  priceChange(e) {
    this.setData({
      price: e.detail
    })
  },

  goodsStockChange(e) {
    this.setData({
      goodsStock: e.detail
    })
  },

  dateValueChange() {
    this.setData({
      dateValue: e.detail
    })
  },

  instructionsChange() {
    this.setData({
      instructions: e.detail
    })
  },

  bonusValueChange(e) {
    this.setData({
      bonusValue: e.detail
    })
  },

  // 3.10新增
  typeValueChange(e) {
    this.setData({
      typeValue: e.detail
    })
  },

  // 3.10新增
  setTypeValueShow() {
    this.setData({
      typeShow: true
    })
  },

  // 3.10新增
  onCloseType() {
    this.setData({
      typeShow: false
    });
  },

  isPutChange({
    detail
  }) {
    wx.showModal({
      title: '提示',
      content: '是否切换商品上架开关？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            is_put: detail
          });
        }
      },
    });
  },


  addressValueChange(e) {
    this.setData({
      addressValue: e.detail
    })
  },

  onClose() {
    this.setData({
      show: false
    });
  },
  setStoreTypeDialogShow() {
    this.setData({
      show: true
    })
  },
  // 分红设置
  selectBonus(e) {
    let item = e.currentTarget.dataset['item']
    this.setData({
      show: false,
      bonusValue:item.name + item.per
    })
  },
  setBonusValueShow() {
    this.setData({
      show: true
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.titleName,
    })
  }
})