<template>
  <div class="badgeContainerBox">
    <van-badge
      class="badgeContainer"
      v-for="(item, index) in Array(39)"
      :key="index"
      :content="!bagEdit ? `${index}` : 'x'"
    >
      <div class="bagBoxContent">
        <div class="child" />
      </div>
    </van-badge>
  </div>
</template>

<script>
export default {
  name: "shortcutBar",
  props: {
    bagEdit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.badgeContainerBox {
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;

  .badgeContainer {
    margin: 25px 35px 0 10px;

    .bagBoxContent {
      justify-content: space-around;
      align-items: center;

      .child {
        width: 80px;
        height: 80px;
        background: #f2f3f5;
        border-radius: 4px;
      }
    }
  }
}
</style>
