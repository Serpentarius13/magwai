<template>
  <BaseButton :theme="ButtonThemes.outline" class="left-btn">
    <PhoneIcon class="phone" />
  </BaseButton>

  <div class="right-btn">
    <BaseButton :has-right-block="true"> Оставить заявку </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/shared/Button/BaseButton.vue";
import { ButtonThemes } from "@/components/shared/Button/buttonVariants";

import PhoneIcon from "@/app/assets/icons/phone.svg";
</script>

<style lang="scss">
.right-btn {
  display: flex;

  button {
    text-transform: uppercase;
    font-weight: bold;
  }
}

.left-btn {
  svg {
    path {
      transition: 0.25s ease all;
      fill: var(--gray) !important;
      stroke: var(--gray) !important;
    }
  }

  &:hover > svg path {
    fill: white !important;
    stroke: white !important;
  }
}
</style>
