//时间当前情景状态

export default {
  namespaced: true,
  // 提交 mutations 触发修改
  actions: {
    setCurrentTime({ commit }, payload) {
      commit("SET_CURRENT_TIME", payload);
    },
  },
  // 修改当前时间所对应的世界状态 , 怪物密度 和 生物密度
  mutations: {
    SET_CURRENT_TIME(state, payload) {
      state.currentTime = payload;
      // 根据当前时间计算世界状态 , 怪物密度 和 生物密度,
      // 时间	世界状态	怪物密度值	生物密度值
      // 00:00-04:59	凌晨深夜	4	1
      // 05:00-07:59	黎明到来	3	2
      // 08:00-11:59	早日清晨	2	3
      // 12:00-16:59	晌午时分	1	5
      // 17:00-19:59	傍晚降至	3	2
      // 20:00-23:59	夜幕降临	5	1

      //转化时间为小时与分钟(0:00-23:59)分割":"
      let time = state.currentTime.split(":");
      //转化为小时与分钟(0-23)(0-59)
      let hour = parseInt(time[0]);
      //parseInt() 函数可解析一个字符串，并返回一个整数。
      let minute = parseInt(time[1]);
      //计算当前时间的分钟数
      let minuteCount = hour * 60 + minute;
      //根据当前时间的分钟数计算世界状态 , 怪物密度 和 生物密度
      if (minuteCount >= 0 && minuteCount < 300) {
        state.worldStatus = "凌晨深夜";
        state.monsterDensity = 4;
        state.creatureDensity = 1;
      } else if (minuteCount >= 300 && minuteCount < 480) {
        state.worldStatus = "黎明到来";
        state.monsterDensity = 3;
        state.creatureDensity = 2;
      } else if (minuteCount >= 480 && minuteCount < 720) {
        state.worldStatus = "早日清晨";
        state.monsterDensity = 2;
        state.creatureDensity = 3;
      } else if (minuteCount >= 720 && minuteCount < 1020) {
        state.worldStatus = "晌午时分";
        state.monsterDensity = 1;
        state.creatureDensity = 5;
      } else if (minuteCount >= 1020 && minuteCount < 1200) {
        state.worldStatus = "傍晚降至";
        state.monsterDensity = 3;
        state.creatureDensity = 2;
      } else if (minuteCount >= 1200 && minuteCount < 1440) {
        state.worldStatus = "夜幕降临";
        state.monsterDensity = 5;
        state.creatureDensity = 1;
      }
    },
  },
  // 存储当前游戏时间, 世界状态 , 怪物密度 和 生物密度 的状态
  state: {
    // 当前游戏时间
    //载入timer游戏时间
    currentTime: 0,
    // 当前世界状态
    worldStatus: "",
    // 当前怪物密度
    monsterDensity: 0,
    // 当前生物密度
    creatureDensity: 0,
  },
};
