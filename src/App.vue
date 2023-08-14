<template>
  <div>
    <my-header/>
    <first-section/>
    <second-section/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";

export default {
  name: "App",
  components: {SecondSection, FirstSection, MyHeader}
}
</script>

<style scoped>

</style>