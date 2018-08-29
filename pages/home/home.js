// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuItems: [{ name: '上线前准备' }, { name: '上钢板' }, { name: '刷锡膏' }, { name: '贴片' }, { name: '回流焊' }, { name: 'AOI检验' }, ]
  },
  goTodetail(e){
    
    wx.navigateTo({
      url: '../detail/detail?title='+e.currentTarget.dataset.item.name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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