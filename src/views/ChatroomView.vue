<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>






<script setup lang="ts">
import { watch } from "vue";
import { useRouter } from "vue-router";
import NavBar from "../components/NavBar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "../composables/getUser";

// composables
const { user } = getUser();

//router
const router = useRouter();

// watcher
watch(user, () => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>







<style lang="scss">
</style>