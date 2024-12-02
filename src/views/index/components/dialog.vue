<template>
  <!--对话框-->
  <van-col span="12" class="textOutput">
    <div class="chat-box">
      <ul>
        <li v-for="item in chatList" :key="item.id">
          <bubble-dialog
            class="bubbleDialog"
            :content="item.text"
            :is-left="true"
            :avatar-img="require('@/assets/logo.png')"
          />
        </li>
      </ul>
    </div>
  </van-col>
</template>

<script>
import bubbleDialog from "@/views/index/components/bubbleDialog.vue";
import { mapState } from "vuex";

export default {
  components: { bubbleDialog },
  computed: {
    // 获取timer模块的chatData
    ...mapState("timer", ["chatData"]),

    // 将chatData转换为list
    chatList() {
      // 如果chatData不存在，返回空数组
      const data = this.chatData || [];
      // 定义一个空数组
      const list = [];
      // 遍历chatData
      data.forEach((item) => {
        list.push({
          id: item.id,
          text: item.text,
        });
      });
      // 返回list
      return list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";
.textOutput {
  height: $Menu-height;
  border: $border solid #7232dd;
  border-radius: $border-radius;
  position: relative;
  width: 43%;
  margin-top: 15px;
  overflow: auto;
}

.bubbleDialogue {
  width: 100px;
  top: 8px;
}
</style>
