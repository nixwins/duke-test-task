<template>
  <div class="search-panel flex-row">
    <input
      class="search-panel__input input"
      type="text"
      placeholder="Поиск по названию картины"
    />
    <v-button class="search-panel__button button-primary">Найти</v-button>
  </div>
</template>

<script>
import vButton from "@/components/ui/VButton.vue";
export default {
  components: { vButton },
};
</script>

<style lang="scss" scoped>
.search-panel {
  width: 100%;
  max-width: 420px;
  &__input {
    max-width: 294px;
  }
  &__button {
    max-width: 122px;
  }
}
</style>
