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
      <p class="form__description">
        Current chosen: {{ picked }}
      </p>
      <div
        v-for="option in options"
        :key="option.name"
        class="form__box"
      >
        <label class="form__label">
          <input
            v-model="internalValue"
            class="form__radio"
            type="radio"
            :name="name"
            :value="option.title"
          >
          {{ option.title }}
        </label>
      </div>
    </fieldset>
    <button
      :disabled="!internalValue"
      class="btn"
      @click="$emit('submit', internalValue)"
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

    picked: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.length > 1;
      }
    },
  },

  setup() {
    const internalValue = ref("");

    return {
      internalValue,
    };
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;

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

  &__description {
    margin: 0 0 1em 1.5em;
    color: var(--text-dark-color);
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
