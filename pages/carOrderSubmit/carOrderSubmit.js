const app = getApp()



Page({
  data: {
    height: '',
    top: "",
    checkedAry: [1, 2],
    allCheckedAry:[]
  },

  // 触底加载 分页逻辑
  scrolltolower(e) {
    console.log("滚动到底部", e);
  },

  isCheckedChange(e) {
    console.log('e===', e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    let checkedAry = this.data.checkedAry.concat([]);
    if (checkedAry.indexOf(index) > -1) {
      for (let i = 0; i < checkedAry.length; i++) {
        if (checkedAry[i] == index) {
          checkedAry.splice(i, 1);
        }
      }
    }else {
      checkedAry.push(index)
    }
    this.setData({
      checkedAry:checkedAry
    })
  },

  // 全部选择 （此处模拟），调接口的时候记得配合分页处理
  allCheck() {
    let allCheckedAry = this.data.allCheckedAry.concat([])
    if(allCheckedAry.length) {
      allCheckedAry = []
    }else {
      for(let i=0;i<10;i++){
        allCheckedAry.push(i)
      }
    }
    this.setData({
      allCheckedAry:allCheckedAry,
      checkedAry:allCheckedAry
    })
  },

  onLoad: function () {

  },
  onReady: function () {
    var that = this;
    setTimeout(() => {
      that.setData({
        height: wx.getSystemInfoSync().windowHeight - 140
      })
    }, 1000)
  },
})