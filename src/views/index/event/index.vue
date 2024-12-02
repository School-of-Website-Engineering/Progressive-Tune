<template>
  <div class="eventMenuBox">
    <van-row type="flex" class="eventMenu">
      <van-col span="8" class="text">
        <van-tag class="events-head" color="#7232dd">地图</van-tag>
        <div class="mapShow">
          <open-map />
        </div>
        <div class="mapBoxContainer">
          <van-button
            v-for="(item, index) in mapEvent"
            :key="index"
            class="tag"
            plain
            type="danger"
            @click="getEventInfo(item)"
            >{{ item.name }}
          </van-button>
        </div>
      </van-col>
      <van-col span="16" class="event">
        <div class="mainflex">
          <!--  事件区 -->
          <van-tag class="menu-list" type="primary" plain size="large"
            >制作
          </van-tag>
          <van-tag class="menu-list" plain type="primary" size="large"
            >天赋
          </van-tag>
          <van-tag plain class="menu-list" type="primary" size="large"
            >休息
          </van-tag>
        </div>
        <div class="eventContainer">
          <eventMap />
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import openMap from "@/views/openMap/index.vue";
import eventMap from "@/views/index/components/eventMap.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "event",
  data: function () {
    return { isRender: true };
  },
  components: { openMap, eventMap },
  //获取mapEvent模块的mapEvent、mapEventInfo
  computed: {
    ...mapState({
      mapEvent: (state) => state.mapEvent.mapEvent,
      mapEventInfo: (state) => state.mapEvent.mapEventInfo,
    }),
  },
  methods: {
    // 点击后使用commit方法提交一个mutation(setEventInfo)
    ...mapMutations({ setEventInfo: "mapEvent/setEventInfo" }),
    getEventInfo(item) {
      this.setEventInfo(item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.mainflex {
  position: relative;
  left: 390px;
  width: 40px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  z-index: 2;
}

.menu-list {
  width: 18px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: $border solid;
  border-radius: 5px;
  margin-top: 10px;
  padding: 8px;

  &:active {
    background-color: #7232dd;
    color: #fff;
  }
}

.eventMenu {
  border: $border solid #7232dd;
  width: $body-width;
  height: $eventMenu-height;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  .text {
    height: $event-height;
    border: $border solid #7232dd;
    border-radius: $border-radius;
    position: relative;
    width: 38%;
    margin-top: 12px;

    .mapBoxContainer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      overflow: hidden;

      .tag {
        width: 110px;
        height: 80px;
        margin: 12px 18px 12px 8px;
        font-size: 9px;
        text-align: center;
        padding: 0;

        &:nth-child(1) {
          margin-left: 120px;
        }
      }
    }
  }

  .event {
    height: $event-height;
    border: $border solid #7232dd;
    border-radius: $border-radius;
    position: relative;
    width: 59%;
    margin-top: 12px;
  }

  .events-head {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 59px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    top: -3px;
    left: 6px;
    background-color: #fff;
  }
}
</style>
