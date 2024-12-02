<template>
  <div class="shortccutBarBox">
    <van-row type="flex" justify="space-around">
      <van-col span="24" class="quick">
        <van-tag color="#7232dd" class="quick_goods"> 快捷栏 </van-tag>
        <div class="shortccutBarBody">
          <van-badge
            v-for="(item, index) in 12"
            :key="index"
            color="#1989fa"
            :content="index"
            class="shortccutBarChild"
          >
            <div class="child" />
          </van-badge>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default { name: "shortcutBar" };
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.shortccutBarBody {
  height: 170px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  margin-left: 35px;
  @media only screen and (min-width: 500px) {
    margin-top: auto;
  }
  margin-top: 12px;
  overflow: auto;

  .child {
    width: 70px;
    height: 60px;
    font-size: 12px;
    text-align: center;
    border-radius: $border-radius;
  }

  .van-badge__wrapper {
    @media only screen and (max-width: 500px) {
      width: 30px;
      height: 30px;
      margin-top: 6px;
      margin-bottom: 4px;
      font-size: 12px;
      text-align: center;
      border: $border solid #7232dd;
      border-radius: $border-radius;
      margin-right: 20px;

      &:first-child {
        margin-left: 38.5px;
      }
    }

    //PC
    @media only screen and (min-width: 500px) {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      margin-bottom: 4px;
      font-size: 12px;
      text-align: center;
      border: $border solid #7232dd;
      border-radius: $border-radius;
      margin-right: 42px;

      &:first-child {
        margin-left: 116.5px;
      }
    }
  }
}

.quick {
  //PC
  @media only screen and (min-width: 500px) {
    height: $shortcutBar-height/1.5;
  }
  height: $shortcutBar-height;
  border: $border solid #7232dd;
  border-radius: $border-radius;
  width: $body-width;
  position: relative;

  .quick_goods {
    @media only screen and (min-width: 500px) {
      width: 80px;
      height: 40px;
    }
    width: 80px;
    height: 40px;
    font-size: 12px;
    text-align: center;
    border: $border solid #7232dd;
    border-radius: $border-radius;
    position: absolute;
    z-index: 1;
    top: -3px;
    left: 6px;
  }
}
</style>
