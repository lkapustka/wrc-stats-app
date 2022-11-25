<template>
  <div class="history-quantity">
    <h2>Rallies history quantity</h2>

    <form
      class="history-quantity__form"
      @submit.prevent
    >
      <input
        v-model.trim="internalValue"
        name="historyQuantity"
        type="number"
        class="history-quantity__input"
        @input="onChange"
      >
      <button
        class="btn history-quantity__btn"
        :disabled="!inputChanged"
        @click="updateHistoryQuantity()"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/composition-api";


export default {
name: "RallyHistoryQuantity",

setup() {
    const store = inject("vuex-store");
    const getHistoryQuantity = computed(() => store.getters.getRalliesHistoryQuantity);

    const internalValue = ref(getHistoryQuantity.value);
    const inputChanged = ref(false);

    const onChange = () => {
      inputChanged.value = Number(internalValue.value) !== getHistoryQuantity.value;
    }

    const updateHistoryQuantity = () => {
      store.commit("setRalliesHistoryQuantity", Number(internalValue.value));
      console.log(getHistoryQuantity.value);
    }

    return {
      internalValue,
      onChange,
      inputChanged,
      updateHistoryQuantity
    };
},
};
</script>

<style lang="scss" scoped>
.history-quantity {
    display: flex;
    flex-direction: column;
    color: #000;
    width: 100%;

    &__form {
      margin-top: 1.5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    &__input {
      width: 100%;
      padding: 1em 1.5em;
      border: 3px solid var(--primary-color);
      border-radius: 4px;
      font: bold 1.6rem 'Source Sans Pro', sans-serif;
    }

    &__btn {
      width: 100%;
      margin: 1em 0;
    }
}
</style>
