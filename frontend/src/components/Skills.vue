<script setup>
import { ref, onMounted } from 'vue';
defineOptions({ name: 'SkillsSection' });
const skills = ref([]);
onMounted(async () => {
  const res = await fetch('http://localhost:3001/api/skills');
  skills.value = await res.json();
});
</script>

<template>
<section id="skill" class="py-20 bg-white dark:bg-black transition-colors duration-300">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-12 text-cyan-800 dark:text-white text-center tracking-wide drop-shadow-lg transition-colors duration-300">My Skills</h2>
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="(skill, idx) in skills"
        :key="skill.name"
        class="group about-card p-7 rounded-2xl shadow-xl text-center border transition-all duration-300 opacity-0 translate-y-8 animate-fade-in cursor-pointer relative overflow-hidden"
        :style="{ animationDelay: (idx * 0.12) + 's' }"
      >
        <!-- Efek glow saat hover -->
        <div class="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 group-hover:shadow-[0_0_32px_0_#22d3ee99]"></div>
        <!-- Icon Skill hanya efek hover -->
        <div class="flex justify-center mb-4">
          <img
            :src="skill.icon"
            alt="icon"
            class="w-12 h-12 mx-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
          />
        </div>
        <h3 class="text-lg font-bold text-cyan-900 dark:text-white mb-1 tracking-wide group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">{{ skill.name }}</h3>
        <p class="text-cyan-800 dark:text-cyan-200 mt-1 font-medium group-hover:text-cyan-900 dark:group-hover:text-white transition-colors duration-300">{{ skill.level }}</p>
        <!-- Animasi garis bawah -->
        <span class="block mx-auto mt-3 h-1 w-8 rounded-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
  animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) forwards;
}

/* Hapus animasi pulse pada icon */
</style>
