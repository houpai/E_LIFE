//stoeSys.js
const app = getApp()


Page({
  data: {
    storeName:'',
    telValue:'',
    addressValue:'',
    fileList:[],
    fileListBg:[],
    isEdit:false,
    storeType:'',
    show: false,
    actions: [
      {
        name: '选项1',
      },
      {
        name: '选项2',
      },
    ],
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
  addressValueChange(e) {
    this.setData({
      addressValue:e.detail
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
  openStoreTypeSelectDialog() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log('storeType === ', event.detail);
  },
  onLoad: function () {

  }
})
