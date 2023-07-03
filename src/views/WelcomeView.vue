<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Log In</h2>
      <LoginForm />
      <p>
        No account yet? <span @click="showLogin = false">Sign Up</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignUpForm />
      <p>
        Already registered?
        <span @click="showLogin = true">Log In</span> instead
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";

const showLogin = ref<boolean>(true);
// const showSignUp = ref<boolean>(false);
</script>


<style lang="scss">
.welcome {
  text-align: center;
  padding: 20px 0;

  & form {
    width: 300px;
    margin: 20px auto;
  }

  & label {
    display: block;
    margin: 20px 0 10px;
  }

  & input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  & span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  & button {
    margin: 20px auto;
  }
}
</style>