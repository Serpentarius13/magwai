<template>
  <a v-for="{ link, text } in navLinks" :key="text" :href="link">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
type TLink = {
  link: string;
  text: string;
};

const navLinks: TLink[] = [
  { link: "", text: "Услуги" },
  { link: "", text: "Абонементы" },
  { link: "", text: "Почему мы" },
  { link: "", text: "Оборудование" },
  { link: "", text: "Акции" },
  { link: "", text: "Faq" },
  { link: "", text: "Контакты" },
];
</script>

<style scoped lang="scss"></style>
