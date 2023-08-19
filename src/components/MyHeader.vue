<template>
  <div class="my_header">
    <b-navbar toggleable="lg" class="my_nav">
      <b-navbar-brand to="/" class="my_logo">BankHotel</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/rooms">Rooms</b-nav-item>
          <b-nav-item to="/restaurant">Restaurant</b-nav-item>
          <b-nav-item to="/hall">Conference hall</b-nav-item>
          <b-nav-item href="#" @click="scrollToFooter">Contacts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="my_number" href="#">+38 032 297 50 20</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: "MyHeader",
  methods: {
    scrollToFooter() {
      const footer = document.getElementById('my-footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' }); 
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/header";
</style>