<template>
  <div class="container">
    <side-bar />
    <rally-draw />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import RallyDraw from "../components/RallyDraw.vue";

export default {
  components: { RallyDraw, SideBar },

  setup() {},
};
</script>

<style lang="scss" scoped></style>
