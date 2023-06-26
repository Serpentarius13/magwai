<template>
  <div class="popup">
    <img src="/img/ryan.gif" alt="Ryan Gosling is smiling" />

    <h2 class="heading-medium">Макет формы мне запили</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.popup {
  background-color: white;
  padding: 1.4rem;

  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 400px;
    max-width: 100vw;
    aspect-ratio: 16/9;
  }

  h2 {
    color: black;
  }
}
</style>
