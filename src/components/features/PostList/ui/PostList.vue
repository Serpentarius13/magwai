<template>
  <ul class="posts__list" ref="postsRef">
    <li v-for="post in posts.slice(0, page * PAGE_SIZE)" :key="post.id">
      <PostCard :post="post" />
    </li>
  </ul>

  <BaseButton
    :has-right-block="true"
    class="posts__more text-very-small"
    @click="increasePage"
    :disabled="page * PAGE_SIZE >= PAGE_LIMIT"
  >
    Загрузить еще
  </BaseButton>
</template>

<script setup lang="ts">
import { IPost } from "@/components/shared/types/post.types";
import { onMounted, ref } from "vue";
import { getPosts } from "../api/getPosts";
import PostCard from "@/components/entities/PostCard.vue";
import BaseButton from "@/components/shared/ui/Button/BaseButton.vue";
import { sleep } from "@/components/shared/utils/sleep";

const posts = ref<IPost[]>([]);

const page = ref<number>(1);
const PAGE_SIZE = 5;
const PAGE_LIMIT = 30;

const postsRef = ref<HTMLElement | null>();

onMounted(async () => {
  posts.value = await getPosts(PAGE_LIMIT);
});

function increasePage() {
  if (page.value * PAGE_SIZE <= PAGE_LIMIT) {
    page.value++;

    sleep(1).then((_) => {
      if (postsRef.value) {
        postsRef.value.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    });
  }
}
</script>

<style scoped lang="scss">
.posts {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    gap: 3rem;

    @include ltTablet {
      gap: 2rem;
    }

    li {
      margin: 0 auto;

      max-width: 100vw;
      width: 32rem;

      @include ltPhone {
        width: 80vw;
      }
    }
  }

  &__more {
    margin: 0 auto;
    margin-top: 6rem;

    width: 28.2rem;
    max-width: 95vw;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
