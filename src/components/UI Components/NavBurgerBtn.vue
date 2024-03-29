<template>
  <button
    :class="[{ 'is-active': isActive, 'hamburger--dark': isDark }, 'hamburger hamburger--elastic']"
    type="button"
    aria-label="Menu"
    aria-controls="navigation"
    :aria-expanded="isActive.toString()"
    @click="$emit('click')"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>

<script>
export default {
  name: "NavBurgerBtn",
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },

    isDark: {
      type: Boolean,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
// Settings
$hamburger-padding-x: 15px !default;
$hamburger-padding-y: 15px !default;
$hamburger-layer-width: 40px !default;
$hamburger-layer-height: 4px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: #fff !default;
$hamburger-layer-dark-color: #000;
$hamburger-layer-border-radius: 4px !default;
$hamburger-hover-opacity: 1 !default;
$hamburger-active-layer-color: $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter: opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

// Hamburger
// ==================================================
.hamburger {
  padding: $hamburger-padding-y $hamburger-padding-x;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize (<button>)
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    @if $hamburger-hover-use-filter == true {
      filter: $hamburger-hover-filter;
    } @else {
      opacity: $hamburger-hover-opacity;
    }
  }

  &.is-active {
    &:hover {
      @if $hamburger-hover-use-filter == true {
        filter: $hamburger-active-hover-filter;
      } @else {
        opacity: $hamburger-active-hover-opacity;
      }
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $hamburger-active-layer-color;
    }
  }
}

.hamburger-box {
  width: $hamburger-layer-width;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: $hamburger-layer-height / -2;

  &,
  &::before,
  &::after {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height;
    background-color: $hamburger-layer-color;
    border-radius: $hamburger-layer-border-radius;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

// Hambuefer Elastic
.hamburger--elastic {
  .hamburger-inner {
    top: $hamburger-layer-height / 2;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &::before {
      top: $hamburger-layer-height + $hamburger-layer-spacing;
      transition: opacity 0.125s 0.275s ease;
    }

    &::after {
      top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);
      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  &.is-active {
    .hamburger-inner {
      $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;

      transform: translate3d(0, $y-offset, 0) rotate(135deg);
      transition-delay: 0.075s;

      &::before {
        transition-delay: 0s;
        opacity: 0;
      }

      &::after {
        transform: translate3d(0, $y-offset * -2, 0) rotate(-270deg);
        transition-delay: 0.075s;
      }
    }
  }
}

.hamburger {
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-index-btn-menu);

  &--dark {
    .hamburger-inner {
      &,
      &::before,
      &::after {
        background-color: $hamburger-layer-dark-color;
      }
    }
  }
}

@media (min-width: 992px) {
  .hamburger {
    top: 1em;
    right: 1em;
  }
}
</style>
