<template>
  <section class="third_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="position-relative">
            <img src="../assets/img/room/third_section/bath.png" alt="table" class="mw-100">
            <div class="position-absolute label">
              <img src="../assets/img/room/third_section/label.svg" alt="label" class="mw-100">
            </div>
          </div>
          <h4>Superior twin</h4>
          <p class="third_text">All rooms in Bank Hotel have a special<br>
            charm achieved through a combination of<br>
            modern functional design and original 20th<br>century layout.</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <img src="../assets/img/room/third_section/table.png" alt="bath" class="mw-100">
          <p class="third_text">
            The Superior twin includes two functional zones: a<br>
            living room with the best Italian furniture, and an<br>
            isolated cozy bedroom with a large bed. Here, you will<br>
            find space both for work and comfortable rest. Hotel<br>
            offers supreme comfort and outstanding 24-hour room<br>
            service to make sure that the time you spend here is<br>
            enjoyable and pleasant.
          </p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <b-button variant="outline-secondary" class="third_button">/Book room</b-button>
          <div>
            <a class="third_number" href="#">+38 032 297 50 20</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <a class="third_location" href="#">8 Lystopadovoho<br>Chynu,Lviv</a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
          <span class="next_header">Get in</span>
          <img src="../assets/img/room/third_section/third_star.svg" alt="star" class="third_logo">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 d-flex pt-4">
          <div class="position-relative">
            <img src="../assets/img/room/third_section/sofa.png" alt="sofa" class="mw-100">
            <div class="position-absolute">
              <span class="last_header">touch</span>
            </div>
          </div>
        </div>
      </div>
      <div class="room_navigation">
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
  </section>
</template>

<script>
export default {
  name: "ThirdSection"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/room_styles/third_section";

</style>