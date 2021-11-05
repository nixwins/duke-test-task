<template>
  <footer class="app-footer flex-row">
    <div class="content">
      <v-logo />
      <app-navigation />
      <div class="app-fotter__contacts flex-row">
        <a class="app-footer__phone" href="tel:+74955555555"
          >+7 (495) 555-55-55</a
        >
        <address class="app-footer__address">
          г. Алматы, ул. Фурманова, 24
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
import VLogo from "@/components/ui/VLogo.vue";
import AppNavigation from "@/components/AppNavigation.vue";

export default {
  components: { VLogo, AppNavigation },
};
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: #eceaea;
  flex-shrink: 0;
  width: 100%;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #e1e1e1;
  .content {
    justify-content: space-between;
  }
  &__phone,
  &__address {
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    background-size: 14px 14px;
    background-repeat: no-repeat;
    background-position: center left;
    font-family: "Merriweather", serif;
    font-size: 14px;
    font-style: normal;
  }
  &__phone {
    background-image: url("~@/assets/images/icons/phone.svg");
    margin-right: 50px;
  }
  &__address {
    background-image: url("~@/assets/images/icons/address.svg");
  }
}
</style>
