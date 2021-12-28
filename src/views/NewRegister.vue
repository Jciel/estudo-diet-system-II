<template>
  <section class="new-register-page">

    <span class="date-register"><strong>Data: {{ dateRegister.toLocaleDateString('pt-BR') }}</strong></span>
    <input v-model="register.title" class="title-register" type="text" placeholder="Titulo do registro" />

    <div class="description-container">
      <textarea v-model="register.description" class="description-register" placeholder="Descrição do registro" />
    </div>

    <div class="image-input-container">
      <upload-images
          :max="1"
          uploadMsg="Selecione ou arraste a imagem para cá"
          maxError="Uma imagem apenas"
          @changed="handleImages" />
    </div>

    <button @click="sendRegister" type="button" class="register-send">Salvar</button>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, toRefs} from "vue";
import UploadImages from "vue-upload-drop-images"
import {Register} from "../components/Types";
import { v4 as uuidv4 } from 'uuid';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NewRegister",

  components: {
    "upload-images": UploadImages
  },

  props: {
    dateRegister: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup(props) {
    const { dateRegister } = toRefs(props)
    const router = useRouter()
    const store = useStore()
    const register = ref<Register>({
      id: uuidv4(),
      title: '',
      date: new Date(dateRegister.value),
      image: '',
      description: '',
      comments: []
    })

    const handleImages = (files: Array<File>) => register.value.image = window.URL.createObjectURL(files[0])

    const sendRegister = () => {
      store.dispatch('saveNewRegister', register.value).then(res => {
        router.push("/")
      })
    }

    return {
      handleImages: handleImages,
      sendRegister: sendRegister,
      register: register,
      dateRegister: new Date(dateRegister.value),
    }
  }
})
</script>

<style lang="scss" scoped>
  .new-register-page {
    width: 850px;
    margin: auto;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .date-register {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .title-register {
      width: 90%;
      background: rgba(255, 255, 255, 0.65);
      border: 1px solid rgba(119, 119, 119, 0.3);
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px 15px;
      outline: none;
      margin-bottom: 20px;
      color: var(--text-color);
      font-family: Montserrat, sans-serif;
    }

    .description-container {
      background-color: var(--backgroud-text);
      width: 90%;
      margin-bottom: 30px;

      .description-register {
        width: 100%;
        border: 1px solid rgba(119, 119, 119, 0.3);
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 15px;
        outline: none;
        font-family: Montserrat, sans-serif;
        color: var(--text-color);
      }
    }

    .image-input-container {
      margin-bottom: 30px;

      .container {
        width: auto;
      }
    }

    .register-send {
      background: #47C98E;
      border: 1px solid #47C98E;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
</style>