<template>
  <div class="root">
    <Header v-show="this.$route.path === '/codeling'"></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="this.$route.path === '/codeling'"></Footer>
  </div>
</template>

<script>
// 引入页面
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import isLoading from "@/components/isLoading/index.vue";

export default {
  name: "App",
  //注册组件
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
