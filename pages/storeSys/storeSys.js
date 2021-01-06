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
    show: true,
    actions: [
      {
        name: '美容美化',
        id:1,
        children:[
          {
            name: '美容',
            id:1,
          },
          {
            name: '美化',
            id:1,
          },
          {
            name: '面部护理',
            id:1,
          }
        ]
      },
      {
        name: '餐饮',
        id:2,
        children:[
          {
            name: '自助餐',
            id:1,
          },
          {
            name: '火锅',
            id:1,
          },
          {
            name: '烧烤',
            id:1,
          }
        ]
      }
    ],
    firstType:'',
    secondType:"",
    firstShow:true,
    subActions:[]
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
  setStoreTypeDialogShow() {
    this.setData({
      show:true
    })
  },
  selectType(e) {
    let chooseItem = e.currentTarget.dataset.item;
    this.setData({
      firstType:chooseItem.name,
      subActions:chooseItem.children,
      firstShow:false
    })
  },
  selectSecondType(e) {
    let chooseItem = e.currentTarget.dataset.item;
    this.setData({
      secondType:chooseItem.name,
      firstShow:true,
      show:false,
      storeType:this.data.firstType + '-' + chooseItem.name
    })
  },

  selectFirstTypeShow() {
    this.setData({
      firstShow:true
    })
  },
  onLoad: function () {

  }
})
