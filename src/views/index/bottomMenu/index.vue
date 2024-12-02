<template>
  <div class="bottomMenuBox">
    <van-row type="flex" justify="space-around" class="bottomMenu">
      <!--对话框-->
      <van-tag color="#7232dd" class="menu-head">信息</van-tag>
      <van-col class="textOutput">
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

      <van-col span="12" class="more">
        <van-tag color="#7232dd" class="menu-head">更多</van-tag>
        <div class="bagBox" @click="bagShow">
          <img
            class="bag"
            :src="
              bagTab
                ? require('@/assets/bag.svg')
                : require('@/assets/bagClick.svg')
            "
            alt=""
          />
        </div>

        <van-button
          @click="archive"
          class="archive"
          id="button-actiive"
          :loading="this.archiveLoading"
          type="info"
          loading-text="加载中..."
        >
          读取存档
        </van-button>
        <van-button
          @click="IllustratedBook"
          class="World IllustratedBook"
          id="button-actiive"
          color="#7232dd"
          >世界图鉴
        </van-button>
        <van-button
          @click="showExploreNotes"
          class="exploreNotes"
          id="button-actiive"
          type="primary"
          >探索笔记
        </van-button>
        <van-button
          @click="aboutUs"
          class="aboutUs"
          id="button-actiive"
          type="warning"
          >关于我们
        </van-button>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="bottomLine">
      <van-tag class="time-list" plain type="primary">
        <span>第{{ this.toDay }}天</span>
        <span>{{ this.worldTime }}</span>
      </van-tag>
      <van-tag class="time-list" plain type="primary">
        <span>当前时间:</span>
        <span>{{ worldStatus }}</span>
      </van-tag>
      <van-button
        @click="pauseBtn"
        :icon="!this.pause ? 'pause' : 'play'"
        class="pause"
        type="danger"
        >暂停游戏
      </van-button>
    </van-row>

    <!-- 背包 -->
    <van-popup
      class="bagPopupBox"
      v-model="bagTab"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-tag
        class="bagBoxBar bagBoxBarBorder"
        round
        size="large"
        type="primary"
        ><span>背</span><span>包</span>
        <van-icon
          class="bagEdit"
          @click="bagEditing"
          :name="!bagEdit ? 'delete' : 'checked'"
        />
      </van-tag>
      <channel-edit :bag-edit="bagEdit"></channel-edit>
    </van-popup>

    <!-- //探索笔记 -->
    <van-popup
      class="bagPopupBox"
      v-model="exploreNotes"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-tag class="noteBoxBar" round size="large" type="primary">
        <van-icon class="mapDescription" name="description" />
        <span>探</span><span>索</span><span>笔</span><span>记</span>
        <van-icon class="mapDescription" name="description" />
      </van-tag>
      <explore-notes></explore-notes>
    </van-popup>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import bubbleDialog from "@/views/index/components/bubbleDialog.vue";
import channelEdit from "@/views/index/components/channel-edit.vue";
import exploreNotes from "@/views/index/components/exploreNotes.vue";

