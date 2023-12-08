<template>
  <div class="w-full mt-5 text-center">
    <div>
      <h1 class="mt-3">Sistema de Agendamentos</h1>
      <div class="text-left">
        <span>Email</span>
        <vs-input
          v-model="formLogin.email"
          placeholder="exemplo@bemprotege.com.br"
          icon-no-border
          icon="person"
          type="email"
        ></vs-input>
        <span>Senha</span>
        <vs-input
          v-model="formLogin.password"
          placeholder="*******"
          icon-no-border
          icon="lock"
          type="email"
        ></vs-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  components: {},
  methods: {},
};
</script>


