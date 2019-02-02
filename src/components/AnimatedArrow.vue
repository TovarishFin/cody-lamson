<template>
  <v-icon class="icon" size="125px" color="primary">
    mdi-chevron-down
  </v-icon>
</template>

<script>
export default {}
</script>

<style>
.icon {
  animation: arrow-down 3s linear infinite;
}
@keyframes arrow-down {
  to {
    opacity: 0;
    transform: translateY(50%);
  }
}
</style>
