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
        class="form__input"
        @input="onChange"
      >
    </div>
    <p class="text text--error">
      {{ errors[0] }}
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
      required: false,
      default: "text",
    },

    value: {
      type: String,
      required: true,
    },
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
      emit("update:value", internalValue.value);
    };

    return {
      internalValue,
      onChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.text {
  width: 100%;
  margin-bottom: 1.5em;
}

.form__box {
  margin-bottom: 0.2em;
}
</style>
