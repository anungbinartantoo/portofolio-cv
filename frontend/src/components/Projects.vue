<script setup>
defineOptions({ name: 'ProjectsSection' });
const projects = [
  {
    title: 'Website Barbershop (Dummy)',
    image: 'https://elements-resized.envatousercontent.com/elements-cover-images/58728ff1-d89d-4fbf-bbae-0b1d9232ff75?w=2038&cf_fit=scale-down&q=85&format=auto&s=abd056af9d27d59da0995cf402d16c93d390593099b5345909fd1b85be058cc2',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan booking online.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas (Dummy)',
    image: 'https://bordio.com/wp-content/uploads/2025/01/kanban-board.png',
    description: 'Aplikasi untuk melacak progres tugas harian dengan tampilan Kanban.',
    tech: ['React', 'Firebase'],
    link: '#'
  },
  {
    title: 'Company Profile UMKM (Dummy)',
    image: 'https://storage.googleapis.com/fastwork-static/f286550d-f93a-4346-8bb5-d33fc534956f.jpg',
    description: 'Website company profile untuk UMKM dengan fitur galeri dan kontak.',
    tech: ['Nuxt.js', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Sistem Inventaris Barang (Dummy)',
    image: 'https://www.jmc.co.id/blog/wp-content/uploads/2024/02/Screenshot-2024-02-21-101615.png',
    description: 'Aplikasi inventaris barang berbasis web untuk manajemen stok dan laporan.',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    link: '#'
  }
];
</script>

<template>
<section id="proyek" class="py-20 bg-black">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-10 text-white text-center tracking-wide drop-shadow-lg">Proyek Unggulan</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        v-for="(project, idx) in projects"
        :key="project.title"
        class="group bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-0 rounded-2xl shadow-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 opacity-0 translate-y-8 animate-fade-in cursor-pointer relative overflow-hidden"
        :style="{ animationDelay: (idx * 0.13) + 's' }"
      >
        <!-- Efek glow saat hover -->
        <div class="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 group-hover:shadow-[0_0_48px_0_#22d3ee66]"></div>
        <!-- Gambar Proyek -->
        <div class="overflow-hidden rounded-t-2xl">
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            loading="lazy"
          />
        </div>
        <!-- Konten Proyek -->
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{{ project.title }}</h3>
          <p class="text-gray-300 mb-4 flex-1">{{ project.description }}</p>
          <div class="mb-4 flex flex-wrap gap-2">
            <span
              v-for="t in project.tech"
              :key="t"
              class="bg-cyan-900/40 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-700/40 shadow transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-100"
            >
              {{ t }}
            </span>
          </div>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-auto text-cyan-400 font-semibold hover:underline transition-colors duration-300"
          >
            Lihat Detail &rarr;
          </a>
        </div>
        <!-- Animasi garis bawah -->
        <span class="block absolute left-1/2 -bottom-1 w-0 h-1 bg-cyan-400 rounded-full group-hover:w-2/3 transition-all duration-500 -translate-x-1/2"></span>
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
  animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) forwards;
}
</style>
