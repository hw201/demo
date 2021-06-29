<template>
  <div class="showposition">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.showposition {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 220px;
  width: 1200px;
}
</style>