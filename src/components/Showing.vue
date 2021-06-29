<template>
  <div class="showing">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Showing",
};
</script>

<style scoped>
.showing {
  background-color: white;
  width: 1200px;
  height: 679px;
  position: relative;
  left: 219px;
  top: -775px;
}
</style>
