<template>
  <div class="product-list__item flex-col" :class="{ 'is-sold': item.is_sold }">
    <div class="image__wrapper">
      <img
        :src="getImage(item.image_url)"
        alt=""
        class="product-list__item-image"
      />
    </div>
    <h2 class="product-list__item-title">{{ item.title }}</h2>
    <div v-if="!item.is_sold" class="product-list__actions flex-row">
      <div class="price-wrapper flex-col">
        <span v-if="item.price_old" class="price-old"
          >{{ item.price_old }}$</span
        >
        <span class="price">{{ item.price }}$</span>
      </div>
      <v-button
        @click="addProduct(item.id)"
        :isLoading="isLoading && item.id === clickedProductId"
        class="button-primary"
        :class="{ 'button-added': item.is_exists_basket }"
        :disabled="item.is_exists_basket"
      >
        <!-- <span v-if="isLoading" class="loader"></span> -->
        {{ item.is_exists_basket ? "В корзине" : "Купить" }}</v-button
      >
    </div>
    <h3 v-else class="product-sold--text">Продана на аукционе</h3>
  </div>
</template>

<script>
import vButton from "@/components/ui/VButton.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { vButton },
  name: "ProductItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    clickedProductId: null,
  }),
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    ...mapActions(["addToBakset"]),
    addProduct(id) {
      this.addToBakset(id);

      this.clickedProductId = id;
    },
    getImage(path) {
      return require("@/assets/images" + path);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list__item {
  width: 100%;
  max-width: 280px;
  background-color: #e5e5e5;
  border: 1px solid #e1e1e1;
  &:not(:last-child) {
    margin-right: 32px;
  }
}
.product-list__actions,
.product-list__item-title,
.product-sold--text {
  padding: 20px 24px 24px 24px;
}

.price-wrapper {
  flex-grow: 2;
  justify-content: center;
}
.price-old,
.price {
  font-weight: 700;
}
.price-old {
  text-decoration: line-through;
  color: #a0a0a0;
}
.is-sold {
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
