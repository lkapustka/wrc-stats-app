<template>
  <div class="cta-buttons">
    <button
      class="btn btn--accept"
      @click="$emit('accept')"
    >
      <font-awesome-icon
        :icon="['fas', 'check']"
        class="margin-right"
      />
      Accept
    </button>
    <button
      class="btn btn--discard"
      @click="$emit('discard')"
    >
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="margin-right"
      />
      Discard
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonsCTA",
};
</script>

<style lang="scss" scoped>
.cta-buttons {
  display: flex;
}

.btn {
  margin: 0 0.5em;
  min-width: 0;

  &--accept {
    background-color: var(--success-color);
  }

  &--discard {
    background-color: var(--error-color);
  }
}

@media (min-width: 357px) {
  .margin-right {
    margin-right: 1em;
  }
}
</style>
