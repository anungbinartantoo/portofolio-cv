<template>
  <section id="about" class="py-24 bg-white dark:bg-black min-h-screen overflow-hidden relative transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-2 md:px-8 relative z-10">
      <div class="w-full">
        <h1 class="text-5xl md:text-6xl font-extrabold text-cyan-800 dark:text-white mb-8 text-left transition-colors duration-300">About me</h1>
        <p
          ref="aboutText"
          class="flex flex-wrap text-lg md:text-xl leading-relaxed mb-10 text-left text-cyan-900 dark:text-gray-300 transition-colors duration-300"
        >
          <template v-for="(word, i) in words" :key="i">
            <span
              class="relative mr-1 mb-1 transition-all duration-300"
              :style="{
                opacity: isVisible && i < visibleWords ? 1 : 0.2,
                color: isVisible && i < visibleWords ? (isDark ? '#ffffff' : '#0891b2') : (isDark ? '#6b7280' : '#64748b')
              }"
            >
              <span v-if="word === '\n'"><br /></span>
              <span v-else>{{ word }}</span>
            </span>
          </template>
        </p>

        <h2 class="text-2xl md:text-3xl font-bold text-cyan-700 dark:text-white mb-4 transition-colors duration-300">Experience</h2>
        <div class="relative overflow-x-hidden">
          <!-- Shadow kiri -->
          <div class="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-cyan-300/80 via-cyan-100/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent transition-colors duration-300"></div>
          <!-- Shadow kanan -->
          <div class="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-cyan-300/80 via-cyan-100/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent transition-colors duration-300"></div>
          <div
            class="flex gap-8 py-2 animate-seamless-x"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
            :style="{ animationPlayState: isPaused ? 'paused' : 'running' }"
          >
            <template v-for="n in 2" :key="n">
              <div
                v-for="(exp, i) in experiences"
                :key="`${n}-${i}`"
                class="about-card min-w-[320px] max-w-lg h-[140px] rounded-xl px-8 py-6 border border-cyan-300 dark:border-gray-700 shadow text-left flex flex-col justify-center hover:scale-[1.03] hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300"
              >
                <h3 class="font-semibold text-cyan-800 dark:text-white mb-2 truncate transition-colors duration-300">{{ exp.title }}</h3>
                <p class="text-cyan-700 dark:text-cyan-300 text-xs mb-1 transition-colors duration-300">{{ exp.period }}</p>
                <p class="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 transition-colors duration-300">{{ exp.desc }}</p>
              </div>
            </template>
          </div>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold text-cyan-700 dark:text-white mb-4 transition-colors duration-300">Aktivitas Coding</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Kartu Profil -->
          <div class="about-card flex flex-col items-center justify-center p-6 border border-cyan-300 dark:border-gray-700 transition-colors duration-300">
            <div class="relative mb-4">
              <img src="https://avatars.githubusercontent.com/u/55883148?v=4" alt="Anung Binartanto" class="w-24 h-24 rounded-full border-2 border-cyan-300 dark:border-gray-700 transition-colors duration-300" />
              <a
                href="https://github.com/anungbinartantoo"
                target="_blank"
                rel="noopener"
                class="absolute bottom-0 right-0 bg-cyan-100 dark:bg-[#23272d] rounded-full p-1 border-2 border-cyan-300 dark:border-gray-700 hover:bg-cyan-200 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg class="w-7 h-7 text-cyan-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.88.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
                  />
                </svg>
              </a>
            </div>
            <div class="text-center">
              <p class="text-cyan-800 dark:text-white font-semibold text-lg mb-1 transition-colors duration-300">Anung Binartanto</p>
              <a href="https://github.com/anungbinartantoo" target="_blank" class="text-cyan-700 dark:text-teal-400 hover:underline text-sm transition-colors duration-300">@anungbinartantoo</a>
              <p class="text-gray-700 dark:text-gray-300 text-xs mt-2 transition-colors duration-300">Web Developer</p>
            </div>
          </div>

          <!-- Chart Github -->
          <div class="about-card md:col-span-2 flex flex-col items-center justify-center p-6 border border-cyan-300 dark:border-gray-700 transition-colors duration-300">
            <img
              src="https://ghchart.rshah.org/anungbinartantoo"
              alt="GitHub chart anungbinartantoo"
              class="w-full max-w-2xl rounded-lg"
              :style="{ backgroundColor: isDark ? '#23272d' : '#e0f2fe' }"
            />
            <div class="flex justify-between w-full max-w-2xl px-4 mt-2 text-xs text-cyan-800 dark:text-gray-300 items-center transition-colors duration-300">
              <span>Less</span>
              <div class="flex gap-1">
                <span class="inline-block w-4 h-4 rounded bg-cyan-100 dark:bg-[#161b22] border border-cyan-300 dark:border-gray-700"></span>
                <span class="inline-block w-4 h-4 rounded bg-cyan-200 dark:bg-teal-200"></span>
                <span class="inline-block w-4 h-4 rounded bg-cyan-300 dark:bg-teal-400"></span>
                <span class="inline-block w-4 h-4 rounded bg-cyan-400 dark:bg-green-400"></span>
                <span class="inline-block w-4 h-4 rounded bg-cyan-500 dark:bg-green-500"></span>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({ name: 'AboutSection' });
