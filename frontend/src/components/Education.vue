<script setup>
defineOptions({ name: 'EducationSection' });
// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Gondang', major: 'MIPA' },
  { id: 3, period: '2018 - 2020', institution: 'SMP Negeri 2 Sragen', major: '' }
];
</script>

<template>
<section id="pendidikan" class="py-20 bg-black">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-12 text-cyan-300 text-center tracking-wide drop-shadow-lg">Riwayat Pendidikan</h2>
    <div class="relative">
      <!-- Garis tengah animasi -->
      <div class="absolute h-full border-r-2 border-cyan-700 left-1/2 transform -translate-x-1/2 animate-pulse-line"></div>
      <div v-for="(edu, index) in educationHistory" :key="edu.id"
        class="mb-16 flex justify-between items-center w-full animate-fade-in-up"
        :style="{ animationDelay: (index * 0.18) + 's' }"
      >
        <div v-if="index % 2 === 0" class="w-full flex">
          <div class="w-1/2 pr-8 text-right">
            <p class="font-semibold text-cyan-400 mb-1 animate-slide-in-right">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-gray-100 mb-1 animate-slide-in-right">{{ edu.institution }}</h3>
            <p class="text-gray-400 animate-slide-in-right">{{ edu.major }}</p>
          </div>
          <div class="w-1/2 flex justify-start items-center">
            <!-- Titik animasi -->
            <div class="w-6 h-6 bg-cyan-400 rounded-full shadow-lg border-4 border-black z-10 animate-pulse"></div>
          </div>
        </div>
        <div v-else class="w-full flex">
          <div class="w-1/2 flex justify-end items-center">
            <div class="w-6 h-6 bg-cyan-400 rounded-full shadow-lg border-4 border-black z-10 animate-pulse"></div>
          </div>
          <div class="w-1/2 pl-8 text-left">
            <p class="font-semibold text-cyan-400 mb-1 animate-slide-in-left">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-gray-100 mb-1 animate-slide-in-left">{{ edu.institution }}</h3>
            <p class="text-gray-400 animate-slide-in-left">{{ edu.major }}</p>
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
