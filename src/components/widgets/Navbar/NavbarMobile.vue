<template>
  <label class="burger">
    <input type="checkbox" v-model="isMobileMenuOpened" />

    <span class="first" />
    <span class="second" />
    <span class="third" />
  </label>

  <Teleport to="body">
    <Transition name="menu">
      <div class="mobile-menu" v-if="isMobileMenuOpened">
        <div class="mobile-menu__links">
          <NavbarLinks />
        </div>

        <div class="mobile-menu__buttons">
          <NavbarButtons />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import NavbarButtons from "./NavbarButtons.vue";
import NavbarLinks from "./NavbarLinks.vue";
import { lockBody, unlockBody } from "@/utils/lock";

const isMobileMenuOpened = ref<boolean>();

watch(isMobileMenuOpened, () => {
  if (isMobileMenuOpened.value) lockBody();
  else unlockBody();
});
</script>

<style scoped lang="scss">
.burger {
  input {
    display: none;
  }

  padding: 1rem 0.4rem;
  width: 5rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  position: relative;

  cursor: pointer;

  span {
    border-bottom: 2px solid white;
    border-radius: 1rem;
    transition: 0.25s ease all;

    &.first {
      width: 40%;
    }
    &.second {
      width: 100%;
    }
    &.third {
      width: 55%;
    }
  }

  input:checked ~ span {
    position: absolute;
    left: 35%;
    top: 50%;

    width: 100%;

    &.first {
      rotate: -45deg;
    }
    &.second {
      rotate: 45deg;
    }
    &.third {
      opacity: 0;

      transform: translateY(1000%);
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 11rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 11rem);

  background-color: var(--black);
  padding: 5.9rem 4.9rem;

  &__links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    :deep(a) {
      $dark: var(--gray);
      $light: white;

      font-size: 3.6rem;
      font-weight: bold;

      transition: 0.25s ease all;

      color: var(--black);

      text-shadow: 1px 1px 0 $dark, -1px -1px 0 $dark, 1px -1px 0 $dark,
        -1px 1px 0 $dark, 1px 1px 0 $dark;

      &:hover {
        color: white;
        text-shadow: 1px 1px 0 $light, -1px -1px 0 $light, 1px -1px 0 $light,
          -1px 1px 0 $light, 1px 1px 0 $light;
      }
    }
  }

  &__buttons {
    display: none;

    @include ltPhone {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      padding-top: 5.1rem;

      :deep(button) {
        width: 95%;

        &:first-child {
          margin-right: auto;
        }

        &:last-child {
          margin-left: auto;
        }
      }

      button {
      }
    }
  }
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(-100%);
}

.menu-enter-active,
.menu-leave-active {
  transition: 0.25s ease all;
}
</style>
