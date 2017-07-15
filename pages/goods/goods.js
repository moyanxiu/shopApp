// pages/goods/goods.js
var goodsData = require('../../utils/goodsData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    goodsInfo: {},
    showSpecMenu:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      goodsInfo: goodsData.goodsInfo(options.id)
    })
  },
  /** 
   * 点击tab切换 
   */
  tab: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 加入购物车
   */
  addCart:function(){
    this.showSpecMenu()
  },
  showSpecMenu: function () {
    this.setData({
      showSpecMenu: true,
    })
  },
  hideSpecMenu:function(){
    this.setData({
      showSpecMenu: false,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})