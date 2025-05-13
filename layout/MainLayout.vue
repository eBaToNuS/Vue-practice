<template>
  <div>
    <the-navbar></the-navbar>
    <div class="container with-nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../TheNavbar.vue";
export default {
  components: { TheNavbar },
};
</script>

<style lang="scss" scoped></style>
