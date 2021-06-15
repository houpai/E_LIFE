Page({
  data: {
    dialogShow: true,
  },

  onClickShow() {
    this.setData({ dialogShow: true });
  },

  onClickHide() {
    this.setData({ dialogShow: false });
  },

})
