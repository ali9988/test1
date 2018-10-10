const util = require('../../../utils/util.js')

Page({
  data: {
    items: {},
    page: 2,
    url: 'https://cnodejs.org/api/v1/topics'
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: that.data.url, //nodejs接口地址
      data: {
        tab: 'share',
        page: 1,
        limit: 20,

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data.data);
        that.setData({ items: res.data.data })
      }
    }),
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000//loading时间
      });
    //wx.hideToast();隐藏loading
  },
  lower: function () {
    var that = this;
    wx.request({
      url: that.data.url, //nodejs接口地址
      data: {
        tab: 'share',
        page: that.data.page,
        limit: 20
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data.data);
        that.setData({ page: that.data.page + 1 })
        console.log(that.data.page)
        that.setData({ items: that.data.items.concat(res.data.data) })
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 1500//loading时间
        });
      }
    })
  }
})
