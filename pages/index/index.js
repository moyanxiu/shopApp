//index.js
var goodsData = require('../../utils/goodsData.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    carousel:{},
    navs:{},
    newGoods:{},
    hotGoods:{}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(goodsData.newGoods());
    that.setData({
      carousel: goodsData.carousel,
      newGoods: goodsData.newGoods(),
      hotGoods: goodsData.hotGoods(),
      navs: goodsData.navs
    })
    wx.request({
      url: getApp().globalData.serverURL +'getShop',
      success: function (res) {
        that.setData({
          navs:res.data.nav,
        })  
      },
      fail: function (res) {
        console.log(res);
      }
    })  
  }
})
