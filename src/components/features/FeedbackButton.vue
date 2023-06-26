<template>
  <BaseButton :has-right-block="true" class="feedback-btn" @click="openFormPopup">
    Оставить заявку
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "@/components/shared/ui/Button/BaseButton.vue";
import useModalStore from "../shared/model/useModalStore";

import FormPopup from "../entities/FormPopup.vue";

const modalStore = useModalStore();

function openFormPopup() {
  modalStore.openModal({ component: FormPopup });
}
</script>

<style scoped lang="scss">
.feedback-btn {
  text-transform: uppercase;
  font-weight: bold;
  width: 28.2rem;
}
</style>
