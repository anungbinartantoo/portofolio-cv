<script setup>
defineOptions({ name: 'EducationSection' });
// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Gondang', major: 'MIPA' }
];
</script>
<template>
<section id="pendidikan" class="py-20 bg-black">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-8 text-gray-100">Riwayat Pendidikan</h2>
    <div class="relative">
      <div class="absolute h-full border-r-2 border-gray-700" style="left: 50%;"></div>
      <div v-for="(edu, index) in educationHistory" :key="edu.id"
        class="mb-8 flex justify-between items-center w-full">
        <div v-if="index % 2 === 0" class="w-full flex">
          <div class="w-1/2 pr-8 text-right">
            <p class="font-semibold text-gray-400">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-gray-100">{{ edu.institution }}</h3>
            <p class="text-gray-400">{{ edu.major }}</p>
          </div>
          <div class="w-1/2 flex justify-start">
            <div class="w-4 h-4 bg-gray-600 rounded-full z-10"></div>
          </div>
        </div>
        <div v-else class="w-full flex">
          <div class="w-1/2 flex justify-end">
            <div class="w-4 h-4 bg-gray-600 rounded-full z-10"></div>
          </div>
          <div class="w-1/2 pl-8 text-left">
            <p class="font-semibold text-gray-400">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-gray-100">{{ edu.institution }}</h3>
            <p class="text-gray-400">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
