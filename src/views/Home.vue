<template>
  <div class="content">
    <div class="home">
      <h1>Картины эпохи Возрождения</h1>
      <product-list :items="getProducts" />
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/products/ProductsList.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: { ProductList },

  mounted() {
    if (!localStorage.key("products") || this.products.length === 0) {
      this.saveProductsLocal(this.mockData);
    }
  },

  computed: {
    ...mapGetters(["getProducts"]),
    ...mapState(["products"]),
    mockData() {
      return [
        {
          id: 1,
          image_url: "/products/1.jpg",
          title: "«Рождение Венеры» Сандро Боттичелли",
          price: 1000000,
          price_old: 2000000,
          is_sold: false,
        },
        {
          id: 2,
          image_url: "/products/2.jpg",
          title: "«Тайная вечеря»  Леонардо да Винчи",
          price: 3000000,
          is_sold: false,
        },
        {
          id: 3,
          image_url: "/products/3.jpg",
          title: "«Сотворение Адама» Микеланджело",
          price: 6000000,
          price_old: 5000000,
          is_sold: false,
        },
        {
          id: 4,
          image_url: "/products/4.jpg",
          title: "«Урок анатомии»  Рембрандт",
          price: 0,
          price_old: 0,
          is_sold: true,
        },
      ];
    },
  },
  methods: {
    ...mapActions(["saveProductsLocal"]),
  },
};
</script>
<style scoped>
.home {
  margin-bottom: 320px;
}
</style>
