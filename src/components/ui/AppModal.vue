<template>
  <div class="modal-backdrop" @click.prevent="$emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
