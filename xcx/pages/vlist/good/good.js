const util = require('../../../utils/util.js')

Page({
  data: {
    items: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.vue-js.com/api/v1/topics?tab=good', //nodejs接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data);
        that.setData({ items: res.data.data })
      }
    })
  }
})
