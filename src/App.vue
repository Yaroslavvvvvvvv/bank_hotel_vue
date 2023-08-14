<template>
  <div>
    <my-header/>
    <first-section/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import FirstSection from "@/components/FirstSection.vue";

export default {
  name: "App",
  components: {FirstSection, MyHeader}
}
</script>

<style scoped>

</style>