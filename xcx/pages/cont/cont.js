//logs.js
const util = require('../../utils/util.js')
//文本解析
var WxParse = require('../../wxParse/wxParse.js')

Page({
  data: {
    items: []
  },
  onLoad: function (options) {
    console.log(options);
    // 根据 ID 请求数据
    var that = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topic/' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data);
        that.setData({items:res.data.data});
        var article = res.data.data.content;
        WxParse.wxParse('article', 'md', article, that, 5);
      }
    })
  },

})
