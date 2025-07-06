<template>
  <section id="about" class="py-24 bg-black min-h-screen overflow-hidden relative">

    <div class="max-w-6xl mx-auto px-2 md:px-8 relative z-10">
      <div class="w-full">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-8 text-left">About me</h1>
        <p
          ref="aboutText"
          class="flex flex-wrap text-lg md:text-xl leading-relaxed mb-10 text-left text-gray-400"
        >
          <template v-for="(word, i) in words" :key="i">
            <span
              class="relative mr-1 mb-1 transition-all duration-300"
              :style="{
                opacity: isVisible && i < visibleWords ? 1 : 0.2,
                color: isVisible && i < visibleWords ? '#fff' : ''
              }"
            >
              <span v-if="word === '\n'"><br /></span>
              <span v-else>{{ word }}</span>
            </span>
          </template>
        </p>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Experience</h2>
        <div class="relative overflow-x-hidden">
          <!-- Shadow kiri -->
          <div class="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <!-- Shadow kanan -->
          <div class="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
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
                class="about-card min-w-[420px] max-w-lg h-[140px] rounded-xl px-10 py-6 border border-gray-700 shadow text-left flex flex-col justify-center transition-transform duration-300 hover:scale-[1.03] hover:border-cyan-400"
              >
                <h3 class="font-semibold text-lg text-white mb-2 truncate">{{ exp.title }}</h3>
                <p class="text-cyan-300 text-xs mb-1">{{ exp.period }}</p>
                <p class="text-gray-300 text-sm line-clamp-2">{{ exp.desc }}</p>
              </div>
            </template>
          </div>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Aktivitas Coding</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Kartu Profil -->
          <div class="about-card flex flex-col items-center justify-center p-6">
            <div class="relative mb-4">
              <img src="https://avatars.githubusercontent.com/u/55883148?v=4" alt="Anung Binartanto" class="w-24 h-24 rounded-full border-2 border-gray-700" />
              <a
                href="https://github.com/anungbinartantoo"
                target="_blank"
                rel="noopener"
                class="absolute bottom-0 right-0 bg-[#23272d] rounded-full p-1 border-2 border-gray-700 hover:bg-gray-800 transition"
                aria-label="GitHub"
              >
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.88.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
                  />
                </svg>
              </a>
            </div>
            <div class="text-center">
              <p class="text-white font-semibold text-lg mb-1">Anung Binartanto</p>
              <a href="https://github.com/anungbinartantoo" target="_blank" class="text-teal-400 hover:underline text-sm">@anungbinartantoo</a>
              <p class="text-gray-400 text-xs mt-2">Web Developer</p>
            </div>
          </div>
          <!-- Chart Github -->
          <div class="about-card md:col-span-2 flex flex-col items-center justify-center p-6">
            <img
              src="https://ghchart.rshah.org/anungbinartantoo"
              alt="GitHub chart anungbinartantoo"
              class="w-full max-w-2xl rounded-lg"
              style="background-color: #23272d;"
            />
            <div class="flex justify-between w-full max-w-2xl px-4 mt-2 text-xs text-gray-300 items-center">
              <span>Less</span>
              <div class="flex gap-1">
                <span class="inline-block w-4 h-4 rounded bg-[#161b22] border border-gray-700"></span>
                <span class="inline-block w-4 h-4 rounded bg-[#003820]"></span>
                <span class="inline-block w-4 h-4 rounded bg-[#006d32]"></span>
                <span class="inline-block w-4 h-4 rounded bg-[#26a641]"></span>
                <span class="inline-block w-4 h-4 rounded bg-[#39d353]"></span>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isPaused = ref(false);

const aboutText = ref(null);
const isVisible = ref(false);
const rawText = `Hi there! 👋🏻 Saya Anung Binartanto, mahasiswa Teknik Informatika yang tinggal di Yogyakarta, Indonesia. Saya sangat antusias dalam pengembangan web, UI/UX, dan selalu ingin belajar hal baru di dunia teknologi.

Saya suka membangun website yang interaktif dan mudah digunakan, serta senang berkolaborasi dalam tim. Selain itu,

Saat ini saya sedang fokus memperdalam keahlian di bidang Web Development dan terbuka untuk peluang kolaborasi maupun project baru. Jangan ragu untuk menghubungi saya! 🚀`

const words = ref([])
const visibleWords = ref(0)
let interval = null

// Observer untuk trigger animasi tulis setiap masuk viewport
onMounted(() => {
  words.value = rawText.split(/(\s+|\n)/g)
  const observer = new IntersectionObserver(
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
        }, 30);
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
  // Clean up
  onUnmounted(() => {
    if (aboutText.value) observer.unobserve(aboutText.value);
    if (interval) clearInterval(interval);
  });
});

const experiences = [
  {
    title: 'Bootcamp Web Development at DICODING',
    period: 'Mar, 2020 – June, 2020 • 3 months',
    desc: 'Bootcamp at DICODING to learn Web Development',
  },
  {
    title: 'Web Development ',
    period: 'Jun, 2023 – Now • 1 year 4 months',
    desc: 'Make a website for a small business '
  },
  {
    title: 'UI/UX Designer',
    period: 'Jan, 2023 – Now • 1 year 10 months',
    desc: 'Designing user interfaces for mobile apps ('
  },
  {
    title: 'Saff event',
    period: 'Mei, 2025 – jun, 2025 • 2 months',
    desc: 'Organizing event in Yogyakarta'
  },
  {
    title: 'Workshop AI at HMIF Amikom Yogyakarta',
    period: 'Jun, 2025 – Jun, 2025 • 1 month',
    desc: 'Workshop AI for students at HMIF Amikom Yogyakarta'
  },
  {
    title: 'Project Manager',
    period: 'Dec, 2025 – Jan, 2025 • 2 months',
    desc: 'Managing a small team for a startup project idea'
  }
]
</script>

<style scoped>
.about-card {
  background: linear-gradient(135deg, #23272d 60%, #1e293b 100%);
  border: 1.5px solid #334155;
  box-shadow: 0 4px 32px 0 #0e749044;
  border-radius: 1.2rem;
  transition:
    box-shadow 0.3s,
    border-color 0.3s,
    background 0.3s,
    border-radius 0.3s;
}
.about-card:hover {
  border-color: #22d3ee;
  box-shadow: 0 0 32px 0 #22d3ee55;
  background: linear-gradient(135deg, #23272d 40%, #164e63 100%);
  border-radius: 1.5rem;
}


@keyframes seamless-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-seamless-x {
  animation: seamless-x 36s linear infinite;
  will-change: transform;
}
</style>
