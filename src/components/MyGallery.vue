<template>
<section class="last_section">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12">
        <img src="../assets/img/home/about/left_small.png" alt="room" class="mw-100">
        <img src="../assets/img/home/about/next_left_small.png" alt="room" class="mw-100 mt-5">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h1>our Gallery</h1>
        <p>Explore our spacious rooms with the gorgeous view to<br>
          the historical part of the city. Each room has an<br>
          exclusive interior design decorated with modern art<br>
          pieces that will make your stay unforgettable. </p>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12">
        <img src="../assets/img/home/about/first_left.png" alt="room" class="mw-100 mb-5">
        <img src="../assets/img/home/about/next_left.png" alt="room" class="mw-100 mt-5">
      </div>
    </div>
  </div>
  <restaurant-second/>
</section>
</template>

<script>
import RestaurantSecond from "@/components/RestaurantSecond.vue";

export default {
  name: "MyGallery",
  components: {RestaurantSecond}
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/my_home/my_gallery";
</style>