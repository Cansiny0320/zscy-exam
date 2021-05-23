<template>
  <div class="container" :class="{ dark: dark }">
    <Card
      :examInfo="examInfo"
      :isLast="index === examInfos.length - 1"
      v-for="(examInfo, index) of examInfos"
      :key="examInfo.date + examInfo.course"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { fetchExam, fetchReExam } from "./services/api";
import Card from "./components/Card";
export default {
  name: "App",
  components: {
    Card,
  },
  setup() {
    const dark = localStorage.getItem("uiType") === "1";
    let examInfos = ref([]);
    async function getExam() {
      const { data: exam } = await fetchExam();
      const { data: reExam } = await fetchReExam();
      examInfos.value = [].concat(exam.data).concat(reExam.data);
    }
    getExam();
    return { examInfos, dark };
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
}
.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  background-color: #f8f9fc;
}
.dark {
  background-color: #1d1d1d;
}
</style>
