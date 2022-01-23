<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
  >
    <div class="form__box">
      <label
        class="form__label"
        :for="id"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        v-model.trim="internalValue"
        :type="type"
        :error="error"
        class="form__input"
        @input="onChange"
      >
    </div>
    <p class="text text--error">
      {{ errors[0] || error }}
    </p>
  </validation-provider>
</template>

<script>
import { ref } from "@vue/composition-api";
import { ValidationProvider, extend, setInteractionMode } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

export default {
  name: "FormInput",
  components: { ValidationProvider },
  props: {
    rules: {
      type: String,
      required: true,
      default: "required",
    },

    id: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: "text",
      required: false,
    },

    value: {
      type: String,
      required: true,
    },

    error: {
      type: String,
      default: "",
      required: false,
    }
  },

  setup(props, { emit }) {

    Object.keys(rules).forEach((rule) => {
      extend(rule, {
        ...rules[rule],
        message: messages[rule],
      });
    });

    setInteractionMode("eager");

    const internalValue = ref("");
    const onChange = () => {
      emit("input", internalValue.value);
    };

    return {
      internalValue,
      onChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__box {
    display: flex;
    margin-bottom: 0.2em;
    flex-direction: column;
    justify-content: flex-end;
    transition: transform 0.4s ease;

    &::after {
      content: "";
      display: block;
      height: 0.3em;
      background-color: var(--text-color);
      opacity: 0.7;
    }

    &:focus-within::after,
    &:focus-within > .form__label {
      opacity: 1;
    }
  }

  &__input {
    display: block;
    width: 100%;
    padding: 0.5em 0;
    background-color: transparent;
    border: none;
    color: var(--text-color);
    font: bold 2rem "Source Sans Pro", sans-serif;

    &:focus {
      color: var(--text-color);
      font-weight: bold;
      outline: none;
    }
  }

  &__label {
    color: var(--text-color);
    font-weight: bold;
    opacity: 0.7;
    transition: opacity 0.4s ease;
  }
}

.text {
  text-align: center;
  margin-bottom: 1.5em;
}
</style>
