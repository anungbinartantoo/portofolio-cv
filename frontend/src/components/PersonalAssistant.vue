<template>
  <div>
    <!-- Tombol Chatbot di pojok kanan bawah -->
    <div class="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3">
      <!-- Overlay Chatbot -->
      <transition name="assistant-pop">
        <div
          v-if="showChat"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-80 max-w-[90vw] mb-3 flex flex-col overflow-hidden border border-cyan-100 dark:border-gray-700 animate-assistant-pop"
          style="height: 420px;"
        >
          <!-- Header - Fixed height -->
          <div class="flex items-center justify-between px-5 py-4 bg-white dark:bg-gray-800 border-b border-cyan-100 dark:border-gray-700 flex-shrink-0">
            <div class="flex items-center gap-2">
              <!-- Logo chatbot dengan filter untuk dark mode -->
              <img
                src="https://cdn-icons-png.flaticon.com/128/7568/7568485.png"
                alt="Chatbot Icon"
                class="w-7 h-7 dark:brightness-0 dark:invert transition-all duration-200"
              />
              <span class="text-cyan-600 dark:text-cyan-400 font-semibold text-lg">Asisten Anung</span>
            </div>

            <!-- Action buttons -->
            <div class="flex items-center gap-1">
              <!-- Clear Chat Button -->
              <button
                @click="clearChat"
                class="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 px-2 py-1 rounded transition-all duration-200 hover:scale-110 hover:bg-red-50 dark:hover:bg-red-900/20"
                title="Hapus semua chat"
                :disabled="messages.length <= 1"
                :class="{ 'opacity-50 cursor-not-allowed': messages.length <= 1 }"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png"
                  alt="Clear Chat"
                  class="w-5 h-5 dark:brightness-0 dark:invert transition-all duration-200"
                />
              </button>

              <!-- Close Button -->
              <button
                @click="showChat = false"
                class="text-cyan-500 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 text-2xl font-bold px-2 transition-transform duration-200 hover:scale-125"
                title="Tutup chat"
              >
                &times;
              </button>
            </div>
          </div>

          <!-- Chat Area - Flexible height with scroll -->
          <div class="flex-1 px-5 py-4 bg-gray-50 dark:bg-gray-900 overflow-y-auto min-h-0" ref="chatBody">
            <div v-for="(msg, i) in messages" :key="i" class="mb-3 flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
              <div
                :class="[
                  'px-4 py-2 rounded-xl max-w-[80%] text-sm break-words',
                  msg.role === 'user'
                    ? 'bg-cyan-500 text-white rounded-br-none'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                ]"
              >
                {{ msg.content }}
              </div>
            </div>

            <!-- Loading indicator -->
            <div v-if="loading" class="mb-3 flex justify-start">
              <div class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl rounded-bl-none px-4 py-2 text-sm">
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div class="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                  <div class="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Input Form - Fixed height -->
          <div class="px-5 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
            <form @submit.prevent="send" class="flex items-center gap-2">
              <input
                v-model="input"
                type="text"
                class="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Tanya tentang Anung..."
                autocomplete="off"
                :disabled="loading"
              />
              <button
                type="submit"
                class="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-4 py-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                :disabled="loading || !input.trim()"
              >
                <span v-if="!loading">Kirim</span>
                <span v-else class="animate-pulse">...</span>
              </button>
            </form>
          </div>
        </div>
      </transition>

      <!-- Button Chatbot -->
      <button
        ref="buttonRef"
        @click="showChat = true"
        v-show="!showChat"
        class="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-cyan-500 dark:text-cyan-400 rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all duration-300 focus:outline-none border border-cyan-200 dark:border-gray-600 assistant-btn"
        aria-label="Open Personal Assistant"
      >
        <!-- Logo di button utama juga diupdate -->
        <img
          src="https://cdn-icons-png.flaticon.com/128/7568/7568485.png"
          alt="Chatbot Icon"
          class="w-9 h-9 transition-transform duration-300 dark:brightness-0 dark:invert"
        />
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
  { role: 'assistant', content: 'Halo! Saya asisten personal Anung. Ada yang bisa saya bantu tentang skills, projects, atau pengalaman Anung? 😊' }
]);
const loading = ref(false);
const chatBody = ref(null);
const buttonRef = ref(null);
let observer;

async function send() {
  if (!input.value.trim()) return;

  // Add user message
  messages.value.push({ role: 'user', content: input.value });

  const userMessage = input.value;
  input.value = '';
  loading.value = true;

  // Scroll to bottom after user message
  nextTick(() => {
    if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight;
  });

  try {
    // Call Gemini AI API
    const response = await fetch('http://localhost:3001/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();

    if (data.success) {
      // Add AI response
      messages.value.push({
        role: 'assistant',
        content: data.response
      });
    } else {
      // Handle error
      messages.value.push({
        role: 'assistant',
        content: 'Maaf, terjadi kesalahan. Silakan coba lagi.'
      });
    }

  } catch (error) {
    console.error('Error calling AI assistant:', error);
    messages.value.push({
      role: 'assistant',
      content: 'Maaf, tidak dapat terhubung ke asisten AI. Pastikan backend berjalan.'
    });
  } finally {
    loading.value = false;

    // Scroll to bottom after AI response
    nextTick(() => {
      if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight;
    });
  }
}

function clearChat() {
  messages.value = [
    { role: 'assistant', content: 'Halo! Saya asisten personal Anung. Ada yang bisa saya bantu tentang skills, projects, atau pengalaman Anung? 😊' }
  ];
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
