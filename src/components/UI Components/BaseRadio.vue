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
        v-for="[option, isChecked] in Object.entries(options)"
        :key="option"
        class="form__radio-box"
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
            :checked="isChecked"
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
      type: Object,
      required: true,
      validator: (value) => {
        return Object.keys(value).length > 1
      }
    }
  },

  setup(props) {
    console.log(props.options);
    const submit = (props) => {

      console.log(props.options);
    }

    return { submit };
  },
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
