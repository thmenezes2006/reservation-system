<template>
  <div class="lg:h-20 h-16 flex sm:justify-between justify-end" id="header">
    <img
      class="lg:h-20 h-16 p-1 sm:block hidden"
      src="../../public/img/logo-bpseguradora.svg"
      alt="logo-bem-protege-seguradora"
    />
    <div class="sm:flex gap-3 m-4 px-3 items-center hidden">
      <div :key="index" v-for="(item, index) in routerPaths">
        <vs-button
          type="gradient"
          class="lg:py-3 py-2 text-base"
          :to="item.path"
          >{{ item.title }}</vs-button
        >
      </div>
    </div>
    <vs-dropdown class="mr-2 sm:hidden" vs-trigger-click>
      <vs-button class="btn-drop" type="flat" icon="menu"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item
          class="text-2xl py-3"
          :key="index"
          v-for="(item, index) in routerPaths"
          :to="item.path"
        >
          {{ item.title }}
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerPaths: [
        {
          title: "Home",
          path: "/home",
        },
        {
          title: "Cadastro",
          path: "/cadastro",
        },
        {
          title: "Área do Representante",
          path: "/login",
        },
      ],
    };
  },
};
</script>
<style >
#header {
  background: rgb(242, 240, 247);
}
.vs-dropdown--item .vs-dropdown--item-link {
  width: 60vw !important;
  text-align: center;
}
</style>

