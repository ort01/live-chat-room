<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Log in</button>
  </form>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";

const email = ref<string>("");
const password = ref<string | number>("");

const handleSubmit = () => {
  console.log(email.value, password.value);
};
</script>
  
  
  <style lang="scss">
</style>