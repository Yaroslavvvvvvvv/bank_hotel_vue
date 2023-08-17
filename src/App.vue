<template>
  <div>
    <my-header/>
    <router-view></router-view>
    <my-footer/>
  </div>
</template>

<script>




import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: { MyFooter, MyHeader}
}
</script>

<style scoped lang="scss">

</style>