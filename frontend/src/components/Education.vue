<script setup>
import { ref, onMounted } from 'vue';
defineOptions({ name: 'EducationSection' });
const educationHistory = ref([]);
onMounted(async () => {
  const res = await fetch('http://localhost:3001/api/education');
  educationHistory.value = await res.json();
});
</script>

<template>
<section id="pendidikan" class="py-20 bg-white dark:bg-black transition-colors duration-300">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-12 text-cyan-700 dark:text-cyan-300 text-center tracking-wide drop-shadow-lg transition-colors duration-300">Riwayat Pendidikan</h2>
    <div class="relative">
      <!-- Garis tengah animasi -->
      <div class="absolute h-full border-r-2 border-cyan-300 dark:border-cyan-700 left-1/2 transform -translate-x-1/2 animate-pulse-line transition-colors duration-300"></div>
      <div v-for="(edu, index) in educationHistory" :key="edu.id"
        class="mb-16 flex justify-between items-center w-full animate-fade-in-up"
        :style="{ animationDelay: (index * 0.18) + 's' }"
      >
        <div v-if="index % 2 === 0" class="w-full flex">
          <div class="w-1/2 pr-8 text-right">
            <p class="font-semibold text-cyan-600 dark:text-cyan-300 mb-1 animate-slide-in-right transition-colors duration-300">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-cyan-900 dark:text-white mb-1 animate-slide-in-right transition-colors duration-300">{{ edu.institution }}</h3>
            <p class="text-gray-700 dark:text-gray-300 animate-slide-in-right transition-colors duration-300">{{ edu.major }}</p>
          </div>
          <div class="w-1/2 flex justify-start items-center">
            <!-- Titik animasi -->
            <div class="w-6 h-6 bg-cyan-400 dark:bg-cyan-700 rounded-full shadow-lg border-4 border-white dark:border-black z-10 animate-pulse transition-colors duration-300"></div>
          </div>
        </div>
        <div v-else class="w-full flex">
          <div class="w-1/2 flex justify-end items-center">
            <div class="w-6 h-6 bg-cyan-400 dark:bg-cyan-700 rounded-full shadow-lg border-4 border-white dark:border-black z-10 animate-pulse transition-colors duration-300"></div>
          </div>
          <div class="w-1/2 pl-8 text-left">
            <p class="font-semibold text-cyan-600 dark:text-cyan-300 mb-1 animate-slide-in-left transition-colors duration-300">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-cyan-900 dark:text-white mb-1 animate-slide-in-left transition-colors duration-300">{{ edu.institution }}</h3>
            <p class="text-gray-700 dark:text-gray-300 animate-slide-in-left transition-colors duration-300">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
/* Fade in up untuk card */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
}

/* Slide in kanan */
@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.animate-slide-in-right {
  animation: slide-in-right 0.8s cubic-bezier(.4,0,.2,1) both;
}

/* Slide in kiri */
@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.animate-slide-in-left {
  animation: slide-in-left 0.8s cubic-bezier(.4,0,.2,1) both;
}

/* Animasi garis tengah pulse */
@keyframes pulse-line {
  0%, 100% { box-shadow: 0 0 0 0 #22d3ee44; }
  50% { box-shadow: 0 0 16px 4px #22d3ee88; }
}
.animate-pulse-line {
  animation: pulse-line 2.2s infinite;
}
</style>
