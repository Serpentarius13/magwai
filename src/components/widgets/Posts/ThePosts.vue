<template>
  <section class="posts container">
    <h2 class="heading-medium">Карточки</h2>

    <PostList />
  </section>
</template>

<script setup lang="ts">
import { PostList } from "@/components/features/PostList";
</script>

<style scoped lang="scss">
.posts {
  h2 {
    color: white;
    font-weight: bold;

    margin-bottom: 5.2rem;

    @include ltTablet {
      margin-bottom: 4rem;
      font-size: 4.2rem;
    }

    @include ltPhone {
      font-size: 2rem;
    }
  }
}
</style>
