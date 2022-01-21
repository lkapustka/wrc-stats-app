<template>
  <div class="container">
    <base-radio
      name="version"
      :options="['WRC 9', 'WRC 10']"
    />
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import BaseRadio from "../components/UI Components/BaseRadio.vue";

export default {
  components: { BaseRadio },
  setup() {},
}
</script>

FormInput
<style lang="scss" scoped>
div {
  width: 100vw;
  height: 300px;
  background-color: rgb(58, 58, 58);
}
</style>
