import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/global.scss";
import "amfe-flexible";
import {
  Button,
  Col,
  Loading,
  NoticeBar,
  Row,
  Tag,
  Badge,
  icon,
  cell,
  Overlay,
  Popup,
  Toast,
  List,
} from "vant";

Vue.use(List);
Vue.use(Popup);
Vue.use(Overlay);
Vue.use(cell);
Vue.use(icon);
Vue.use(NoticeBar);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Col);
Vue.use(Row);
Vue.use(Badge);
Vue.use(Toast);

// 全局事件总线
Vue.prototype.$EventBus = new Vue();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
