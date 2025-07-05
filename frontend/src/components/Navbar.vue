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
          ANUNG BINARTANTO
        </span>
      </div>
      <!-- Hamburger & Close Button -->
      <div
        class="relative z-50 group ml-[-8px]"
        @mousemove="onMouseMove"
        @mouseleave="resetTransform"
      >
        <button
          @click="open = !open"
          ref="menuBtn"
          class="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-300 transition active:scale-95 focus:outline-none hover:shadow-[0_0_0_6px_rgba(209,213,219,0.7),0_4px_24px_rgba(0,0,0,0.10)]"
          aria-label="Menu"
          :style="menuBtnStyle"
        >
          <span class="relative w-10 h-10 flex items-center justify-center">
            <!-- Garis Atas -->
            <span
              :class="[

                'absolute left-1/2 w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 origin-center',
                open ? 'top-1/2 rotate-45 -translate-x-1/2 -translate-y-1/2' : 'top-3 -translate-x-1/2 rotate-0'
              ]"
            ></span>
            <!-- Garis Tengah -->
            <span
              :class="[

                'absolute left-1/2 w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 origin-center',
                open ? 'opacity-0' : 'top-5 -translate-x-1/2 opacity-100'
              ]"
            ></span>
            <!-- Garis Bawah -->
            <span
              :class="[

                'absolute left-1/2 w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 origin-center',
                open ? 'top-1/2 -rotate-45 -translate-x-1/2 -translate-y-1/2' : 'top-7 -translate-x-1/2 rotate-0'
              ]"
            ></span>
          </span>
        </button>
      </div>
      <!-- Overlay Menu -->
      <transition name="slide-fade">
        <div
          v-if="open"
          class="absolute right-0 top-full w-[90vw] max-w-sm bg-white dark:bg-black border border-gray-200 dark:border-gray-700 z-50 flex flex-col shadow-2xl rounded-2xl transition-all duration-300"
          style="margin-right:0.5rem;"
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
              <a
                href="https://github.com/"
                target="_blank"
                class="flex items-center gap-1 hover:underline hover:text-black dark:hover:text-yellow-300 transition group"
              >
                <svg class="w-5 h-5 transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
                Github
              </a>
              <a
                href="https://id.linkedin.com/in/anung-binartanto-983175292"
                target="_blank"
                class="flex items-center gap-1 hover:underline hover:text-black dark:hover:text-yellow-300 transition group"
              >
                <svg class="w-5 h-5 transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/>
                </svg>
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/anung.binartanto/"
                target="_blank"
                class="flex items-center gap-1 hover:underline hover:text-black dark:hover:text-yellow-300 transition group"
              >
                <svg class="w-5 h-5 transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                Instagram
              </a>
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
    </nav>
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
