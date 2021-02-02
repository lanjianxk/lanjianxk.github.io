<template>
  <div class="experience">
    <div class="container">
      <span class="tip">{{ tip }}</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border"></span>
      <div class="timeline-div">
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="16">
            <el-timeline>
              <el-timeline-item
                placement="top"
                v-for="(item, index) in experienceList"
                :key="index"
                :icon="item.icon"
                :type="item.type"
                size="large"
                :timestamp="item.timestamp"
              >
                <el-card shadow="hover" :header="item.companyName">
                  <h3>{{ item.position }}</h3>
                  <p>
                    {{ item.desc }}
                  </p>
                  <p
                    class="contribution"
                    v-show="item.contributions.length > 0"
                  >
                    <el-tag
                      style="margin-right: 8px"
                      size="mini"
                      :key="content"
                      v-for="content in item.contributions"
                      >{{ content }}</el-tag
                    >
                  </p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import DataInfo from "@/data";
export default {
  name: "experience",
  data() {
    return DataInfo.experience;
  },
};
</script>

<style scoped>
.experience {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
}
.timeline-div {
  text-align: left;
}
.timeline-div h3 {
  font-weight: 500;
  font-size: 15px;
  text-align: left;
  margin-bottom: 8px;
}
.contribution {
  text-align: left;
  margin-top: 8px;
}
</style>
