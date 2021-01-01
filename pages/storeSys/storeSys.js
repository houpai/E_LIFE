//stoeSys.js
const app = getApp()


Page({
  data: {
    storeName:'',
    telValue:'',
    fileList:[],
    fileListBg:[],
    isEdit:false
  },
  storeNameChange(e) {
    this.setData({
      storeName:e.detail
    })
  },
  telValueChange(e) {
    this.setData({
      telValue:e.detail
    })
  },
  // 上传logo图片获取临时地址
  logoUpload(event) {
    const { file } = event.detail;
    const { fileList = [] } = this.data;
    fileList.push({ ...file, url: file.url});
    this.setData({ fileList });
  },
  // 上传背景图片获取临时地址
  bgUpload(event) {
    const { file } = event.detail;
    const { fileListBg = [] } = this.data;
    fileListBg .push({ ...file, url: file.url});
    this.setData({ fileListBg });
  },
  deleteLogo() {
    this.setData({
      fileList:[]
    })
  },
  deleteBg() {
    this.setData({
      fileListBg:[]
    })
  },
  isEditToggle() {
    let isEdit = !this.data.isEdit;
    this.setData({
      isEdit:isEdit
    })
  },
  onLoad: function () {

  }
})
