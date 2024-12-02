//游戏时间系统
// 用于控制游戏世界时间的变化，以及游戏世界时间的加速
import store from "@/store";
import { addClassName } from "@/utils/flash";

//随机返回字符串
function getRandomWeather() {
  let weather = [
    "新的一天开始，进行骰子鉴定",
    "新的一天到来，开始骰子鉴定",
    "每天开始都会进行骰子鉴定，骰子开始鉴定",
    "骰子鉴定开始",
    "骰子开始鉴定",
    "开始进行骰子鉴定",
  ];
  let num = Math.floor(Math.random() * 6);
  return weather[num];
}
export default {
  namespaced: true,
  actions: {
    // 改变游戏世界时间，每秒改变一次，初始化时调用
    changeTime({ commit, state }) {
      let minutes = state.minutes,
        hours = state.hours,
        Day = state.toDay;
      setInterval(() => {
        if (state.speed !== 0) {
          minutes++;
          if (minutes > 59) {
            minutes = 0;
            hours++;
          }
          if (hours > 24) {
            Day++;
            hours = 0;
            //调用weatherSys vuex模块的mutations中的UPDATE_WEATHER_STATUS
            store.commit("weatherSys/UPDATE_WEATHER_STATUS");
            addClassName(".time-list", ["alertMsg", ""]);
            //调用timer vuex模块的mutations中的runGroup
            store.commit("timer/runGroup");
          }
          commit("updateTime", { hours, minutes, Day });
        }
      }, state.speed * 1000);
    },
    // 改变加速倍数
    changeSpeed({ commit }, speed) {
      commit("updateSpeed", { speed });
    },
    // 暂停游戏时间
    pauseTime({ commit }) {
      commit("pauseTime");
    },
    // 恢复游戏时间
    resumeTime({ commit }) {
      commit("updateSpeed", { speed: 1 });
    },
    //添加聊天框
    addChatBox({ commit }, chatBox) {
      commit("ADD_CHATBOX", chatBox);
    },
    // 删除聊天框
    deleteChatBox({ commit }, index) {
      commit("DELETE_CHATBOX", index);
    },
    // 更新聊天框
    updateChatBox({ commit }, payload) {
      commit("UPDATE_CHATBOX", payload);
    },
  },
  mutations: {
    //设置时间
    // 更新游戏世界时间
    updateTime(state, { hours, minutes, Day }) {
      state.hours = hours;
      state.minutes = minutes;
      state.toDay = Day;
    },
    // 更新游戏世界天数
    updateToDay(state, toDay) {
      state.toDay = toDay;
    },
    // 更新加速参数
    updateSpeed(state, { speed }) {
      state.speed = speed;
    },
    // 暂停游戏世界时间
    pauseTime(state) {
      state.speed = 0;
    },
    // 恢复游戏世界时间
    resumeTime(state) {
      state.speed = 1;
    },

    runGroup(state) {
      // 生存评估期--第1天到第7天[准备期]
      // 生存鉴定期--第8天到第10天(更多事件和区域解锁)
      // 生存高危期--第11天到第13天(更多高危事件和隐藏区域解锁)
      // 生存探索期--第14天以上(自由探索开启，无尽的探索才刚刚开始)
      let num;
      let num2;
      if (state.toDay < 7) {
        num = Math.floor(Math.random() * 8 + 1);
        if (num >= 6) {
          num2 = Math.floor(Math.random() * 100 + 1);
          if (num2 <= 20) {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" + num + ") 在xxxx资源地图区资源产出翻倍！");
          } else if (num2 <= 45) {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" + num + ") 所有怪物的刷新速度降低20%");
          } else if (num2 <= 80) {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" + num + ") 玩家制造物品的速度提升20%");
          } else {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" + num + ") 我们遇到敌袭，2回合后强制作战");
          }
        } else if (num >= 3) {
          //往聊天框里添加消息
          state.chatData.unshift({
            id: state.chatData.length + 1,
            text: getRandomWeather(),
          }),
            (state.message = "鉴定骰子为：(" + num + ") 暂无特殊事件");
        } else {
          num2 = Math.floor(Math.random() * 100 + 1);
          if (num2 <= 40) {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" +
                num +
                ") 今天天气格外炎热，你的口渴程度提升20%");
          } else if (num2 <= 80) {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" + num + ") 我们遇到敌袭，1回合后强制作战");
          } else {
            //往聊天框里添加消息
            state.chatData.unshift({
              id: state.chatData.length + 1,
              text: getRandomWeather(),
            }),
              (state.message =
                "鉴定骰子为：(" +
                num +
                ") 我们遇到原住民，但对方似乎敌意满满（立刻开始特殊战斗）");
          }
        }
      }
      //第八天开始到第十天
      else if (state.toDay < 10) {
        //只往数组添加一次消息
        if (state.toDay === 8) {
          //往聊天框里添加消息
          state.chatData.unshift({
            id: state.chatData.length + 1,
            text: "第八天来临",
          });
        }

        state.message = "更多事件和区域解锁";
      }
      //第十天开始到第十三天
      else if (state.toDay < 13) {
        //只往数组添加一次消息
        if (state.toDay === 10) {
          //往聊天框里添加消息
          state.chatData.unshift({
            id: state.chatData.length + 1,
            text: "第十一天开始",
          });
        }
        state.message = "更多高危事件和隐藏区域解锁";
      }
      //第十三天开始到第十四天
      else {
        //只往数组添加一次消息
        if (state.toDay === 13) {
          //往聊天框里添加消息
          state.chatData.unshift({
            id: state.chatData.length + 1,
            text: "第十四天到来",
          });
        }
        state.message = "自由探索开启，无尽的探索才刚刚开始";
      }
    },
    ADD_CHATBOX(state, chatBox) {
      // 添加聊天框
      state.chatData.unshift(chatBox);
    },
    DELETE_CHATBOX(state, index) {
      // 删除聊天框
      state.chatData.splice(index, 1);
    },
    UPDATE_CHATBOX(state, payload) {
      // 修改聊天框
      state.chatData.splice(payload.index, 1, payload.chatBox);
    },
  },

  state: {
    hours: 0,
    minutes: 0,
    speed: 0.0001, //初始加速为1
    toDay: 1,
    message: "准备期 第1天到第7天",
    messageInfo: "nisadfads",
    chatData: [
      {
        id: 1,
        text: "动态消息test",
      },
    ],
  },
  getters: {
    // 获取游戏世界时间
    worldTime: (state) => {
      let hours = 0,
        minutes = 0;
      hours = state.hours;
      minutes = state.minutes;
      return `${hours}:${minutes}`;
    },
    // 获取当前加速倍数
    speed: (state) => state.speed,
    // 获取游戏世界天数
    toDay: (state) => state.toDay,
  },
};
