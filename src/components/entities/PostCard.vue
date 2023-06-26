<template>
  <figure class="card">
    <img src="/img/post-img.png" alt="Картинка поста" />

    <article class="card__inner text-small">
      <div>
        <h4>
          {{ post.title }}
        </h4>

        <p>
          {{ post.body }}
        </p>
      </div>

      <div class="card__inner-bottom">
        <span class="text-very-small"> Posted by user #{{ post.userId }} </span>
        <BaseButton
          :theme="ButtonThemes.black"
          :size="ButtonSizes.medium"
          class="card__inner-btn"
        >
          Continue reading</BaseButton
        >
      </div>
    </article>
  </figure>
</template>

<script setup lang="ts">
import { IPost } from "../shared/types/post.types";
import BaseButton from "../shared/ui/Button/BaseButton.vue";
import { ButtonSizes, ButtonThemes } from "../shared/ui/Button/buttonVariants";

interface IPostCard {
  post: IPost;
}

defineProps<IPostCard>();
</script>

<style scoped lang="scss">
.card {
  width: 100%;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 18.5rem;

    object-fit: cover;
  }

  &__inner {
    padding: 2.5rem;
    background-color: white;

    min-height: 43.6rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    justify-content: space-between;

    &-bottom {
      button {
        margin-top: 2rem;
      }
    }

    h4 {
      color: var(--light-black);

      line-height: 2.6rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;

      font-weight: bold;

      font-family: var(--mulish-font);
    }

    p {
      color: var(--light-gray);
      line-height: 2.4rem;
    }

    span {
      color: var(--light-black);

      font-weight: bold;
    }

    button {
      width: 100%;
    }
  }
}
</style>
