<template>
  <BaseButton :theme="ButtonThemes.outline" class="left-btn">
    <PhoneIcon class="phone" />
  </BaseButton>

  <FeedbackButton />
</template>

<script setup lang="ts">
import BaseButton from "@/components/shared/ui/Button/BaseButton.vue";

import { ButtonThemes } from "@/components/shared/ui/Button/buttonVariants";

import PhoneIcon from "@/app/assets/icons/phone.svg";
import FeedbackButton from "@/components/features/FeedbackButton.vue";
</script>

<style lang="scss">
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

.right-btn {
  @include ltTablet {
    width: 20.1rem;
  }
}
</style>
