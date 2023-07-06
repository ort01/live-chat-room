<template>
  <form class="chat-form">
    <textarea
      class="chat-form__text"
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";

//data
const message = ref<string>("");

//composables
const { user } = getUser();
const { error, addDoc } = useCollection("messages");

//functions
const handleSubmit = async () => {
  const chat: object = {
    name: user.value?.displayName,
    message: message.value,
    createdAt: timestamp(),
  };

  await addDoc(chat);
  if (!error.value) {
    message.value = "";
  }
};
</script>


<style lang="scss">
.chat-form {
  margin: 10px;

  &__text {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: vertical;
    min-height: 50px;
    max-height: 500px;
  }
}
</style>