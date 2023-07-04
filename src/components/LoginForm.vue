<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input
      type="password"
      required
      placeholder="password"
      v-model="password"
      autocomplete="on"
    />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import useLogin from "../composables/useLogin.js";

// Data
const email = ref<string>("");
const password = ref<string | number>("");

// Composables
const { error, login } = useLogin();

// Functions
const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    console.log("user logged in");
  }
};
</script>
  
  
  <style lang="scss">
</style>