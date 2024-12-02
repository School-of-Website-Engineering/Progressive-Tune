//玩家属性值
export default {
  namespaced: true,
  actions: {
    // 玩家的生命(Health)恢复速度上升5%
    HealthUp({ commit, state }) {
      commit("updateHealth", state.Health + 5);
    },
  },
  mutations: {
    //设置玩家属性值
    updateHealth(state, payload) {
      state.Health = payload;
    },
    updateDefense(state, payload) {
      state.Defens = payload;
    },
    updateBackpack(state, payload) {
      state.Backpack = payload;
    },
    updateWater(state, payload) {
      state.Water = payload;
    },
    updateHungry(state, payload) {
      state.Hungry = payload;
    },
    updateDex(state, payload) {
      state.Dex = payload;
    },
    updateChar(state, payload) {
      state.Chars = payload;
    },
    //设置玩家buff
    // 玩家的生命(Health)恢复速度上升5%
    HealthUp({ commit, state }) {
      commit("updateHealth", state.Health + 5);
    },
  },
  state: {
    // 生命值
    Health: 50,
    // 防御值
    Defens: 20,
    // 背包容量
    Backpack: 5,
    // 水量
    Water: 0,
    // 饥饿值
    Hungry: 0,
    // 当前灵巧值
    Dex: 20,
    // 魅力值
    Chars: 20,
  },
};
