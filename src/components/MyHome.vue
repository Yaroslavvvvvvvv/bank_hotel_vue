<template>
  <div>
    <home-first/>
    <conference-hall/>
  </div>
</template>

<script>


import HomeFirst from "@/components/HomeFirst.vue";
import ConferenceHall from "@/components/ConferenceHall.vue";

export default {
  name: "MyHome",
  components: {ConferenceHall, HomeFirst},
}
</script>

<style scoped lang="scss">


</style>