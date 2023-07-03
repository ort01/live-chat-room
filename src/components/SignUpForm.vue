<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const displayName = ref<string>("");
const email = ref<string>("");
const password = ref<string | number>("");

const handleSubmit = () => {
  console.log(displayName.value, email.value, password.value);
};
</script>


<style lang="scss">
</style>