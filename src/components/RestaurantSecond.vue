<template>
  <div class="container last_component">
    <div class="row restaurant_second">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <p>8 Lystopadovoho<br>
          Chynu,Lviv</p>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <span>+38 032 297 50 20</span>
      </div>
    </div>
    <div class="second_restaurant row">
      <div class="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
        <span class="get_in">Get in</span>
        <img src="../assets/img/room/third_section/third_star.svg" alt="star" class="restaurant_logo">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 d-flex pt-4">
        <div class="position-relative">
          <img src="../assets/img/room/third_section/sofa.png" alt="sofa" class="mw-100">
          <div class="position-absolute">
            <span class="touch">touch</span>
          </div>
        </div>
      </div>
    </div>
    <div class="restaurant_navigation">
      <span class="find_room row d-flex">Find a room</span>
      <div class="col-lg-12 col-md-12 col-sm-12">
        <b-dropdown size="lg" text="Check in" variant="outline-secondary" class="m-2 check">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <b-dropdown size="lg" text="Check out" variant="outline-secondary" class="m-2 check">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <b-button size="lg" pill>book room</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantSecond"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/restaurant_styles/restaurant_second";
</style>