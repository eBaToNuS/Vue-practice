<template>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import Auth from "@/views/Auth.vue";
export default {
  components: { Auth },
};
</script>

<style lang="scss" scoped></style>
