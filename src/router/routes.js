export default [
  //重定向
  {
    path: "/",
    redirect: "/mainView",
  },
  {
    path: "/codeling",
    component: () =>
      import(/* webpackChunkName: "eggs" */ "@/components/Header/Header.vue"),
    name: "codeling",
  },
  {
    path: "/index",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/index/index.vue"),
    name: "index",
  },
  //游戏主界面
  {
    path: "/mainView",
    component: () =>
      import(/* webpackChunkName: "game" */ "@/components/isLoading"),
    name: "mainView",
  },
];
