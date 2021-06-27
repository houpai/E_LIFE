Page({
  data: {
    dialogShow: false,
  },

  onClickShow() {
    this.setData({ dialogShow: true });
  },

  onClickHide() {
    this.setData({ dialogShow: false });
  },

})
