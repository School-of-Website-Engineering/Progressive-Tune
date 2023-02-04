import Vue from "vue";
import Vuex from "vuex";
import isShowLoading from "@/store/isShowLoading";
import timer from "@/store/timer";
import basicValue from "@/store/basicValue";
import foods from "@/store/foods";
import player from "@/store/player";
import timeState from "@/store/timeState";

Vue.use(Vuex);

export default new Vuex.Store({modules: {isShowLoading, timer, player, foods, basicValue, timeState}});
