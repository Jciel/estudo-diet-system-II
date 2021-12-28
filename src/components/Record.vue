<template>
  <section class="record">

    <h4 class="title-register">{{ title }}</h4>

    <div class="date-register">Registrado {{ date }}</div>

    <div class="description-record">
      {{ description }}
    </div>

    <div class="img-record">
      <img :src="image" />
    </div>

    <div class="comments-container">
      <div class="new-comment-container">
        <textarea v-model="newComment.comment" class="new-comment" placeholder="Comentário"></textarea>
        <button @click="addComment(idRegister)" class="send-new-comment" type="button">
          <img src="/src/assets/btn-send-comment.svg">
        </button>
      </div>

      <div class="list-comments">
        <div
          v-for="comment in comments"
          :key="comment.id">
          {{ comment.comment }}
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref } from "vue";
import { Register, CommentRegister } from "./Types"
import { v4 as uuidv4 } from 'uuid';
import { useStore } from "vuex";

export default defineComponent({
  name: "Record",

  props: {
    record: {
      type: Object
    }
  },

  setup(props) {
    const newComment = ref<CommentRegister>({
      id: uuidv4(),
      comment: ''
    })
    const { description, image, title, date, comments, id } = toRefs(props.record) as Register
    const store = useStore()

    const dateFormat = props.record.date.toLocaleString('pt-BR')

    const addComment = (idRegister: Number) => {
      store.dispatch('saveComment', {idRegister: idRegister, comment: newComment.value})
      newComment.value = {
        id: uuidv4(),
        comment: ''
      }
    }

    return {
      description: description,
      image: image,
      title: title,
      date: dateFormat,
      comments: comments,
      idRegister: id,
      newComment: newComment,
      addComment: addComment
    }
  }
})
</script>

<style lang="scss" scoped>
  .record {
    max-width: 555px;
    background-color: #FFFFFF;
    padding: 20px 0;
    border-radius: 15px;

    .title-register {
      margin-bottom: 10px;
    }

    .date-register {
      margin-bottom: 30px;
    }

    .description-record {
      background-color: var(--backgroud-text);
      border-radius: 10px;
      box-sizing: border-box;
      padding: 15px;
      text-align: left;
      margin-bottom: 20px;
      max-width: 825px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
    }

    .img-record {
      img {
        display: block;
        width: 100%;
      }
    }

    .comments-container {
      padding: 20px 0 0 0;

      .new-comment-container {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 10px 20px;

        .new-comment {
          width: 100%;
          border: 1px solid rgba(119, 119, 119, 0.3);
          box-sizing: border-box;
          border-radius: 5px;
          padding: 10px 15px;
          outline: none;
          font-family: Montserrat, sans-serif;
          color: var(--text-color);
          margin-right: 10px;
        }

        .send-new-comment {
          padding: 5px;
          background: #47C98E;
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid #47C98E;
        }
      }
    }

    .list-comments {
      display: flex;
      flex-direction: column;
      padding: 0 10px;

      div {
        background-color: var(--backgroud-text);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 5px;
        margin-bottom: 10px;
        text-align: left;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
</style>
