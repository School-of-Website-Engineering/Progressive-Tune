<template>
  <div>
    {{ news.title }}
    {{ currentNews.content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        { title: "新闻1", content: "新闻1内容" },
        { title: "新闻2", content: "新闻2内容" },
        { title: "新闻3", content: "新闻3内容" },
      ],
      currentNews: null,
    };
  },
  methods: {
    showNews(news) {
      this.$set(this, "currentNews", news);
    },
  },
};
</script>

<style lang="scss" scoped></style>
