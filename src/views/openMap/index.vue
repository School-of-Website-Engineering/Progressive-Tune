<template>
  <div>
    <!-- TODO 地图区 -->
    <van-button
      class="mapBtn"
      type="info"
      text="查看大地图"
      @click="mapShow = true"
    />
    <van-overlay class="vanOverlay" :show="mapShow" @click="mapShow = false">
      <div class="wrapper">
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "openMap",
  data() {
    return {
      // 地图显示
      mapShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.vanOverlay {
  z-index: 3;
}

.mapBtn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 230px;
  height: 50px;
  @media only screen and (min-width: 500px) {
    left: 80%;
    width: 200px;
    height: 50px;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
