<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th rowspan="3"></th>
          <th colspan="3">{{ rallyName }}</th>
        </tr>
        <tr>
          <th colspan="3">{{ id }}</th>
        </tr>
        <tr>
          <th>{{ playerOne }}</th>
          <th>{{ playerTwo }}</th>
          <th>Date of rally</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i">
          <th>{{ i + 1 }}</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>

    <table>
      <tr>
        <th></th>
        <th>{{ playerOne }}</th>
        <th>{{ playerTwo }}</th>
      </tr>
      <tr>
        <th>BEST</th>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>WORST</th>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>TOTAL</th>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>AVERAGE</th>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>DNF</th>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>WINS</th>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, inject, computed } from "@vue/composition-api";

export default defineComponent({
  props: {
    rallyName: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    playerOne: {
      type: String,
      required: true,
    },

    playerTwo: {
      type: String,
      required: true,
    },

    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  setup(props) {
    const store = inject("vuex-store");

    const len = 10;

    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.container {
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
