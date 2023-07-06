<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="chat-window__messages" v-if="documents">
      <div
        class="chat-window__messages--single"
        v-for="doc in documents"
        :key="doc.id"
      >
        <span class="created-at">{{ doc.createdAt.toDate() }}</span>
        <span class="name">{{ doc.name }}:</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getCollection from "../composables/getCollection";

//data

//composables
const { error, documents } = getCollection("messages");
</script>


<style lang="scss">
.chat-window {
  background: #f1f1f1;
  padding: 30px 20px;

  &__messages {
    max-height: 400px;
    overflow: auto;

    &--single {
      margin: 18px 0;

      & .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }

      & .name {
        font-weight: bold;
        margin-right: 6px;
        color: #328575;
      }

      & .message {
        font-weight: 100;
      }
    }
  }
}
</style>