import { ref, onMounted, onUnmounted, computed } from 'vue';

const isPaused = ref(false);
const aboutText = ref(null);
const isVisible = ref(false);

const rawText = `Hi there! 👋🏻 Saya Anung Binartanto, mahasiswa Teknik Informatika yang tinggal di Yogyakarta, Indonesia. Saya sangat antusias dalam pengembangan web, UI/UX, dan selalu ingin belajar hal baru di dunia teknologi.

Saya suka membangun website yang interaktif dan mudah digunakan, serta senang berkolaborasi dalam tim. Selain itu,

Saat ini saya sedang fokus memperdalam keahlian di bidang Web Development dan terbuka untuk peluang kolaborasi maupun project baru. Jangan ragu untuk menghubungi saya! 🚀`

const words = ref([])
const visibleWords = ref(0)
let interval = null

// Cek dark mode dari html class
const isDark = computed(() => {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark')
  }
  return false
})

onMounted(() => {
  words.value = rawText.split(/(\s+|\n)/g)
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        visibleWords.value = 0;
        if (interval) clearInterval(interval);
        interval = setInterval(() => {
          if (visibleWords.value < words.value.length) {
            visibleWords.value++;
          } else {
            clearInterval(interval);
          }
        }, 50);
      } else {
        isVisible.value = false;
        visibleWords.value = 0;
        if (interval) clearInterval(interval);
      }
    },
    { threshold: 0.2 }
  );
  if (aboutText.value) {
    observer.observe(aboutText.value);
  }
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});

const experiences = [
  {
    title: 'Bootcamp Web Development at DICODING',
    period: 'Mar, 2020 – June, 2020 • 3 months',
    desc: 'Intensive bootcamp untuk mempelajari Web Development fundamentals',
  },
  {
    title: 'Freelance Web Developer',
    period: 'Jun, 2023 – Now • 1 year 7 months',
    desc: 'Membuat website untuk bisnis kecil dan UMKM'
  },
  {
    title: 'UI/UX Designer',
    period: 'Jan, 2023 – Now • 2 years',
    desc: 'Mendesain user interface untuk aplikasi mobile dan web'
  },
  {
    title: 'Staff Event Organizer',
    period: 'May, 2025 – Jun, 2025 • 2 months',
    desc: 'Mengorganisir berbagai event di Yogyakarta'
  },
  {
    title: 'Workshop AI Trainer - HMIF Amikom',
    period: 'Jun, 2025 • 1 month',
    desc: 'Mengajar workshop AI untuk mahasiswa Teknik Informatika'
  },
  {
    title: 'Project Manager',
    period: 'Dec, 2024 – Jan, 2025 • 2 months',
    desc: 'Mengelola tim kecil untuk ide proyek startup'
  }
]
</script>

<style scoped>
.about-card {
  background: linear-gradient(135deg, #e0f2fe 60%, #bae6fd 100%);
  border: 1.5px solid #7dd3fc;
  box-shadow: 0 4px 32px 0 #0e749044;
  border-radius: 1.2rem;
  transition: all 0.3s ease;
}

.dark .about-card {
  background: linear-gradient(135deg, #23272d 60%, #1e293b 100%) !important;
  border: 1.5px solid #334155 !important;
  box-shadow: 0 4px 32px 0 #0e749044;
}

.about-card:hover {
  border-color: #22d3ee;
  box-shadow: 0 0 32px 0 #22d3ee55;
  transform: scale(1.02);
}

.dark .about-card:hover {
  border-color: #06b6d4;
  box-shadow: 0 0 32px 0 #06b6d455;
}

@keyframes seamless-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-seamless-x {
  animation: seamless-x 36s linear infinite;
  will-change: transform;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
