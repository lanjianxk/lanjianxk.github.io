<template>
  <div class="home">
    <top>
      <!--vue 粒子特效 -->
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </top>
    <about />
    <experience />
    <skill />
    <project />
    <bottom />
  </div>
</template>

<script>
import top from "@/components/top";
import bottom from "@/components/bottom";
import about from "@/components/about";
import experience from "@/components/experience";
import skill from "@/components/skill";
import project from "@/components/project";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    top,
    bottom,
    about,
    experience,
    skill,
    project,
  },
};
</script>

<style scoped>
.home {
  min-width: 1200px;
  height: auto;
}
</style>

