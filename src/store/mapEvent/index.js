//mapEvent.js
export default {
  namespaced: true,
  actions: {},
  mutations: {
    // 使用Vuex的commit方法提交一个mutation，将点击组件的数据传入store中，供其他组件使用
    setEventInfo(state, payload) {
      state.mapEventInfo = payload;
    },
  },
  state: {
    mapEventInfo: {},
    mapEvent: {
      home: { name: "家", things: ["床", "桌子", "工作台"] },
      cave: {
        name: "洞穴",
        things: ["石头", "便便", "木棍", "洞穴出口"],
      },
      ziYin: { name: "只因", things: ["邶贝", "只因你太美", "你干嘛"] },
      youDoWhat: { name: "蛋蛋", things: ["鸡", "太美", "你干嘛"] },
      pigeonNest: {
        name: "鸽鸽的窝",
        things: [
          "唱",
          "跳",
          "rap",
          "篮球",
          "music",
          "鸡你太美",
          "全民制作人们大家好",
        ],
      },
    },
  },
  getters: {},
};
