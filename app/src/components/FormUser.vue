<template>
  <div>
    <h1>Cadastrar Usuário</h1>
    <div class="flex justify-center">
      <div class="cardForm sm:w-2/3 w-full">
        <div class="row mt-2 pb-3">
          <div class="col sm:flex gap-3 justify-center">
            <h3>Tipo de usuário:</h3>
            <div class="flex gap-3 sm:mt-0 mt-3 justify-center">
              <vs-radio v-model="typeUser" vs-value="beneficiario"
                >Beneficário</vs-radio
              >

              <vs-radio v-model="typeUser" vs-value="consultor"
                >Consultor</vs-radio
              >
            </div>
          </div>
        </div>
        <div v-if="typeUser" class="row">
          <div class="sm:pt-10 pt-5 sm:flex flex-wrap">
            <vs-input
              size="large"
              :class="`${
                typeUser === 'consultor' ? 'sm:w-1/3' : 'sm:w-1/2'
              }  w-full px-2 pb-3`"
              class="sm:w-1/2 w-full px-2 pb-3"
              label-placeholder="Nome Completo"
              v-model="userName"
            ></vs-input>
            <vs-input
              v-if="typeUser === 'consultor'"
              size="large"
              class="sm:w-1/3 w-full px-2 pb-3"
              label-placeholder="Cpf"
              v-model="userCpf"
            ></vs-input>
            <vs-input
              size="large"
              :class="`${
                typeUser === 'consultor' ? 'sm:w-1/3' : 'sm:w-1/2'
              }  w-full px-2 pb-3`"
              type="email"
              label-placeholder="Email"
              v-model="userMail"
            ></vs-input>
            <vs-input
              size="large"
              class="sm:w-2/5 w-full px-2 pb-3"
              label-placeholder="Endereço"
              v-model="userAddress"
            ></vs-input>
            <vs-input
              size="large"
              type="number"
              class="sm:w-1/5 w-full px-2 pb-3"
              label-placeholder="Número"
              v-model="userAddressNumber"
            ></vs-input>
            <vs-input
              size="large"
              class="sm:w-2/5 w-full px-2 pb-3"
              label-placeholder="Bairro"
              v-model="userAddressNeighborhood"
            ></vs-input>
            <vs-input
              size="large"
              class="sm:w-1/3 w-full px-2 pb-3"
              label-placeholder="Cidade"
              v-model="userAddressCity"
            ></vs-input>
            <vs-input
              size="large"
              class="sm:w-1/6 w-full px-2 pb-3"
              label-placeholder="Estado"
              v-model="userAddressState"
            ></vs-input>
            <vs-input
              v-if="typeUser === 'consultor'"
              size="large"
              type="password"
              class="sm:w-1/4 w-full px-2 pb-3"
              label-placeholder="Senha"
              v-model="userPassword"
            ></vs-input>
            <vs-input
              v-if="typeUser === 'consultor'"
              size="large"
              type="password"
              class="sm:w-1/4 w-full px-2 pb-3"
              label-placeholder="Confirmação de Senha"
              v-model="confirmUserPassword"
            ></vs-input>
          </div>
        </div>
        <div
          v-if="typeUser"
          class="row pt-7 flex sm:justify-end jusfify-between gap-3"
        >
          <vs-button
            class="sm:w-1/6 w-2/5"
            @click.stop.prevent="resetForm"
            color="warning"
            >Limpar</vs-button
          >
          <div class="sm:hidden w-1/5"></div>
          <vs-button class="sm:w-1/6 w-2/5" color="success"
            >Cadastrar</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeUser: null,
      userName: "",
      userMail: "",
      userAddress: "",
      userAddressNumber: "",
      userAddressNeighborhood: "",
      userAddressCity: "",
      userAddressState: "",
      userPassword: "",
      confirmUserPassword: "",
    };
  },
  methods: {
    resetForm() {
      (this.userName = ""),
        (this.userMail = ""),
        (this.userAddress = ""),
        (this.userAddressNumber = ""),
        (this.userAddressNeighborhood = ""),
        (this.userAddressCity = ""),
        (this.userAddressState = ""),
        (this.userPassword = "");
      this.confirmUserPassword = "";
    },
  },
};
</script>

<style scoped>
.cardForm {
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgb(207, 204, 204);
}
</style>