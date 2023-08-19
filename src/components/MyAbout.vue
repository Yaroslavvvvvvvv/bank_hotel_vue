<template>
  <div>
  <section class="my_about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h1>Rooms<br>& apartments</h1>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <p>All room decoration was<br>
            made with ecological<br>
            certified and safe materials.</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <img src="../assets/img/home/about/small.png" alt="room" class="mw-100">
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <h2>Superior twin</h2>
          <p class="next_text">The Superior twin is perfect for those who plan to stay<br>
            long. The spacious and bright room is equipped with<br>
            deluxe Italian furniture and has a beautiful view to the<br>
            historical part of the city. Stylish interior design and<br>
            comfortable beds will make your stay cozy and pleasant.</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img src="../assets/img/home/about/big.png" alt="room" class="mw-100">
        </div>
      </div>
    </div>
  </section>
  <my-gallery/>
  </div>
</template>

<script>
import MyGallery from "@/components/MyGallery.vue";

export default {
  name: "MyAbout",
  components: {MyGallery}
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/my_about";
</style>