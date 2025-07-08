<script setup>
import { ref, onMounted } from 'vue';
defineOptions({ name: 'ProjectsSection' });
const projects = ref([]);
onMounted(async () => {
  const res = await fetch('http://localhost:3001/api/projects');
  projects.value = await res.json();
});
</script>

<template>
<section id="proyek" class="py-20 bg-white dark:bg-black transition-colors duration-300">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-10 text-cyan-800 dark:text-white text-center tracking-wide drop-shadow-lg transition-colors duration-300">My Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        v-for="(project, idx) in projects"
        :key="project.title"
        class="group about-card p-0 rounded-2xl shadow-2xl border transition-all duration-300 opacity-0 translate-y-8 animate-fade-in cursor-pointer relative overflow-hidden"
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
          <h3 class="text-xl font-bold text-cyan-900 dark:text-white mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">{{ project.title }}</h3>
          <p class="text-cyan-800 dark:text-gray-300 mb-4 flex-1">{{ project.description }}</p>
          <div class="mb-4 flex flex-wrap gap-2">
            <span
              v-for="t in project.tech.split(',')"
              :key="t"
              class="bg-cyan-200/60 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-700/40 shadow transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-900 dark:group-hover:text-cyan-100"
            >
              {{ t.trim() }}
            </span>
          </div>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-auto text-cyan-700 dark:text-cyan-400 font-semibold hover:underline transition-colors duration-300"
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
.about-card {
  background: linear-gradient(135deg, #e0f2fe 60%, #bae6fd 100%);
  border: 1.5px solid #7dd3fc;
  box-shadow: 0 4px 32px 0 #0e749044;
  border-radius: 1.2rem;
  transition:
    box-shadow 0.3s,
    border-color 0.3s,
    background 0.3s,
    border-radius 0.3s;
}
.dark .about-card {
  background: linear-gradient(135deg, #23272d 60%, #1e293b 100%) !important;
  border: 1.5px solid #334155 !important;
  box-shadow: 0 4px 32px 0 #0e749044;
}
.about-card:hover {
  border-color: #22d3ee;
  box-shadow: 0 0 32px 0 #22d3ee55;
}
.dark .about-card:hover {
  border-color: #06b6d4;
  box-shadow: 0 0 32px 0 #06b6d455;
  background: linear-gradient(135deg, #23272d 60%, #1e293b 100%) !important;
}

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
