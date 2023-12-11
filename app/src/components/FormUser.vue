<template>
  <div>
    <h1>Cadastrar Usuário</h1>
    <div class="flex justify-center">
      <div class="cardForm sm:w-2/3 w-full">
        <div class="row mt-2 pb-3">
          <div class="col sm:flex gap-3 justify-center">
            <h3>Tipo de usuário:</h3>
            <div class="flex gap-3 sm:mt-0 mt-3 justify-center">
              <vs-radio v-model="formSubmit.typeUser" vs-value="beneficiario"
                >Beneficário</vs-radio
              >

              <vs-radio v-model="formSubmit.typeUser" vs-value="representante"
                >Representante</vs-radio
              >
            </div>
          </div>
        </div>
        <div v-if="formSubmit.typeUser" class="row">
          <div class="sm:pt-10 pt-5 sm:flex flex-wrap">
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              :class="`${
                formSubmit.typeUser === 'representante'
                  ? 'sm:w-1/3'
                  : 'sm:w-1/2'
              }  w-full px-2 pb-3`"
              class="sm:w-1/2 w-full px-2 pb-3"
              label-placeholder="Nome Completo"
              v-model="$v.formSubmit.userName.$model"
              :danger="$v.formSubmit.userName.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              v-if="formSubmit.typeUser === 'representante'"
              size="large"
              class="sm:w-1/3 w-full px-2 pb-3"
              label-placeholder="Cpf"
              v-model="$v.formSubmit.userCpf.$model"
              :danger="$v.formSubmit.userCpf.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              :class="`${
                formSubmit.typeUser === 'representante'
                  ? 'sm:w-1/3'
                  : 'sm:w-1/2'
              }  w-full px-2 pb-3`"
              type="email"
              label-placeholder="Email"
              v-model="$v.formSubmit.userMail.$model"
              :danger="$v.formSubmit.userMail.$error"
              danger-text="exemplo@bemprotege.com.br"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              class="sm:w-2/5 w-full px-2 pb-3"
              label-placeholder="Endereço"
              v-model="$v.formSubmit.userAddress.$model"
              :danger="$v.formSubmit.userAddress.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              type="number"
              class="sm:w-1/5 w-full px-2 pb-3"
              label-placeholder="Número"
              v-model="$v.formSubmit.userAddressNumber.$model"
              :danger="$v.formSubmit.userAddressNumber.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              class="sm:w-2/5 w-full px-2 pb-3"
              label-placeholder="Bairro"
              v-model="$v.formSubmit.userAddressNeighborhood.$model"
              :danger="$v.formSubmit.userAddressNeighborhood.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              class="sm:w-1/3 w-full px-2 pb-3"
              label-placeholder="Cidade"
              v-model="$v.formSubmit.userAddressCity.$model"
              :danger="$v.formSubmit.userAddressCity.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              class="sm:w-1/6 w-full px-2 pb-3"
              label-placeholder="Estado"
              v-model="$v.formSubmit.userAddressState.$model"
              :danger="$v.formSubmit.userAddressState.$error"
              danger-text="Informação obrigatória"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              v-if="formSubmit.typeUser === 'representante'"
              size="large"
              type="password"
              class="sm:w-1/4 w-full px-2 pb-3"
              label-placeholder="Senha"
              v-model="$v.formSubmit.userPassword.$model"
              :danger="$v.formSubmit.userPassword.$error"
              danger-text="Mínimo de 8 caractéres"
            ></vs-input>
            <vs-input
              color="rgb(2, 11, 170)"
              v-if="formSubmit.typeUser === 'representante'"
              size="large"
              type="password"
              class="sm:w-1/4 w-full px-2 pb-3"
              label-placeholder="Confirmação de Senha"
              v-model="$v.formSubmit.confirmUserPassword.$model"
              :danger="$v.formSubmit.confirmUserPassword.$error"
              danger-text="As senhas devem ser iguais"
            ></vs-input>
          </div>
        </div>
        <div
          v-if="formSubmit.typeUser"
          class="row pt-7 flex sm:justify-end jusfify-between gap-3"
        >
          <vs-button
            type="gradient"
            class="xl:w-1/12 sm:w-1/6 w-2/5"
            @click.stop.prevent="resetForm"
            color="warning"
            >Limpar</vs-button
          >
          <div class="sm:hidden w-1/5"></div>
          <vs-button
            type="gradient"
            class="xl:w-1/12 sm:w-1/6 w-2/5"
            @click="submitForm"
            color="primary"
            >Cadastrar</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../routes/index";
import User from "../services/Users";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formSubmit: {
        typeUser: null,
        userName: null,
        userMail: null,
        userCpf: null,
        userAddress: null,
        userAddressNumber: null,
        userAddressNeighborhood: null,
        userAddressCity: null,
        userAddressState: null,
        userPassword: null,
        confirmUserPassword: null,
      },
    };
  },

  validations() {
    if (this.formSubmit.typeUser !== "representante") {
      return {
        formSubmit: {
          userName: {
            required,
            minLength: minLength(5),
          },
          userMail: {
            required,
            email,
          },
          userAddress: {
            required,
            minLength: minLength(5),
          },
          userAddressNumber: {
            required,
          },
          userAddressNeighborhood: {
            required,
          },
          userAddressCity: {
            required,
          },
          userAddressState: {
            required,
          },
        },
      };
    } else {
      return {
        formSubmit: {
          userName: {
            required,
            minLength: minLength(5),
          },
          userMail: {
            required,
            email,
          },
          userAddress: {
            required,
            minLength: minLength(5),
          },
          userCpf: {
            required,
            minLength: minLength(11),
            maxLength: maxLength(14),
          },
          userAddressNumber: {
            required,
          },
          userAddressNeighborhood: {
            required,
          },
          userAddressCity: {
            required,
          },
          userAddressState: {
            required,
          },
          userPassword: {
            required,
            minLength: minLength(8),
          },
          confirmUserPassword: {
            required,
            sameAsPassword: sameAs("userPassword"),
          },
        },
      };
    }
  },

  methods: {
    resetForm() {
      this.formSubmit.userName = null;
      this.formSubmit.userMail = null;
      this.formSubmit.userAddress = null;
      this.formSubmit.userAddressNumber = null;
      this.formSubmit.userAddressNeighborhood = null;
      this.formSubmit.userAddressCity = null;
      this.formSubmit.userAddressState = null;
      this.formSubmit.userPassword = null;
      this.formSubmit.confirmUserPassword = null;
    },
    async submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$vs.notify({
          title: "Atenção",
          text: "Por favor, preencha todos os campos para continuar!",
          color: "danger",
          position: "top-center",
        });
        return;
      }
      this.$vs.loading();
      try {
        this.formSubmit.userAddressNumber = Number(
          this.formSubmit.userAddressNumber
        );
        await User.create(this.formSubmit);
        this.$vs.loading.close();
        this.$vs.notify({
          title: "Atenção",
          text: "Usuário Cadastrado com Sucesso",
          color: "success",
          position: "top-center",
        });
        router.push("/home");
      } catch (e) {
        this.$vs.loading.close();
        this.$vs.notify({
          title: "Atenção",
          text: "Usuário já existe no sistema",
          color: "danger",
          position: "top-center",
        });
      }
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