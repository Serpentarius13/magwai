<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :class="['btn', size, theme, hasRightBlock && 'has-right']"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ButtonSizes, ButtonThemes } from "./buttonVariants";

interface IButton {
  size?: ButtonSizes;
  theme?: ButtonThemes;
  isLink?: boolean;
  hasRightBlock?: boolean;
}

const {
  size = ButtonSizes.small,
  theme = ButtonThemes.filled,
  hasRightBlock = false,
} = defineProps<IButton>();
</script>

<style scoped lang="scss">
@import "@/app/styles/auxi/mixins.scss";

@mixin skew {
  transform: skew(-15deg);

  transition: 0.25s ease all;

  z-index: -1;
}
.btn {
  border: none;

  transition: 0.5s ease all;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  isolation: isolate;

  &.filled {
    color: white;

    &::before {
      @include pseudo-element;
      @include skew;

      background-color: var(--orange);
      border: 1px solid var(--orange);
    }

    &:hover {
      color: var(--orange);

      &::before {
        background-color: transparent;
      }
    }
  }
  &.outline {
    color: var(--gray);

    &::before {
      @include pseudo-element;
      @include skew;

      border: 1px solid var(--gray);
      background-color: transparent;
    }

    &:hover {
      &::before {
        background-color: var(--orange);
        border-color: var(--orange);
      }
    }
  }

  &.black {
    background-color: var(--light-black);
    color: white;
    border: 1px solid var(--light-black);

    &:hover {
      color: black;
      background-color: transparent;
    }
  }

  &.small {
    min-height: 6rem;
    padding: 1.4rem 1.1rem;
  }

  &.medium {
    padding: 1.6rem 2rem;
  }

  &.has-right {
    &::after {
      @include pseudo-element;
      @include skew;

      width: fit-content;
      height: 100%;
      left: auto;
      right: -1rem;
      border-right: 5px solid white;
      border-left: 5px solid transparent;

      background-color: transparent;

      transition: 0.25s ease all;
    }

    &:hover::after {
      rotate: -180deg;
      border-right-color: var(--orange);
    }
  }

  &:disabled {
    &::before {
      background-color: var(--gray);
    }

    cursor: default;
    color: black;

    &:hover {
      color: black;
      cursor: default;
      &::before {
        background-color: var(--gray);
      }
    }

    &::after {
      display: none;
    }
  }
}
</style>
