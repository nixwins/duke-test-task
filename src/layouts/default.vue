<template>
  <div class="default-layout">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter },
  name: "Home",
};
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
