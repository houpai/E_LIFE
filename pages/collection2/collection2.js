const app = getApp()



Page({
  data: {
 
  },

  previewImage(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    // 注：此方法无法预览包内图片 需要改成网络图片
    wx.previewImage({
      current: currentUrl, 
      urls: [currentUrl]
    })
  },

  onLoad: function () {

  },
  onReady: function () {

  },
})