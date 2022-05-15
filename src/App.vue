<template>
  <div>
    <HeaderNav></HeaderNav>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style></style>
