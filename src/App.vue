<template>
  <div id="app">
    <router-view />
    <span class="top-btn" @click="scrollToTop" v-show="topBtn"></span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      topBtn: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.scrollToTop();
      // 添加滚动事件
      window.addEventListener("scroll", this.scroll);
    }, 20);
  },
  methods: {
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    },
    scroll() {
      this.topBtn =
        document.documentElement.scrollTop >
        document.documentElement.clientHeight
          ? true
          : false;
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: auto;
}
#app .top-btn {
  width: 30px;
  height: 54px;
  position: fixed;
  bottom: 15%;
  right: 6%;
  content: "";
  background: url("./common/images/top.png") no-repeat;
  background-position: 0 0;
  background-size: 100%;
  cursor: pointer;
}
#app .top-btn:hover {
  background-position: 0 100%;
}
.el-timeline-item__node--large {
  left: -7px;
  height: 24px;
  width: 24px;
}
.el-timeline-item__timestamp.is-top {
  margin-bottom: 10px;
  padding-top: 8px;
}
.el-timeline-item__timestamp {
  font-size: 14px;
}
.el-card__header {
  padding: 8px 20px;
  font-size: 15px;
  font-weight: normal;
}
.el-collapse-item__header {
  font-size: 15px;
}
</style>
