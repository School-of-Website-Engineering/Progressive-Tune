// 跑团事件

//返回一个随机数(1~8)
function getRandomNum(Min, Max) {
  let Range = Max - Min;
  let Rand = Math.random();
  return Min + Math.round(Rand * Range);
}

export default {
  namespaced: true,
  // 定义state
  state: {
    time: null,
    day: null,
  },

  // 定义Mutations
  mutations: {
    setTime(state, { time, day }) {
      state.time = time;
      state.day = day;
    },
  },

  // 定义Actions
  actions: {
    // 设置时间
    setTime({ commit }, { time, day }) {
      commit("setTime", time, day);
    },
    // 探险
    Exploring({ commit }) {
      let num = getRandomNum(1, 8);
      if (num >= 6 && num <= 8) {
        let randomNum = getRandomNum(1, 10);
        if (randomNum >= 1 && randomNum <= 2) {
          console.log("在任何一个资源地图区资源产出翻倍");
        } else if (randomNum >= 3 && randomNum <= 6) {
          console.log("怪物的刷新速度降低20%");
        } else if (randomNum >= 7 && randomNum <= 8) {
          console.log("玩家制造物品的速度提升20");
        } else if (randomNum === 9) {
          console.log("遭到敌袭");
        }
      } else if (num >= 3 && num <= 5) {
        // 无逻辑处理
      } else if (num >= 1 && num <= 2) {
        let randomNum = getRandomNum(1, 10);
        if (randomNum >= 1 && randomNum <= 4) {
          console.log("炎热之时");
        } else if (randomNum >= 5 && randomNum <= 8) {
          console.log("遭到敌袭");
        } else {
          console.log("遇到原住民");
        }
      }
    },
  },
};
