// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    initData: [{ workOrderNumber: 'GD-180221-0013', materialNumber: '1.000.3204.23', materialName: '交流PCB固定板', pcb: 'T面', status: '完成' }, { workOrderNumber: 'GD-180221-0014', materialNumber: '1.000.3204.23', materialName: '交流PCB固定板', pcb: 'T面', status: '完成' }, { workOrderNumber: 'GD-180221-0015', materialNumber: '1.000.3204.23', materialName: '交流PCB固定板', pcb: 'T面', status: '完成' }, { workOrderNumber: 'GD-180221-0016', materialNumber: '1.000.3204.23', materialName: '交流PCB固定板', pcb: 'T面', status: '完成' }, { workOrderNumber: 'GD-180221-0017', materialNumber: '1.000.3204.23', materialName: '交流PCB固定板', pcb: 'T面', status: '完成' }],
    detailItems:[]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    let title=options.title;
    wx.setNavigationBarTitle({
      title: title
    })
    let datas=this.data.initData;
    this.setData({
      detailItems: datas
    })
  },
  search(e) {
    let filterData = this.data.initData.filter(item=>item.workOrderNumber===e.detail.value);
    this.setData({
      detailItems: filterData
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