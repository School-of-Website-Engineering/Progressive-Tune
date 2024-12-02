import { getItem, setItem } from "@/utils/sessionStorage";

export default {
  namespaced: true,
  actions: {},
  mutations: {
    //设置显示loading
    setIsShowLoading(state, isShowLoading) {
      state.isShowLoading = isShowLoading;
      setItem("isShowLoading", isShowLoading);
    },
  },
  state: { isShowLoading: getItem("isShowLoading") },
};
