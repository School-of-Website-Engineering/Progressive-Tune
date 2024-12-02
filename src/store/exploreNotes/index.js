//探索笔记模块，用于存储游戏中的探索笔记
export default {
  namespaced: true,
  actions: {},
  mutations: {},
  state: {
    noteList: [
      {
        noteId: 1,
        noteTitle: "探索笔记1",
        noteInfo: "探索笔记1的简介",
        noteContent: "探索笔记1的内容",
      },
      {
        noteId: 2,
        noteTitle: "探索笔记2",
        noteInfo: "探索笔记2的简介",
        noteContent: "探索笔记2的内容",
      },
      {
        noteId: 3,
        noteTitle: "探索笔记3",
        noteInfo: "探索笔记3的简介",
        noteContent: "探索笔记3的内容",
      },
      {
        noteId: 4,
        noteTitle: "探索笔记4",
        noteInfo: "探索笔记4的简介",
        noteContent: "探索笔记4的内容",
      },
      {
        noteId: 5,
        noteTitle: "探索笔记5",
        noteInfo: "探索笔记5的简介",
        noteContent: "探索笔记5的内容",
      },
      {
        noteId: 6,
        noteTitle: "探索笔记6",
        noteInfo: "探索笔记6的简介",
        noteContent: "探索笔记6的内容",
      },
      {
        noteId: 7,
        noteTitle: "探索笔记7",
        noteInfo: "探索笔记7的简介",
        noteContent: "探索笔记7的内容",
      },
    ],
  },
  getters: {
    //获取探索笔记,返回一个对象
    getExploreNotes(state) {
      return state.state;
    },
  },
};
