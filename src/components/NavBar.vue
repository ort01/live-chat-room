<template>
  <nav class="nav-bar" v-if="user">
    <div>
      <p>Hello - {{ user.displayName }}</p>
      <p class="email">Currently logged in as - {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Log Out</button>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

// composables
const { error, logout } = useLogout();
const { user } = getUser();

//router
const router = useRouter();

//functions
const handleLogout = async () => {
  await logout();
  if (!error.value) {
    router.push({ name: "Welcome" });
  }
};
</script>


<style lang="scss">
.nav-bar {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;

    &.email {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>