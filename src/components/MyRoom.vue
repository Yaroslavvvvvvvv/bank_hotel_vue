<template>
<div>
  <first-section/>
  <second-section/>
  <third-section/>
</div>
</template>

<script>
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";

export default {
  name: "MyRoom",
  components: { ThirdSection, SecondSection, FirstSection}
}
</script>

<style scoped>

</style>