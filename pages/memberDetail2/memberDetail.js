const app = getApp()
import {
  hasValueFromArray
} from '../../utils/util'

Page({
  data: {
    height: '',
    top: "",
    cardList:[
      {
        id:'15454',
        type:"类型1",
        isOpenMore:false,
        cardItemList:[{id:'2464624r68'},{id:'wdqd4425q6546'}]
      },
      {
        id:'154545443',
        type:"类型2",
        isOpenMore:false,
        cardItemList:[{id:'2464668'},{id:'wdqd5q6546'}]
      },
    ], // mock数据 展开收缩isOpenMore
  },
  openToggle(e) {
    let id = e.currentTarget.dataset['id']
    console.log('id ===', id);
    let copyCardList = JSON.parse(JSON.stringify(this.data.cardList));
    let matchingValue = hasValueFromArray(copyCardList,'id',id)
    console.log('matchingValue ====', matchingValue)
    if(matchingValue.value) {
      copyCardList[matchingValue.index].isOpenMore = !copyCardList[matchingValue.index].isOpenMore
    }
    this.setData({
      cardList:copyCardList
    })

  },
  onLoad: function () {

  },
  onReady: function () {
    var that = this;
    wx.createSelectorQuery().select('#topContainer_box').boundingClientRect(function (rect) {
      that.setData({
        top: rect.top,
      })
    }).exec();
    setTimeout(() => {
      that.setData({
        height: wx.getSystemInfoSync().windowHeight - that.data.top - 100
      })
    }, 1000)
  },
})
