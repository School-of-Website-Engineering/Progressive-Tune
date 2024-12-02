<template>
  <div>
    <!-- 全局状态栏 -->
    <globalStatusBar></globalStatusBar>
    <!-- 快捷栏 -->
    <shortcutBar></shortcutBar>
    <!--		文本输出-->
    <textOutput></textOutput>
    <!-- 事件 -->
    <event></event>
    <!-- 底部菜单 -->
    <bottomMenu></bottomMenu>
  </div>
</template>

<script>
import bottomMenu from "@/views/index/bottomMenu";
import event from "@/views/index/event/index.vue";
import globalStatusBar from "@/views/index/globalStatusBar";
import shortcutBar from "@/views/index/shortcutBar";
import textOutput from "@/views/index/textOutput";

export default {
  name: "index",
  components: {
    bottomMenu,
    event,
    globalStatusBar,
    shortcutBar,
    textOutput,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_color.scss";

body {
  background: $white;
}
</style>
