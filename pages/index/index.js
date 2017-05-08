//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[
      '/images/ad1.jpg',
      '/images/ad2.jpg',
      '/images/ad3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navs:[
      {
        icon:'/images/item1.png',
        title:'坚果'
      },{
        icon:'/images/item2.png',
        title:'糖果'
      },{
        icon:'/images/item3.png',
        title:'饮品 '
      },{
        icon:'/images/item4.png',
        title:'饼干'
      }
    ],
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
