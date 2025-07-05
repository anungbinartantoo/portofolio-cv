<template>
  <header class="bg-black/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
    <nav class="flex justify-between items-center px-6 py-3 relative">
      <!-- Logo -->
      <div class="flex items-center space-x-2 group ml-2">
        <img
          src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png"
          alt="Logo"
          class="w-6 h-6 transition-transform duration-300 group-hover:rotate-[30deg]"
        />
        <span class="text-xs md:text-sm font-bold text-white tracking-wide uppercase">
          Let's Coding
        </span>
      </div>
      <!-- Hamburger & Close Button -->
      <div
        class="relative z-50 group"
        @mousemove="onMouseMove"
        @mouseleave="resetTransform"
      >
        <button
          @click="open = !open"
          ref="menuBtn"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 transition active:scale-95 focus:outline-none hover:shadow-[0_0_0_6px_rgba(209,213,219,0.7),0_4px_24px_rgba(0,0,0,0.10)]"
          aria-label="Menu"
          :style="menuBtnStyle"
        >
          <span class="relative w-8 h-8 flex items-center justify-center">
            <!-- Garis Atas -->
            <span
              :class="[

                'absolute left-1/2 w-4 h-0.5 bg-gray-900 rounded transition-all duration-300 origin-center',
                open ? 'top-1/2 rotate-45 -translate-x-1/2 -translate-y-1/2' : 'top-2 -translate-x-1/2 rotate-0'
              ]"
            ></span>
            <!-- Garis Tengah -->
            <span
              :class="[

                'absolute left-1/2 w-4 h-0.5 bg-gray-900 rounded transition-all duration-300 origin-center',
                open ? 'opacity-0' : 'top-4 -translate-x-1/2 opacity-100'
              ]"
            ></span>
            <!-- Garis Bawah -->
            <span
              :class="[

                'absolute left-1/2 w-4 h-0.5 bg-gray-900 rounded transition-all duration-300 origin-center',
                open ? 'top-1/2 -rotate-45 -translate-x-1/2 -translate-y-1/2' : 'top-6 -translate-x-1/2 rotate-0'
              ]"
            ></span>
          </span>
        </button>
      </div>
    </nav>
    <!-- Overlay Menu -->
    <transition name="slide-fade">
      <div
        v-if="open"
        class="absolute right-6 top-16 w-[90vw] max-w-sm bg-white dark:bg-black border border-gray-200 dark:border-gray-700 z-40 flex flex-col shadow-2xl rounded-2xl transition-all duration-300"
      >
        <div class="flex-1 flex flex-col justify-center items-start px-8 py-8">
          <h2 class="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Navigation</h2>
          <hr class="w-full mb-8 border-gray-300 dark:border-gray-700" />
          <nav class="flex flex-col space-y-4 mb-12">
            <a
              href="#profil"
              @click="open = false"
              class="text-4xl font-semibold text-gray-800 hover:text-black hover:bg-gray-100/80 dark:text-gray-100 dark:hover:text-yellow-300 dark:hover:bg-gray-800/70 transition rounded-lg px-3 py-1 transform hover:scale-105"
            >Home</a>
            <a
              href="#about"
              @click="open = false"
              class="text-4xl font-semibold text-gray-800 hover:text-black hover:bg-gray-100/80 dark:text-gray-100 dark:hover:text-yellow-300 dark:hover:bg-gray-800/70 transition rounded-lg px-3 py-1 transform hover:scale-105"
            >About</a>
            <a
              href="#proyek"
              @click="open = false"
              class="text-4xl font-semibold text-gray-800 hover:text-black hover:bg-gray-100/80 dark:text-gray-100 dark:hover:text-yellow-300 dark:hover:bg-gray-800/70 transition rounded-lg px-3 py-1 transform hover:scale-105"
            >Projects</a>
            <a
              href="#kontak"
              @click="open = false"
              class="text-4xl font-semibold text-gray-800 hover:text-black hover:bg-gray-100/80 dark:text-gray-100 dark:hover:text-yellow-300 dark:hover:bg-gray-800/70 transition rounded-lg px-3 py-1 transform hover:scale-105"
            >Contact</a>
          </nav>
          <h2 class="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Links</h2>
          <hr class="w-full mb-4 border-gray-300 dark:border-gray-700" />
          <div class="mb-8 flex flex-wrap gap-4 text-lg text-gray-700 dark:text-gray-200">
            <a href="https://github.com/" target="_blank" class="hover:underline hover:text-black dark:hover:text-yellow-300">Github</a>
            <a href="https://linkedin.com/" target="_blank" class="hover:underline hover:text-black dark:hover:text-yellow-300">Linkedin</a>
            <a href="#" class="hover:underline hover:text-black dark:hover:text-yellow-300">Instagram</a>
            <a href="#" class="hover:underline hover:text-black dark:hover:text-yellow-300">Tiktok</a>
            <a href="mailto:your@email.com" class="hover:underline hover:text-black dark:hover:text-yellow-300">Email</a>
          </div>
          <!-- Theme switcher -->
          <div class="flex items-center space-x-2 mt-4">
            <span class="text-xs text-gray-500 dark:text-gray-400">Light</span>
            <button
              @click="setTheme(theme === 'dark' ? 'light' : 'dark')"
              class="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none"
              :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"
              aria-label="Toggle dark mode"
            >
              <span
                class="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300"
                :class="theme === 'dark' ? 'translate-x-6 bg-yellow-300' : 'translate-x-0 bg-white'"
              ></span>
            </button>
            <span class="text-xs text-gray-500 dark:text-gray-400">Dark</span>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
const open = ref(false);
const theme = ref('light');

// --- Interactive Button Animation ---
const menuBtn = ref(null);
const menuBtnStyle = ref('');

function onMouseMove(e) {
  const btn = menuBtn.value;
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  // max tilt 10deg, max translate 4px
  const tiltX = (y / (rect.height / 2)) * 10;
  const tiltY = -(x / (rect.width / 2)) * 10;
  const moveX = (x / (rect.width / 2)) * 4;
  const moveY = (y / (rect.height / 2)) * 4;
  menuBtnStyle.value = `transform: perspective(200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${moveX}px) translateY(${moveY}px); transition: transform 0.15s cubic-bezier(.4,0,.2,1);`;
}
function resetTransform() {
  menuBtnStyle.value = 'transform: none; transition: transform 0.3s cubic-bezier(.4,0,.2,1);';
}

// --- Theme ---
function setTheme(mode) {
  theme.value = mode;
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
watchEffect(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
defineOptions({ name: 'AppNavbar' });
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
