Page({
  data: {
    activeTab:1
  },

  setActiveTab(e) {
    this.setData({
      activeTab:e.currentTarget.dataset.type
    })
  }
})
