<template>
  <section class="header">
    <div class="header__inner container">
      <h1 class="heading-medium">
        Полет Илона Маска <br />
        и Dogie Coin
      </h1>

      <h2 class="text-medium">
        В прошлый четверг все офигели от полета DOGIE COIN на марс.
      </h2>

      <FeedbackButton class="header__btn" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeedbackButton from "@/components/features/FeedbackButton.vue";
</script>

<style scoped lang="scss">
.header {
  background: url("/img/header-bg.png") 0 0 / cover no-repeat;
  width: 100vw;

  height: calc(100vh - 11rem);

  padding-bottom: 10rem;

  display: flex;
  align-items: end;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h1 {
      text-transform: uppercase;

      font-weight: bold;
    }

    h2 {
      opacity: 0.79;

      line-height: 150%;
    }
  }

  &__btn {
    @include ltPhone {
      width: 21.9rem;
    }
  }
}
</style>
