<template>
  <header class="app-header flex-row">
    <div class="content">
      <v-logo />
      <app-navigation />
      <search-panel />
    </div>
  </header>
</template>

<script>
import VLogo from "@/components/ui/VLogo.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import SearchPanel from "@/components/SearchPanel.vue";

export default {
  components: { VLogo, AppNavigation, SearchPanel },
};
</script>

<style lang="scss" scoped>
.app-header {
  flex-shrink: 0;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 45px;
  padding: 24px 0;
  border-bottom: 1px solid #e1e1e1;
  .content {
    justify-content: space-between;
  }
}
</style>
