<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="chat-window__messages" v-if="documents">
      <div
        class="chat-window__messages--single"
        v-for="doc in formattedDocuments"
        :key="doc.id"
      >
        <span class="created-at">{{ doc.createdAt }} ago</span>
        <span class="name">{{ doc.name }}:</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed } from "vue";

//data

//composables
const { error, documents } = getCollection("messages");

//computed
const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc: any) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time };
    });
  }
});
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