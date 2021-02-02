<template>
  <div class="about">
    <div class="container">
      <span class="tip">{{ tip }}</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border one"></span>
      <div class="carousel-div">
        <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in introduce" :key="item">
            <div class="medium">
              {{ item }}
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import DataInfo from "@/data";
export default {
  name: "about",
  data() {
    return DataInfo.about;
  },
};
</script>

<style scoped>
.about {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  text-align: center;
}
.medium {
  color: #2d405e;
  font-size: 16px;
  opacity: 0.75;
  margin: 40px 30px;
  height: 180px;
}
.carousel-div {
  padding: 0 4%;
}
.el-carousel__item:nth-child(2n) {
  background-color: rgb(179, 216, 255);
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(217, 236, 255);
}
</style>
