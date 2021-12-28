<template>
  <section class="home-page-container">
    <div class="calendar-container">
      <date-picker v-model="dateCalendar" />
      <router-link class="link-new-register" :to="{ name: 'NewRegister', params: { dateRegister: dateCalendar }}">Novo</router-link>
    </div>
    <div class="records-container">
      <user-header :user="user" />

      <div class="record-list">
        <record
            class="record-item"
            v-for="register in records"
            :key="register.id"
            :record="register"></record>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import Record from "../components/Record.vue";
import UserHeader from "../components/UserHeader.vue";
import { DatePicker } from "v-calendar";

export default defineComponent({
  name: "Home",

  components: {
    "record": Record,
    "date-picker": DatePicker,
    "user-header": UserHeader
  },

  setup() {
    const store = useStore()

    const dateCalendar = ref(new Date())

    const user = computed(() => store.getters.user)
    const recordsFiltered = computed(() => {
      return store.getters.recordsByDate(dateCalendar.value)
    })

    return {
      records: recordsFiltered,
      user: user,
      dateCalendar: dateCalendar
    }
  }
})
</script>

<style lang="scss" scoped>
  .home-page-container {
    display: flex;
    margin: auto;
    justify-content: center;
    padding: 60px 0;

    .calendar-container {
      margin-right: 55px;
      display: flex;
      flex-direction: column;

      .link-new-register {
        margin-top: 10px;
        text-decoration: none;
        color: var(--text-color);
        background-color: #47C98E;
        border-radius: 5px;
        padding: 5px 30px;
        width: fit-content;
        align-self: center;
      }
    }

    .records-container {
      width: 555px;

      .record-list {
        .record-item {
          margin-bottom: 20px;
        }

      }
    }
  }
</style>