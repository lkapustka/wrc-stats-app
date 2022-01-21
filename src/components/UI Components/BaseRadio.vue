<template>
  <form
    class="form"
    @submit.prevent
  >
    <h2 class="form__heading">
      Your WRC version
    </h2>
    <fieldset class="form__fieldset">
      <legend class="form__legend">
        Please select version of WRC game you are using
      </legend>
      <div
        v-for="option in options"
        :key="option"
      >
        <label
          class="form__label"
          :for="option"
        >
          <input
            :id="option"
            class="form__radio"
            type="radio"
            :name="name"
          >
          {{ option }}
        </label>
      </div>
    </fieldset>
    <button
      class="btn"
      @click="submit"
    >
      Save
    </button>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";
import { isArray } from 'lodash';

export default {
  name: "BaseRadio",
  props: {
    name: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
      validator: (value) => {
        return isArray(value) && value.length > 1
      }
    }
  },

  setup() {
    const submit = () => { console.log("submit"); }

    return { submit };
  },
};
</script>
<style lang="scss" scoped>
.form {
  &__heading {
    padding: 1em 0;
  }

  &__fieldset {
    display: flex;
    padding: 1em 0;
    border: 2px solid var(--primary-color);
    flex-direction: column;
    gap: 0.5em;
  }

  &__legend {
    padding: 0 0.3em;
    font-size: 12px;
    // color: var(--primary-color);
    // font-weight: bold;
  }

  &__label {
    padding: 0 1em;
  }
}

.btn {
  margin: 1em 0;
  border-radius: initial;
}
</style>
