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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyRestaurant"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/restaurant_styles/my_restaurant";
</style>