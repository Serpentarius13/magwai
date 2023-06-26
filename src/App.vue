<template>
  <TheNavbar />

  <main>
    <TheHeader />
    <ThePosts class="posts" />
  </main>

  <TheModal />
</template>

<script setup lang="ts">
import TheHeader from "./components/widgets/Header/TheHeader.vue";
import TheModal from "./components/widgets/Modal/TheModal.vue";
import TheNavbar from "./components/widgets/Navbar/TheNavbar.vue";
import ThePosts from "./components/widgets/Posts/ThePosts.vue";
</script>

<style scoped lang="scss">
.posts {
  padding-top: 13.4rem;

  padding-bottom: 25.6rem;

  @include ltTablet {
    padding-bottom: 15.6rem;
  }

  @include ltPhone {
    padding-bottom: 4.3rem;
  }
}
</style>
