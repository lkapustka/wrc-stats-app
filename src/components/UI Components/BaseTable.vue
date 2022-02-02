<template>
  <div class="wrapper">
    <h2 class="heading">
      {{ heading }}
    </h2>
    <table class="table">
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
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    heading: {
      type: String,
      required: false,
      default: ""
    },

    headers: {
      type: Array,
      required: true,
      validator: (value) => {
        return Array.isArray(value) && value.length > 0;
      },
    },

    items: {
      type: Array,
      required: true,
      validator: (value) => {
        return Array.isArray(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  margin: 2em 0;
  font-size: 2rem;
  color: var(--text-dark-color);
}

.table {
  --shadow-width: 40px;
  box-shadow: 0 0 20px #00000026;
  width: calc(100% - var(--shadow-width));

  display: flex;
  position: relative;
  max-width: min-content;
  margin: 1em auto;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.4rem;
  white-space: nowrap;

  &::before {
    content: "Scroll horizontally >>";
    display: block;
    position: absolute;
    top: -2em;
    right: 0;
    color: var(--text-dark-color);
    font-size: 1rem;
  }

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
    display: flex;
    height: 3.5em;
    padding: 0.6em 1.2em;
    align-items: center;
    border: thin solid #d9d7ce;
    font-weight: bold;

    &:not(:last-child) {
      border-bottom: none;
    }
  }

  &__data {
    border-left: 0;
    color: var(--text-dark-color);
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

    &__header,
    &__data {
      display: table-cell;

      &:not(:last-child) {
        border: thin solid #d9d7ce;
      }
    }

    &__data {
      height: auto;
    }
  }
}
</style>
