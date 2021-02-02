<template>
  <div class="skill">
    <div class="container">
      <span class="tip">{{ tip }}</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border"></span>
      <div class="s_wrapper">
        <div class="progress-bar" :key="index" v-for="(item, index) in skill">
          <el-row>
            <el-col :span="12">{{ item.name }} </el-col>
            <el-col :span="12">
              <el-rate
                disabled
                show-text
                allow-half
                v-model="item.score"
                void-color="#DCDFE6"
                disabled-void-color="#DCDFE6"
                :colors="['#FFC801', '#FF9000', '#FF6201']"
                :texts="['了解', '一般', '熟悉', '精通', '大神']"
                text-color="#FF6201"
              >
              </el-rate
            ></el-col>
          </el-row>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
import DataInfo from "@/data";
export default {
  name: "skill",
  data() {
    return DataInfo.skill;
  },
};
</script>

<style scoped>
.skill {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  text-align: center;
}
.progress-bar {
  float: left;
  width: 33%;
  height: auto;
  padding: 0 40px;
  box-sizing: border-box;
  margin-top: 24px;
  color: #2d405e;
  font-size: 16px;
}
</style>
