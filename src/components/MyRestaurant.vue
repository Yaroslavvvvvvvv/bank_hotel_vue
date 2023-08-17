<template>
  <section class="my_restaurant">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h1 class="restaurant_header">“Safe” restaurant</h1>
          <h2>One of a Kind</h2>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="position-relative">
            <p>Bank Hotel proudly welcomes you to the<br>
              Safe Restaurant, a place where you will<br>
              wish you could dine every day. The<br>
              restaurant offers a unique menu developed<br>
              by the team of professionals led by chef<br>
              Mary-Ann Jones, the wine list with more<br>
              than 250 items, the outstanding service,<br>
              and the unforgettable atmosphere.</p>
            <div class="position-absolute">
              <img src="../assets/img/restaurant/restaurant_label.svg" alt="label" class="mw-100 restaurant_label">
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 pt-4">
          <img src="../assets/img/restaurant/big_restaurant.png" alt="restaurant" class="mw-100">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 pt-4">
          <img src="../assets/img/restaurant/small_restaurant.png" alt="restaurant" class="mw-100">
        </div>
        <div class="col-ld-4 col-md-4 col-sm-12">
          <h3>at your service</h3>
          <p class="second_text">The team of the Safe Restaurant aims to exceed all<br>
            expectations of our guests. Our chef worked hard to develop<br>
            a unique menu that features the best meals of the European<br>
            cuisine that will match the tastes of the most demanding<br>
            clients. Friendly and attentive waiters will<br>
            ensure that you will enjoy your time in our restaurant.</p>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h4>Once you try our cuisine and<br>
            service, you shall never want to<br>
            visit another restaurant.</h4>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 pt-4">
          <img src="../assets/img/restaurant/on_restaurant.png" alt="restaurant" class="mw-100">
          <p class="left_restaurant">All room decoration<br>
            was made with<br>
            ecological certified<br>
            and safe materials.</p>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 pt-4">
          <img src="../assets/img/restaurant/in_restaurant.png" alt="restaurant"  class="mw-100">
          <h5>Spend Your Tim<br>With Us</h5>
          <p class="right_text">If you are looking for an exclusive place to have a romantic<br>
            dinner, organize a business meeting, or spend an enjoyable<br>
            evening with friends, visit Safe Restaurant in Bank Hotel.<br>
            With our delicious meals, unique interior design, and<br>
            atmosphere of comfort and exquisiteness you shall never<br>
            want to go to a different restaurant.</p>
        </div>
      </div>
    </div>
    <restaurant-second/>
  </section>
</template>
<script>



import RestaurantSecond from "@/components/RestaurantSecond.vue";

export default {
  name: "MyRestaurant",
  components: {RestaurantSecond},
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/restaurant_styles/my_restaurant";
</style>