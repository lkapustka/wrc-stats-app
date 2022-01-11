<template>
  <table
    class="table"
    :headers="headers"
    :items="items"
  >
    <thead class="table__head">
      <tr class="table__row">
        <th
          v-for="(header, index) in headers"
          :key="index"
          class="table__header"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="table__row"
      >
        <td
          v-for="(header, indexColumn) in headers"
          :key="indexColumn"
          class="table__data"
        >
          {{ item[header] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "VueTable",
  props: {
    headers: {
      type: Array,
      required: true,
      validator: (value) => {
        if (value.length === 0) return false;
        return Array.isArray(value);
      },
    },

    items: {
      type: Array,
      required: true,
      validator: (value) => {
        if (value.length === 0) return false;
        return Array.isArray(value);
      },
    },
  },

  setup() {},
};
</script>
<style lang="scss" scoped>
.table {
  --shadow-width: 40px;
  box-shadow: 0 0 20px #00000026;

  display: flex;
  width: calc(100% - var(--shadow-width));
  max-width: min-content;
  margin: 2em auto;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.4rem;
  white-space: nowrap;

  &__head {
    display: flex;
    min-width: min-content;
    flex-shrink: 0;
  }

  &__body {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  &__row {
    display: flex;
    min-width: min-content;
    flex-direction: column;
    flex-shrink: 0;

    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }
  }

  &__header {
    background-color: var(--primary-color);
    color: var(--text-color);
    text-align: left;
    text-transform: uppercase;
  }

  &__header,
  &__data {
    display: block;
    padding: 0.6em 1.2em;
    border: thin solid #d9d7ce;

    &:not(:last-child) {
      border-bottom: none;
    }
  }

  &__data {
    border-left: 0;
    color: #000000;
  }
}

@media (min-width: 700px) {
  .table {
    display: block;
    border-radius: 7px 7px 0 0;
    overflow-x: auto;

    &__head {
      display: table-header-group;
    }

    &__body {
      display: table-row-group;
    }

    &__row {
      display: table-row;
    }

    &__header, &__data {
      display: table-cell;

      &:not(:last-child) {
        border: thin solid #d9d7ce;
      }
    }
  }
}
</style>
