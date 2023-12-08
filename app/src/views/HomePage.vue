<template>
  <div class="w-full mt-5 text-center">
    <div>
      <img
        class="w-1/2 sm:w-1/4 lg:w-1/5"
        src="../../public/img/logo-bpseguradora.svg"
        alt="logo-bem-protege-seguradora"
      />
    </div>

    <FormUser />
  </div>
</template>

<script>
import FormUser from "@/components/FormUser.vue";
export default {
  data() {
    return {};
  },
  components: { FormUser },
  methods: {},
};
</script>
