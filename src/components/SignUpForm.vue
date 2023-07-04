<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input
      type="password"
      required
      placeholder="password"
      v-model="password"
      autocomplete="on"
    />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useSignUp from "../composables/useSignUp";

// data
const displayName = ref<string>("");
const email = ref<string>("");
const password = ref<string | number>("");

// composables
const { error, signUp } = useSignUp();

// functions
const handleSubmit = async () => {
  await signUp(email.value, password.value, displayName.value);
  console.log("user signed up");
};
</script>


<style lang="scss">
</style>