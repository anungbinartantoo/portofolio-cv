<template>
  <div>
    <!-- Tombol Chatbot di pojok kanan bawah -->
    <div class="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3">
      <!-- Overlay Chatbot (menyatu dengan button, muncul di atas button) -->
      <transition name="assistant-pop">
        <div
          v-if="showChat"
          class="bg-white rounded-2xl shadow-2xl w-80 max-w-[90vw] mb-3 flex flex-col overflow-hidden border border-cyan-100 animate-assistant-pop"
          style="min-height: 420px;"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-4 bg-white border-b border-cyan-100">
            <div class="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/128/7568/7568485.png" alt="Chatbot Icon" class="w-7 h-7" />
              <span class="text-cyan-600 font-semibold text-lg">Personal Assistant</span>
            </div>
            <button @click="showChat = false" class="text-cyan-500 hover:text-cyan-700 text-2xl font-bold px-2 transition-transform duration-200 hover:scale-125">&times;</button>
          </div>
          <!-- Chat Area -->
          <div class="flex-1 px-5 py-4 bg-gray-50 h-72 overflow-y-auto" ref="chatBody">
            <div v-for="(msg, i) in messages" :key="i" class="mb-3 flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
              <div
                :class="[
                  'px-4 py-2 rounded-xl max-w-[80%] text-sm',
                  msg.role === 'user'
                    ? 'bg-cyan-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                ]"
              >
                {{ msg.content }}
              </div>
            </div>
          </div>
          <!-- Input -->
          <form @submit.prevent="send" class="flex items-center gap-2 px-5 py-4 bg-white border-t">
            <input
              v-model="input"
              type="text"
              class="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Tulis pesan..."
              autocomplete="off"
            />
            <button
              type="submit"
              class="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-4 py-2 font-semibold transition-all duration-200"
              :disabled="loading || !input.trim()"
            >
              <span v-if="!loading">Kirim</span>
              <span v-else class="animate-pulse">...</span>
            </button>
          </form>
        </div>
      </transition>
      <!-- Button Chatbot -->
      <button
        ref="buttonRef"
        @click="showChat = true"
        v-show="!showChat"
        class="bg-white hover:bg-gray-100 text-cyan-500 rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all duration-300 focus:outline-none border border-cyan-200 assistant-btn"
        aria-label="Open Personal Assistant"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/7568/7568485.png" alt="Chatbot Icon" class="w-9 h-9 transition-transform duration-300" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({ footerRef: Object });
const showChat = ref(false);
const input = ref('');
const messages = ref([
  { role: 'assistant', content: 'Halo! Ada yang bisa saya bantu?' }
]);
const loading = ref(false);
const chatBody = ref(null);
const buttonRef = ref(null);
let observer;

function send() {
  if (!input.value.trim()) return;
  messages.value.push({ role: 'user', content: input.value });
  loading.value = true;
  setTimeout(() => {
    messages.value.push({ role: 'assistant', content: 'Ini adalah respons AI personal assistant (dummy).' });
    loading.value = false;
    nextTick(() => {
      if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight;
    });
  }, 900);
  input.value = '';
  nextTick(() => {
    if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight;
  });
}

onMounted(() => {
  watch(
    () => props.footerRef?.$el,
    (footerEl) => {
      if (footerEl && buttonRef.value) {
        observer = new window.IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              buttonRef.value.style.opacity = '0';
              buttonRef.value.style.pointerEvents = 'none';
            } else {
              buttonRef.value.style.opacity = '1';
              buttonRef.value.style.pointerEvents = '';
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(footerEl);
      }
    },
    { immediate: true }
  );
});
onUnmounted(() => {
  if (observer && props.footerRef?.$el) observer.unobserve(props.footerRef.$el);
});
</script>

<style scoped>
/* Animasi hover pada button */
.assistant-btn:hover {
  box-shadow: 0 8px 32px 0 #06b6d455, 0 0 0 4px #a5f3fc33;
  transform: scale(1.08) rotate(-6deg);
}
.assistant-btn:active {
  transform: scale(0.97) rotate(0deg);
}

/* Animasi muncul overlay */
.assistant-pop-enter-active {
  animation: assistant-pop-in 0.35s cubic-bezier(.4,0,.2,1);
}
.assistant-pop-leave-active {
  animation: assistant-pop-out 0.22s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes assistant-pop-in {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.85) rotate(-8deg);
    filter: blur(8px);
  }
  60% {
    opacity: 1;
    transform: translateY(-8px) scale(1.04) rotate(2deg);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}
@keyframes assistant-pop-out {
  0% {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
  100% {
    opacity: 0;
    transform: translateY(60px) scale(0.85) rotate(8deg);
    filter: blur(8px);
  }
}
</style>
