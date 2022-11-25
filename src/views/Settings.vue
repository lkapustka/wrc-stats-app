<template>
  <div class="container">
    <setting-history-quantity />
    <setting-game-version />
  </div>
</template>

<script>
import SettingGameVersion from "../components/SettingGameVersion.vue"
import SettingHistoryQuantity from "../components/SettingHistoryQuantity.vue"

export default {
  components: { SettingGameVersion, SettingHistoryQuantity },

  setup() { },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 80px auto 0;
  max-width: 500px;
  padding: 0 15px;
}
</style>
