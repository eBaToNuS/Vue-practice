<template>
  <div :class="['alert', 'danger']">
    <pre>{{ message }}</pre>
    <p class="alert-title">Title</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <span class="alert-close">&times;</span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const message = computed(() => store.state.message);
    return {
      message,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
