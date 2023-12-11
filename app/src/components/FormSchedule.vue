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
                v-model="serviceDate"
              ></vs-input>
              <vs-input
                color="rgb(2, 11, 170)"
                size="large"
                class="xl:w-1/3 w-1/2 px-2"
                label="Hora início"
                v-model="serviceStartHour"
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
          :class="`row flex sm:justify-end ${
            isClient ? 'jusfify-between' : 'justify-end'
          } gap-3`"
        >
          <vs-button
            v-if="isClient"
            type="gradient"
            class="sm:w-1/6 w-2/5"
            @click.stop.prevent="resetForm"
            color="warning"
            >Limpar</vs-button
          >
          <div class="sm:hidden w-1/5"></div>
          <vs-button
            type="gradient"
            :class="`${isClient ? 'lg:w-1/6' : 'lg:w-1/4'} w-2/5`"
            @click.stop.prevent="schedulesSteps()"
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
      userMail: null,
      serviceDate: null,
      serviceStartHour: null,
      serviceDuration: null,
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
      formSubmit: {
        idBeneficiario: null,
        idRepresentante: null,
        dateAndHourStart: null,
        dateAndHourFinish: null,
      },
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
  },
  methods: {
    resetForm() {
      this.userMail = null;
      this.serviceStartHour = null;
      this.serviceDate = null;
      this.serviceDuration = null;
      this.modalUserRegistred = false;
      this.isRegistred = false;
      this.isClient = false;
    },
    submit() {
      console.log("tesfajlj");
    },
    meetStartAndFinishTime() {
      const dateWithHour = this.serviceDate + "T" + this.serviceStartHour;
      this.formSubmit.idBeneficiario = this.userSchedule._id;
      this.formSubmit.dateAndHourStart =
        moment(dateWithHour).format("YYYY-MM-DDTHH:mm");
      this.formSubmit.dateAndHourFinish = moment(this.dateAndHourStart)
        .add(this.serviceDuration, "m")
        .format("YYYY-MM-DDTHH:mm");
      console.log(this.dateAndHourStart, this.dateAndHourFinish);
    },

    confirmUser(obj) {
      if (this.$v.$invalid) {
        this.$vs.notify({
          title: "Atenção",
          text: "Por favor, digite o email usado no cadastro!",
          color: "danger",
          position: "top-center",
        });
        return;
      }
      this.$vs.loading();
      this.getUserWhere(obj).then((res) => {
        const { data } = res;
        if (data.length === 0) {
          this.isRegistred = false;
          this.modalUserRegistred = true;
          this.$vs.loading.close();
          return;
        }

        this.userSchedule = data[0];
        if (this.userSchedule.typeUser === "representante") {
          this.isRegistred = true;
          this.modalUserRegistred = true;
          this.$vs.loading.close();
          return;
        }
        this.isClient = true;
        this.$vs.loading.close();
      });
    },

    schedulesSteps() {
      this.isClient
        ? this.meetStartAndFinishTime()
        : this.confirmUser({ userMail: this.userMail });
    },

    async getUserWhere(obj) {
      try {
        const result = await Users.getWhere(obj);
        return result;
      } catch (error) {
        throw new Error(error);
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