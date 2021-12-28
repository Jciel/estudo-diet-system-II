<template>
  <section class="user-header">
      <div class="profiule-photo-container">
        <img :src="user.profilePhoto.toString()" />
      </div>
      <div class="user-name">
        <strong>{{ user.name }}</strong>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "./Types";

export default defineComponent({
  name: "UserHeader",
  
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },

  setup(props) {

    return {
      user: props.user
    }
  }
})
</script>

<style lang="scss" scoped>
  .user-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    background-color: #FFFFFF;
    border-radius: 15px;
    padding: 20px 0;

    .profiule-photo-container {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      align-self: center;
      margin-bottom: 5px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .user-name {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>