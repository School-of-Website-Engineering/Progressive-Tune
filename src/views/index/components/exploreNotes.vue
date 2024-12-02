<!--探索笔记列表组件-->
<template>
  <div class="exploreNotesBox">
    <van-list class="exploreNotes" finished-text="继续探索得到更多笔记">
      <van-cell
        @click="showListContent(item)"
        v-for="item in noteList"
        :key="item.noteId"
        :title="item.noteTitle"
        class="exploreNotesCellTitle"
      >
        <span>{{ item.noteInfo }}</span>
      </van-cell>
      <!--笔记内容-->
      <van-popup class="noteContent" v-model="showNoteList">
        <span class="title">{{ currentNoteList.noteTitle }}</span>
        <span class="content">{{ currentNoteList.noteContent }}</span>
      </van-popup>
    </van-list>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "exploreNotes",

  data() {
    return {
      showNoteList: false,
      currentNoteList: {},
    };
  },
  computed: {
    //获取exploreNotes模块的noteList
    ...mapState({ noteList: (state) => state.exploreNotes.noteList }),
  },
  methods: {
    //添加currentNoteList笔记
    showListContent(item) {
      this.showNoteList = true;
      this.currentNoteList = item;
      console.log(this.currentNoteList);
    },
  },
};
</script>

<style lang="scss" scoped>
.exploreNotesBox {
  margin-top: 75px;

  .noteContent {
    top: 500px;
    height: 300px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: bold;
    }

    .content {
      font-size: 14px;
    }
  }
}
</style>
