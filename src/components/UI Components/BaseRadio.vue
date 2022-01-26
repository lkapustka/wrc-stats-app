<template>
  <form
    class="form"
    @submit.prevent
  >
    <h2 class="form__heading">
      {{ heading }}
    </h2>
    <fieldset class="form__fieldset">
      <legend class="form__legend">
        {{ legend }}
      </legend>
      <div
        v-for="(option, index) in options"
        :key="option"
        class="form__box"
      >
        <label
          class="form__label"
          :for="name + ++index"
        >
          <input
            :id="name + ++index"
            v-model="value"
            class="form__radio"
            type="radio"
            :value="option"
            :name="name"
            @input="onChange"
          >
          {{ option }}
        </label>
      </div>
    </fieldset>
    <button
      class="btn"
      @click="$emit('submit', value)"
    >
      Save
    </button>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "BaseRadio",

  props: {
    heading: {
      type: String,
      required: false,
      default: "",
    },

    legend: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.length > 1;
      }
    }
  },

  setup(props, { emit }) {
    const internalValue = ref("WRC 10");
    const onChange = () => {
      emit("input", internalValue);
    }

    return {
      internalValue,
      onChange,
    };
  }
};
</script>

<style lang="scss" scoped>
.form {
  &__heading {
    margin: 1em 0;
    color: var(--text-dark-color);
  }

  &__fieldset {
    display: flex;
    padding: 1.5em 0;
    border: 3px solid var(--primary-color);
    border-radius: 4px;
    flex-direction: column;
    gap: 1em;
  }

  &__legend {
    padding: 0 0.5em;
    text-align: center;
    color: var(--text-dark-color);
    font-size: 1.2rem;
    font-weight: bold;
  }

  &__label {
    display: flex;
    margin-left: 1.5em;
    gap: 0.3em;
    opacity: 1;
    color: var(--text-dark-color);
    font-weight: bold;
    cursor: pointer;
  }

  &__radio {
    appearance: none;

    width: 1.15em;
    height: 1.15em;
    align-self: center;
    border-radius: 50%;
    border: thin solid var(--primary-color);
    transition: 0.2s all linear;
    cursor: pointer;

    &:checked {
      border: 5px solid var(--primary-color);
    }
  }
}

.btn {
  margin: 1em 0;
}

@media (min-width: 768px) {
  .form__legend {
    font-size: 1.6rem;
  }
}
</style>
