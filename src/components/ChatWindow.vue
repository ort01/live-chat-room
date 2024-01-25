<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div ref="messages" class="chat-window__messages" v-if="documents">
      <div class="chat-window__messages--single" v-for="doc in formattedDocuments" :key="doc.id">
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
import { computed, onUpdated, ref } from "vue";

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

// autoscroll to bottom of messages
const messages: any = ref(null); // with ref="messages" in <template></template> we can store to DOM element inside the const messages"

onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight;
  // messages.value = div in DOM that scrolls
  // scrollTop equals to the position of the scroller. If its on top the posision is 0
  // if we give the scrollTop value of scrollHeight, it will jump in the bottom
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