export default {
  name: "bottomMenu",
  components: { bubbleDialog, channelEdit, exploreNotes },
  data() {
    return {
      //暂停按钮状态
      pause: false,
      archiveLoading: false,
      bagTab: false,
      //背包编辑状态
      bagEdit: false,
      //探索笔记状态
      exploreNotes: false,
    };
  },
  //监听时间变化并赋值给setCurrentTime
  watch: {
    worldTime() {
      this.setCurrentTime(this.worldTime);
    },
  },
  created() {
    // 获取timer的游戏世界时间(changeTime)
    this.changeTime();
  },
  computed: {
    // 获取timer的游戏世界时间(worldTime，toDay)
    ...mapGetters("timer", ["worldTime", "toDay"]),
    //获取timeState的状态(worldStatus,worldStatus)
    ...mapState("timeState", ["worldStatus", "worldStatus"]),
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
  methods: {
    // 获取timer的游戏世界时间(changeTime,pauseTime,resumeTime)
    ...mapActions("timer", ["changeTime", "pauseTime", "resumeTime"]),
    //获取timeState的天气(setCurrentTime)
    ...mapActions("timeState", ["setCurrentTime"]),

    // 暂停与开始游戏
    pauseBtn() {
      this.pause = !this.pause;
      // 暂停游戏
      if (this.pause) {
        this.pauseTime();
      } else {
        // 开始游戏
        this.resumeTime();
      }
    },
    // 读取存档
    archive() {
      this.archiveLoading = true;
      setTimeout(() => {
        this.archiveLoading = false;
      }, 2000);
    },
    IllustratedBook() {},
    aboutUs() {},
    // 背包显示
    bagShow() {
      this.bagTab = !this.bagTab;
    },
    // 背包编辑
    bagEditing() {
      this.bagEdit = !this.bagEdit;
    },
    // 探索笔记
    showExploreNotes() {
      this.exploreNotes = !this.exploreNotes;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.exploreNotes {
  margin-top: 75px;
  @media only screen and (min-width: 500px) {
    margin-top: 0;
  }
}
.bagPopupBox {
  .bagBoxBarBorder {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .noteBoxBar {
    position: fixed;
    z-index: 2;
    width: 95.82%;
    height: 60px;
    border-radius: unset;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16px;
  }

  .bagBoxBar {
    position: fixed;
    z-index: 2;
    width: 95.82%;
    height: 60px;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16px;

    .mapDescription {
      font-size: 20px;
    }

    .bagEdit {
      position: absolute;
      right: 60px;
      font-size: 18px;
    }
  }
}

.bottomLine {
  width: $body-width;
  height: 6vh;
  margin: 0 auto 0;
  border: $border solid rgb(114, 50, 221);

  .time-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 43px;
    margin: auto;
    text-align: center;
    border-radius: 5px;

    &:nth-child(2) {
      width: 210px;
    }

    @media only screen and (min-width: 500px) {
      width: 145px;
      height: 30px;
      line-height: 20px;
    }
  }

  .pause {
    width: 205px;
    height: 44px;
    margin: auto;
    display: flex;
    font-size: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    @media only screen and (min-width: 500px) {
      width: 211px;
      height: 30px;
    }
  }
}

.bottomMenu {
  border: $border solid #7232dd;
  width: $body-width;
  height: $bottomMenu-height;
  border-bottom: none;
  display: flex;
  justify-content: space-around;
  margin: 6px auto 0;
  position: relative;

  .bagBox {
    width: 100px;
    height: 100px;
    border: 2mm ridge rgba(50, 220, 132, 0.3);
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      z-index: 2;
    }

    @media only screen and (min-width: 500px) {
      width: 50px;
      height: 50px;
    }

    img {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      z-index: 2;
      @media only screen and (min-width: 500px) {
        width: 40px;
        height: 40px;
      }
      @media only screen and (max-width: 500px) {
        width: 45px;
        height: 45px;
      }
    }
  }

  .textOutput {
    height: $Menu-height;
    margin-top: 4px;
    width: 300px;
    border: $border solid #7232dd;
    border-radius: $border-radius;
    position: relative;
    overflow: auto;
    @media only screen and (min-width: 500px) {
      width: 43%;
      margin-top: 11px;
    }
  }
  .aboutUs {
    margin-top: 75px;

    @media only screen and (min-width: 500px) {
      margin-top: 0;
    }
  }
  .more {
    height: $Menu-height;
    border: $border solid #7232dd;
    border-radius: 5px;
    position: relative;
    width: 54%;
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    .archive,
    .IllustratedBook,
    .exploreNotes,
    .aboutUs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      flex-direction: column-reverse;
      width: 150px;
      height: 55px;
      font-size: 10px;
      padding: 0;
    }
  }

  .menu-head {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: $border solid #7232dd;
    border-radius: 5px;
    position: absolute;
    top: -7px;
    left: 6px;

    z-index: 2;
    @media only screen and (min-width: 500px) {
      width: 60px;
      top: -7px;
      left: 6px;
      z-index: 2;
    }
  }

  @media only screen and (min-width: 500px) {
    #button-actiive {
      width: 120px;
      height: 40px;
    }
  }
}
</style>
