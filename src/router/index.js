import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

//重写push、replace防止控制台报错
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写VueRouter.prototype身上的push方法
VueRouter.prototype.push = function (location, resolve, reject) {
  if (reject && resolve) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

//重写VueRouter.prototype身上的replace方法
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (reject && resolve) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { y: 0 };
  },
  base: process.env.BASE_URL,
  mode: "hash",
});

//路由守卫
router.beforeEach((to, from, next) => {
  // to: 即将要进入的目标路由对象
  // from: 当前导航正要离开的路由对象
  // next: Function, 一定要调用该方法来resolve这个钩子
  const isShowLoading = sessionStorage.getItem("isShowLoading");
  if (to.path === "/index" && !isShowLoading) {
    next({ path: "/mainView" });
  } else {
    next();
  }
});

export default router;
