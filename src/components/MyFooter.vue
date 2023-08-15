<template>
  <footer>
    <div class="container">
      <hr class="colored_line">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-4">
          <h5>/About us</h5>
          <p>The five-star hotel in a beautiful<br>
            European city with a modern<br>
            restaurant, conference-hall, and art-bar.</p>
          <span>©2021 All rights reserved. BankHotel</span>
        </div>
        <div class="col-col-lg-3 col-md-3 col-sm-4">
          <h5>/News</h5>
          <p>Sign up to our newsletter not to miss<br>
            exclusive offers and information about<br>
            the upcoming events.</p>
          <form class="d-flex">
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary footer_button">></button>
          </form>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-4 row justify-content-between">
          <h5>/Social</h5>
          <div class="col-lg-2 col-md-2">
            <a href="#">Facebook</a>
          </div>
          <div class="col-lg-2 col-md-2">
            <a href="#">Instagram</a>
          </div>
          <div class="col-lg-2 col-md-2">
            <a href="#">twitter</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/my_footer";

</style>