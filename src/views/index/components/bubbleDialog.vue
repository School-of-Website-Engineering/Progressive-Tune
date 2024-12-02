<template>
  <div class="chat-message">
    <div class="message-item left" v-if="isLeft">
      <img class="avatar-img" :src="avatarImg" />
      <div class="bubble">
        <div class="msg-content">
          {{ content }}
        </div>
        <div class="arrow-up-left"></div>
      </div>
    </div>
    <div class="message-item right" v-else>
      <img class="avatar-img" :src="avatarImg" />
      <div class="bubble">
        <div class="msg-content">
          {{ content }}
        </div>
        <div class="arrow-up-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String },
    isLeft: { type: Boolean },
    avatarImg: { type: String },
  },
};
</script>

<style scoped lang="scss">
.chat-message {
  margin: 18px 0;
  display: flex;

  &:nth-child(1) {
    //电脑媒体查询
    @media only screen and (min-width: 500px) {
      margin-top: -76px;
      margin: 15px 0;
    }
    margin-top: 35px;
  }
}

.message-item {
  position: relative;
  padding-left: 10px;
}

.message-item.left {
  margin-left: 0;
  margin-right: 10px;
  display: flex;
  flex-direction: inherit;
  text-align: left;
}

.message-item.right {
  margin-left: 10px;
  margin-right: 0;
  flex-direction: row;
}

.avatar-img {
  //电脑媒体查询
  @media only screen and (min-width: 500px) {
    width: 40px;
    height: 40px;
    border: 2mm ridge rgb(7, 255, 85);
  }
  //PE媒体查询
  @media only screen and (max-width: 500px) {
    width: 24px;
    height: 24px;
  }
  border-radius: 20px;
  border: 4px solid #1989fa;
}

.bubble {
  padding: 10px 14px;
  border-radius: 12px;
  background: #f8fcff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;
  border: 1px solid #e2e2e2;
  max-width: 180px;
  text-align: left;
}

.msg-content {
  font-size: 8px;
  color: #333;
}

.arrow-up-left {
  width: 0px;
  height: 0px;
  border: 5px solid;
  border-color: #f8fcff transparent transparent #e2e2e2;
  position: absolute;
  left: -5px;
  top: 8px;
}

.arrow-up-right {
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: transparent #f8fcff #f8fcff transparent;
  position: absolute;
  right: -5px;
  top: 8px;
}
</style>
