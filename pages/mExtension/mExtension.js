//stoeSys.js
const app = getApp()


Page({
  data: {
    storeName:'肯德基首创店',
    storeType:'餐饮-快餐',
    storePhone:'13654216382',
    storeAddress:'辽宁省沈阳市和平区三好街中润国际'
  },
  // 注：此方法保存图片，图片地址须是https，且配置了后台域名配置
  saveCodeImg(e) {
    let src = e.currentTarget.dataset.src;
    wx.showModal({
      title: '提示',
      content: '确定保存二维码？',
      success(res){
        if (res.confirm) {
          wx.downloadFile({
            url: src,
            success: function (res) {
              console.log('res ==== ',res);
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (data) {
                  wx.showToast({
                    title: '保存成功!',
                  })
                },
                fail: function (err) {
                  if (err.errMsg === "saveImageToPhotosAlbum:fail cancel") {
                    wx.showToast({
                      title: '保存失败!',
                      icon: 'none'
                    })
                  }
                },
              })
            },
            fail: function (res) {
              wx.showModal({
                title: '文件下载错误',
                content: res.errMsg,
              })
            },
          })
        }
      }
    })
  },
  editStoreMessage() {
    wx.navigateTo({
      url: '/pages/storeSys/storeSys'
    })
  },
  onLoad: function () {

  }
})
