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
  height: 700px;
  position: absolute;
  left: 219px;
  top: 0px;
}
</style>
