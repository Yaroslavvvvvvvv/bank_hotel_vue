<template>
  <section class="home_first">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-7 col-sm-12">
          <h1>Bank<span class="hotel_header">Hotel</span></h1>
          <p class="left_text">rooms // restaurant // congress hall // wine bar</p>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12">
          <div class="d-flex align-items-center">
            <img src="../assets/img/room/third_section/third_star.svg" alt="star" class="home_star">
            <span class="since">since 1973</span>
          </div>
          <p class="right_text">The luxurious hotel in the most beautiful<br>
            European city with an exclusive restaurant,<br>
            conference-hall, and art-bar.</p>
        </div>
      </div>
      <div class="position-relative">
        <img src="../assets/img/home/home_first/big_room.png" alt="room" class="mw-100">
        <div class="position-absolute mt-5">
          <b-dropdown size="lg" text="Check in" variant="outline-secondary" class=" first_dropdown">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
          <b-dropdown size="lg" text="Check out" variant="outline-secondary" class="second_dropdown">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
          <b-button class="button_dropdown" size="lg" pill>book room</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeFirst"
}
</script>

<style scoped lang="scss">
@import "../assets/styles/my_home/home_first";

</style>