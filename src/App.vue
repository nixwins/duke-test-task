<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";

export default {
  name: "App",
  components: { DefaultLayout },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? `${this.$route.meta.layout}-layout`
        : "default-layout";
    },
  },
  mounted() {
    console.log(this.layout);
  },
};
</script>
<style lang="scss"></style>
