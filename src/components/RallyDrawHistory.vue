<template>
  <div
    class="container"
  >
    {{ showHistory }}
  </div>
</template>

<script>
import { computed, inject } from '@vue/composition-api';

export default {
    name: "RallyDrawHistory",
    props: {
        rally: {
            type: String,
            require: true,
            default: null,
        },
    },

    setup() {
        const store = inject("vuex-store");
        const showHistory = computed(() => {
            return store.getters.getRalliesHistory;
        });

        return {
            showHistory,
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: var(--gradient-color-second);
  border-radius: 3px;
  text-align: center;
  color: var(--gradient-color-first);
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
