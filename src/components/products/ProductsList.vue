<template>
  <div class="product-list flex-row">
    <product-item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",
  components: { ProductItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
