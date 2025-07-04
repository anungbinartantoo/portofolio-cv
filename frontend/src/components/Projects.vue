<script setup>
defineOptions({ name: 'ProjectsSection' });
const projects = [
  { title: 'Website Barbershop', image: 'https://via.placeholder.com/500x300?text=Proyek+1', description: 'Platform e-commerce dengan fitur keranjang belanja.', tech: ['Vue.js', 'Express.js', 'PostgreSQL'], link: '#' },
  { title: 'Aplikasi Manajemen Tugas', image: 'https://via.placeholder.com/500x300?text=Proyek+2', description: 'Aplikasi untuk melacak progres tugas harian.', tech: ['React', 'Firebase'], link: '#' }
];
</script>
<template>
<section id="proyek" class="py-20 bg-black">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-6 text-gray-100 text-center">Proyek Unggulan</h2>
    <div class="grid md:grid-cols-2 gap-12">
      <div v-for="(project, idx) in projects" :key="project.title"
        class="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 flex flex-col opacity-0 translate-y-8 animate-fade-in"
        :style="{ animationDelay: (idx * 0.15) + 's' }">
        <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover">
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-2xl font-bold text-gray-100 mb-2">{{ project.title }}</h3>
          <p class="text-gray-400 mb-4 flex-1">{{ project.description }}</p>
          <div class="mb-4">
            <span v-for="t in project.tech" :key="t"
              class="inline-block bg-gray-700 text-gray-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full border border-gray-600">
              {{ t }}
            </span>
          </div>
          <a :href="project.link" target="_blank" rel="noopener noreferrer"
            class="text-blue-400 font-semibold hover:underline mt-auto">Lihat Detail &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
@keyframes fade-in {
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fade-in {
  animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) forwards;
}
</style>
