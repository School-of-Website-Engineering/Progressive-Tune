<template>
  <!--div class="loading" v-show="Loading"-->
  <div class="maingame" v-if="Loading">
    <div class="isloding">
      <div class="newgame">
        <font class="maintext">星之往昔</font>
        <van-button class="newgames mainbutton" @click="jumpNewGame"
          >新的冒险</van-button
        >
        <van-button class="loadinggames mainbutton" @click="jumpLoadGame"
          >载入存档
        </van-button>
        <van-button class="gamenews mainbutton" @click="gameNews"
          >游戏新闻</van-button
        >
        <van-button class="onlinesaves mainbutton" @click="coludGame"
          >云上存档</van-button
        >
        <van-button class="regsiterlogins mainbutton" @click="regLogin"
          >登录注册
        </van-button>
        <!-- TODO 尝试接入GA -->
        <font size="4px" class="maintext">Beta {{ Version }}</font>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getItem } from "@/utils/sessionStorage";
import { getGithubReleases } from "@/api";

export default {
  //处理初始化问题
  name: "Loading",
  data() {
    return {
      first: getItem("isShowLoading"),
      Version: "v0.0.1.243",
    };
  },
  created() {
    this.isLoading();
    //如果跳转到路径为index，就不显示loading界面
    if (this.$route.path === "/index") {
      this.showLoading(false);
    } else {
      this.showLoading(true);
    }
    //获取版本号
    this.getVersion();
  },
  methods: {
    ...mapMutations({ showLoading: "isShowLoading/setIsShowLoading" }),
    isLoading() {
      //第一次进入页面，显示主页面
      if (this.first === null) {
        this.showLoading(true);
      }
    },
    //跳转到新游戏页面
    jumpNewGame() {
      //跳转index界面
      this.$router.push("/index");
      this.isLoading(false);
    },
    //获取版本号
    async getVersion() {
      const { data } = await getGithubReleases();
      this.Version = data[0].tag_name;
      console.log(this.Version);
    },
    //跳转到载入存档页面
    jumpLoadGame() {
      //提示功能未开放
      this.$toast("功能未开放");
    },
    //跳转到游戏新闻页面
    gameNews() {
      //提示功能未开放
      this.$toast("功能未开放");
    },
    //跳转到云上存档页面
    coludGame() {
      //提示功能未开放
      this.$toast("功能未开放");
    },
    //跳转到登录注册页面
    regLogin() {
      //提示功能未开放
      this.$toast("功能未开放");
    },
  },
  computed: {
    ...mapState({ Loading: (state) => state.isShowLoading.isShowLoading }),
  },
};
</script>

<style lang="scss" scoped>
//遮罩，覆盖整个页面
.maingame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #807f7f;
  z-index: 999;
}

.newgame {
  display: flex;
  margin-top: calc(50% - 75px);
  left: calc(50% - 75px);
  top: calc(50% - 65px);
  transform: scale(1.4);
  flex-direction: column;

  .maintext {
    width: auto;
    @media only screen and (min-width: 500px) {
      height: 10px;
      margin: 2% auto;
      bottom: 360px;
      font-size: 24px;
    }
    height: 100px;
    margin: 1% auto;
    color: white;
    position: relative;
  }

  .mainbutton {
    background-color: #858b91;
    border-radius: 5px;
    width: 200px;
    @media only screen and (min-width: 500px) {
      height: 40px;
      margin: 1% auto;
      bottom: 320px;
    }
    height: 100px;
    margin: 1% auto;
    color: white;
  }

  .hex {
    width: 160px;
    height: 140px;
    background: #1e90ff;
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  }

  .hex:nth-child(2n + 1) {
    transform: translateY(-70px);
  }

  .hex::before {
    content: "";
    width: 145px;
    height: 130px;
    position: absolute;
    background: white;
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  }

  .hex span {
    z-index: 1;
    font-size: 60px;
    width: 160px;
    text-align: center;
    line-height: 100%;
    color: white;
  }

  .hex span::before {
    content: "";
    width: 100%;
    height: 100%;
    background: #1e90ff;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    animation: resize 0.7s linear infinite calc(var(--d) * 0.75s);
  }

  @keyframes resize {
    14.28%,
    50% {
      width: 0;
      right: 0;
    }
    64.28%,
    100% {
      left: 0;
      width: 100%;
    }
  }
}
</style>
