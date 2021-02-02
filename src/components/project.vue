<template>
  <div class="project">
    <div class="container">
      <span class="tip">{{ tip }}</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border"></span>
      <div class="project-list">
        <el-collapse v-model="activeNames">
          <el-collapse-item
            :title="item.projectName"
            :name="item.id"
            v-for="(item, index) in projectList"
            :key="index"
          >
            <div class="project-item">
              <span class="project-li">所属公司：</span>
              <span>{{ item.company }}</span>
            </div>
            <div class="project-item">
              <span class="project-li">项目描述：</span>
              <span>{{ item.desc }}</span>
            </div>
            <div class="project-item">
              <span class="project-li">主要职责：</span>
              <span>{{ item.role }}</span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import DataInfo from "@/data";
export default {
  name: "project",
  data() {
    return DataInfo.project;
  },
  mounted() {
    this.projectList.forEach((item) => {
      this.activeNames.push(item.id);
    });
  },
};
</script>

<style scoped>
.project {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
}
.project-list {
  padding: 0 4%;
  text-align: left;
}
.project-li {
  font-size: 14px;
  font-weight: 800;
}
.project-item {
  display: block;
}
</style>
