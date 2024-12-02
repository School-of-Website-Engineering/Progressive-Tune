//背包模块，用于存储游戏中的物品
export default {
  namespaced: true,
  actions: {},
  mutations: {
    //向物品缓存中添加物品
    addItemToCache(state, payload) {
      state.backpackCache.push(payload);
    },
    //从物品缓存中删除物品
    deleteItemFromCache(state, payload) {
      state.backpackCache.splice(payload, 1);
    },
    //清空物品缓存
    clearCache(state) {
      state.backpackCache = [];
    },
  },
  state: {
    // 玩家拥有的物品缓存
    backpackCache: [],
    //背包物品列表
    backpackList: [
      {
        itemId: 1,
        itemName: "石头",
        itemInfo: "一块普通的石头",
      },
      {
        itemId: 2,
        itemName: "便便",
        itemInfo: "一块普通的便便",
      },
      {
        itemId: 3,
        itemName: "木棍",
        itemInfo: "一根普通的木棍",
      },
      {
        itemId: 4,
        itemName: "洞穴出口",
        itemInfo: "一扇普通的洞穴出口",
      },
      {
        itemId: 5,
        itemName: "床",
        itemInfo: "一张普通的床",
      },
    ],
  },
};
