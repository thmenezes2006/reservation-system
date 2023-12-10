<template>
  <div id="app">
    <PageHeader />
    <div class="sm:hidden flex justify-center mt-5">
      <img
        class="w-1/2 sm:w-1/4 lg:w-1/5"
        src="../public/img/logo-bpseguradora.svg"
        alt="logo-bem-protege-seguradora"
      />
    </div>
    <router-view />
  </div>
</template>
<script>
import PageHeader from "./components/PageHeader.vue";
export default {
  name: "App",
  components: { PageHeader },
  data() {
    return {};
  },
};
</script>

<style>
</style>
