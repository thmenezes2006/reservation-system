<template>
  <div>
    <h1>Sistema de Agendamentos</h1>
    <div class="flex justify-center">
      <div class="cardForm sm:w-2/3 w-full">
        <div class="row mt-2 pb-3">
          <div class="sm:pt-10 pt-5 sm:flex flex-wrap">
            <vs-input
              color="rgb(2, 11, 170)"
              size="large"
              type="email"
              class="md:w-1/2 w-full px-2 pb-3"
              label-placeholder="Email"
              v-model="$v.userMail.$model"
              :danger="$v.userMail.$error"
              danger-text="exemplo@bemprotege.com.br"
            ></vs-input>
            <div class="flex flex-wrap md:w-1/2 w-full px-2 pb-3">
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
        <div class="row flex sm:justify-end jusfify-between gap-3">
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
  </div>
</template>

<script>
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
      (this.serviceStartHour = ""),
        (this.serviceDate = ""),
        (this.serviceDuration = "");
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