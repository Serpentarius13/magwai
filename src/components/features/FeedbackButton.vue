<template>
  <BaseButton :has-right-block="true" class="right-btn" @click="openFormPopup">
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
.right-btn {
  text-transform: uppercase;
  font-weight: bold;
  width: 20.1rem;
}
</style>
