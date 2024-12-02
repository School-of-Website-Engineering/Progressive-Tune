// 定义天气状态
import { addClassName } from "@/utils/flash";

const WEATHER_STATUS = {
  SUNNY: "晴天", // 晴天
  RAINY: "雨天", // 雨天
  CLOUDY: "阴天", // 阴天
  THUNDERSTORM: "暴雨", // 暴雨
  LIGHTENING: "雷暴", // 雷暴
};

// 生成天气状态
export function generateWeatherStatus() {
  // 生成随机数
  const randomNum = Math.random(); // 根据随机数返回天气状态
  switch (true) {
    case randomNum <= 0.4:
      return WEATHER_STATUS.SUNNY;
    case randomNum <= 0.75:
      return WEATHER_STATUS.RAINY;
    case randomNum <= 0.93:
      return WEATHER_STATUS.CLOUDY;
    case randomNum <= 0.98:
      return WEATHER_STATUS.THUNDERSTORM;
    default:
      return WEATHER_STATUS.LIGHTENING;
  }
}

export default {
  namespaced: true,
  actions: {},
  mutations: {
    // 更新天气状态
    UPDATE_WEATHER_STATUS(state) {
      state.weatherStatus = generateWeatherStatus();
    },
  },
  state: {
    // 默认游戏开始天气状态为晴天
    weatherStatus: WEATHER_STATUS.SUNNY,
  },
  getters: {
    // 获取当前天气状态
    getWeatherStatus(state) {
      switch (state.weatherStatus) {
        case WEATHER_STATUS.SUNNY: // 根据天气状态添加对应的样式
          addClassName(".weather", ["friendlyMsg", ""]);
          break;
        case WEATHER_STATUS.RAINY:
          addClassName(".weather", ["alertMsg", ""]);
          break;
        case WEATHER_STATUS.CLOUDY:
          addClassName(".weather", ["warnMsg", "cloudy"]);
          break;
        case WEATHER_STATUS.THUNDERSTORM:
          addClassName(".weather", ["warnMsg", ""]);
          break;
        case WEATHER_STATUS.LIGHTENING:
          addClassName(".weather", ["dangerMsg", ""]);
          break;
        default:
          break;
      }
      return state.weatherStatus;
    },
  },
};
