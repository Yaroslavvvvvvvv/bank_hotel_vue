<template>
  <div>
    <home-first/>
    <best-apartments/>
    <div class="restaurant_second">
      <restaurant-second/>
    </div>
  </div>
</template>

<script>


import HomeFirst from "@/components/HomeFirst.vue";
import BestApartments from "@/components/BestApartments.vue";
import RestaurantSecond from "@/components/RestaurantSecond.vue";

export default {
  name: "MyHome",
  components: {RestaurantSecond, BestApartments, HomeFirst},
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/variables";
.restaurant_second {
  padding-top: 50px;
  background: $background;
}

</style>