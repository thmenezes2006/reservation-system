<template>
  <div>
    <h1>Sistema de Agendamentos</h1>
    <div class="flex justify-center">
      <div :class="`cardForm ${isClient ? 'sm:w-2/3' : 'sm:w-1/3'} w-full`">
        <div class="row mt-2 pb-3">
          <div class="sm:pt-10 pt-5 sm:flex flex-wrap">
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              type="email"
              :class="`${isClient ? 'md:w-1/2' : ''} w-full px-2 pb-3`"
              label-placeholder="Email"
              v-model="$v.userMail.$model"
              :disabled="isClient"
              :danger="$v.userMail.$error"
              danger-text="exemplo@bemprotege.com.br"
              @change="confirmUser({ userMail })"
            ></vs-input>
            <div
              v-if="isClient"
              class="flex flex-wrap md:w-1/2 w-full px-2 pb-3"
            >
              <vs-input
                color="rgb(2, 11, 170)"
                size="large"
                type="date"
                class="xl:w-1/3 w-full px-2 mb-4"
                label="Data do atendimento"
                v-model="$v.serviceDate.$model"
              ></vs-input>
              <vs-input
                color="rgb(2, 11, 170)"
                size="large"
                class="xl:w-1/3 w-1/2 px-2"
                label="Hora início"
                v-model="$v.serviceStartHour.$model"
                v-mask="'##:##'"
                placeholder="HH:mm"
              ></vs-input>

              <vs-select
                class="xl:w-1/3 w-1/2 px-2"
                label="Tempo de duração"
                v-model="serviceDuration"
              >
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in arrayServiceDuration"
                />
              </vs-select>
            </div>
          </div>
        </div>
        <div class="row"></div>
        <div
          v-if="isClient"
          class="row flex sm:justify-end jusfify-between gap-3"
        >
          <vs-button
            type="gradient"
            class="sm:w-1/6 w-2/5"
            @click.stop.prevent="resetForm"
            color="warning"
            >Limpar</vs-button
          >
          <div class="sm:hidden w-1/5"></div>
          <vs-button
            type="gradient"
            class="sm:w-1/6 w-2/5"
            @click.stop.prevent="meetStartAndFinishTime"
            color="primary"
            >Continuar</vs-button
          >
        </div>
      </div>
    </div>
    <vs-alert
      :active.sync="modalUserRegistred"
      :color="`${isRegistred ? 'warning' : 'primary'}`"
      close-icon="close"
      class="p-3"
    >
      <div class="my-3" v-if="isRegistred">
        <h3 class="mb-3">
          Olá {{ userSchedule.userName.toUpperCase() }}, agendamento não
          permitido, ao clicar em "Ir" direcionaremos para o ambiente exclusivo
          para representantes!
        </h3>
        <vs-button
          class="my-3 px-10 text-right"
          color="warning"
          type="gradient"
          to="/login"
          >Ir</vs-button
        >
      </div>
      <div class="my-3" v-else>
        <h3 class="mb-3">
          Olá, seja bem-vindo, você ainda não tem cadastro, para realiza-lo
          clique em "Ok"!
        </h3>
        <vs-button class="my-3 px-10" type="gradient" to="/cadastro"
          >Ok</vs-button
        >
      </div>
    </vs-alert>
  </div>
</template>

<script>
import Users from "../services/Users";
import moment from "moment";
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      userMail: "",
      serviceDate: "",
      serviceStartHour: "",
      serviceDuration: "",
      arrayServiceDuration: [
        {
          text: "30 minutos",
          value: "30",
        },
        {
          text: "1 hora",
          value: "60",
        },
        {
          text: "1h e 30min",
          value: "90",
        },
        {
          text: "2 horas",
          value: "120",
        },
      ],
      dateAndHourStart: "",
      dateAndHourFinish: "",
      modalUserRegistred: false,
      isRegistred: false,
      isClient: false,
      userSchedule: {
        typeUser: null,
        updatedAt: null,
        userAddress: null,
        userAddressCity: null,
        userAddressNeighborhood: null,
        userAddressNumber: null,
        userAddressState: null,
        userCpf: null,
        userMail: null,
        userName: null,
        _id: null,
      },
    };
  },
  validations: {
    userMail: {
      required,
      email,
    },
    serviceDate: {
      required,
    },

    serviceStartHour: {
      required,
    },
    serviceDuration: {
      required,
    },
  },
  methods: {
    resetForm() {
      this.userMail = "";
      this.serviceStartHour = "";
      this.serviceDate = "";
      this.serviceDuration = "";
      this.modalUserRegistred = false;
      this.isRegistred = false;
      this.isClient = false;
    },
    submit() {
      console.log("tesfajlj");
    },
    meetStartAndFinishTime() {
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
      const dateWithHour = this.serviceDate + "T" + this.serviceStartHour;
      this.dateAndHourStart = moment(dateWithHour).format("YYYY-MM-DDTHH:mm");
      this.dateAndHourFinish = moment(this.dateAndHourStart)
        .add(this.serviceDuration, "m")
        .format("YYYY-MM-DDTHH:mm");
      console.log(
        "depoisMoment",
        this.dateAndHourStart,
        this.dateAndHourFinish
      );
    },

    preencheForm(dados) {
      this.userSchedule = dados;
    },

    confirmUser(obj) {
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.$vs.notify({
      //     title: "Atenção",
      //     text: "Por favor, preencha todos os campos corretamente para continuar!",
      //     color: "danger",
      //     position: "top-center",
      //   });
      //   return;
      // }

      this.getUserWhere(obj).then((res) => {
        const { data } = res;
        if (data.length === 0) {
          this.isRegistred = false;
          this.modalUserRegistred = true;
          return;
        }
        this.preencheForm(data[0]);
        if (this.userSchedule.typeUser === "representante") {
          this.isRegistred = true;
          this.modalUserRegistred = true;
          return;
        }
        this.isClient = true;
      });
    },

    async getUserWhere(obj) {
      try {
        const result = await Users.getWhere(obj);
        return result;
      } catch (error) {
        console.log(error);
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
<style>
.vs-select--input {
  height: 3rem;
}
</style>