<template>
  <header class="container navbar">
    <div class="navbar__left">
      <NavbarMobile />

      <BaseLogo />

      <nav class="navbar__links text-small">
        <NavbarLinks />
      </nav>
    </div>

    <div class="navbar__right">
      <NavbarButtons />
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseLogo from "@/components/shared/ui/Logo/BaseLogo.vue";
import NavbarButtons from "./NavbarButtons.vue";
import NavbarLinks from "./NavbarLinks.vue";
import NavbarMobile from "./NavbarMobile.vue";
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 11rem;

  &__left {
    display: flex;
    align-items: center;
    gap: 7.6rem;

    @include ltBigDesktop {
      gap: 3rem;
    }

    @include ltPhone {
      width: 100%;
      justify-content: space-between;
    }
  }

  &__links {
    display: flex;
    gap: 4.2rem;
    color: white;
    text-transform: uppercase;

    line-height: 150%;

    :deep(a) {
      &:hover {
        color: var(--orange);
        transition: 0.5s ease all;
      }
    }

    @include ltBigDesktop {
      gap: 2rem;
    }

    @include ltDesktop {
      display: none;
    }
  }

  &__right {
    display: flex;
    gap: 1.25rem;

    @include ltPhone {
      display: none;
    }
  }

  :deep(label) {
    display: none;

    @include ltDesktop {
      display: flex;
    }
  }
}
</style>
