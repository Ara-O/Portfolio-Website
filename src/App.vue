<template>
  <navbar></navbar>
  <router-view />
</template>

<script>
import nav from "./components/navbar.vue";
export default {
  components: { navbar: nav },
};
</script>
