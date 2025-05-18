<template>
  <app-message></app-message>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import Auth from "@/views/Auth.vue";
import AppMessage from "@/components/ui/AppMessage";
export default {
  components: { Auth, AppMessage },
};
</script>

<style lang="scss" scoped></style>
