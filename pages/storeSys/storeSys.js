//stoeSys.js
const app = getApp()

// 标注点数据 https://developers.weixin.qq.com/miniprogram/dev/component/map.html
const INIT_MARKER = {
	callout: {
		content: '腾讯总部大楼',
		padding: 10,
		borderRadius: 2,
		display: 'ALWAYS'
	},
	latitude: 40.040415,
	longitude: 116.273511,
	iconPath: '../../assets/img/Marker1_Activated@3x.png',
	width: '34px',
	height: '34px',
	rotate: 0,
	alpha: 1
};


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
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
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
          },
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          }
        ]
      },
      {
        name: '美容美化',
        id: 1,
        children: [
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          }
        ]
      },
      {
        name: '餐饮',
        id: 2,
        children: [
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          },
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          }
        ]
      },
      {
        name: '美容美化',
        id: 1,
        children: [
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          }
        ]
      },
      {
        name: '餐饮',
        id: 2,
        children: [
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          },
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          }
        ]
      },
      {
        name: '美容美化',
        id: 1,
        children: [
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          },
          {
            name: '美容',
            id: 1,
          },
          {
            name: '美化',
            id: 1,
          },
          {
            name: '面部护理',
            id: 1,
          }
        ]
      },
      {
        name: '餐饮',
        id: 2,
        children: [
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          },
          {
            name: '自助餐',
            id: 1,
          },
          {
            name: '火锅',
            id: 1,
          },
          {
            name: '烧烤',
            id: 1,
          }
        ]
      },
    ],
    firstType:'',
    secondType:"",
    firstShow:true,
    subActions:[],
    // 地图相关
    editAddressShow:false,
    mapCallbackTxt: '请点击地图标记位置',
    markers: [{
			...INIT_MARKER 
    }], // 店铺标记点
    scale: 15,
		location: {
			latitude: 40.040415,
			longitude: 116.273511
		}, // 店铺中心经纬度 和店铺一致的经纬度即可
  },
  setStoreAddress() {
    this.setData({
      editAddressShow:true
    })
  },
  cancelSetAddress() {
    this.setData({
      editAddressShow:false
    })
  },
  // 点击地图事件
	onTapMap (event) {
		const latitude = event.detail.latitude;
		const longitude = event.detail.longitude;
		this.setData({
      mapCallbackTxt: latitude.toFixed(6) + ',' + longitude.toFixed(6),
      location: {
        latitude: latitude,
        longitude: longitude
      },
			markers: [{
				id: 0, 
				iconPath: '../../assets/img/Marker1_Activated@3x.png',
				latitude: latitude,
        longitude: longitude,
				width: 30,
				height: 30
			}]
		});
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
