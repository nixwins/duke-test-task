<template>
  <nav class="nav flex-row">
    <router-link
      v-for="{ url, label, tag } in items"
      :key="url"
      to="url"
      :tag="tag"
      class="nav__item"
    >
      {{ label }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: "Каталог", url: "/catalog" },
      { label: "Доставка", url: "/delivery" },
      { label: "Оплата", url: "/payments" },
      { label: "Контакты", url: "/contacts" },
      { label: "О галерее", url: "/about-gallery" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.nav {
  align-items: center;
  flex-grow: 2;
  &__item {
    padding-left: 48px;
  }
}
</style>
