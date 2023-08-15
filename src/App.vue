<template>
  <div>
    <my-header/>
    <first-section/>
    <second-section/>
    <third-section/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: {MyFooter, ThirdSection, SecondSection, FirstSection, MyHeader}
}
</script>

<style scoped>

</style>