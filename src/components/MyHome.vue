<template>
  <div>
    <home-first/>
    <best-apartments/>
  </div>
</template>

<script>


import HomeFirst from "@/components/HomeFirst.vue";
import BestApartments from "@/components/BestApartments.vue";

export default {
  name: "MyHome",
  components: {BestApartments, HomeFirst},
}
</script>

<style scoped lang="scss">


</style>