<script setup>
import { Icon as IconifyIcon } from '@iconify/vue';
defineOptions({ name: 'SkillsSection' });
const skills = [
  { name: 'Vue.js', level: 'Mahir', icon: 'logos:vue' },
  { name: 'JavaScript', level: 'Mahir', icon: 'logos:javascript' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: 'logos:tailwindcss-icon' },
  { name: 'Node.js', level: 'Menengah', icon: 'logos:nodejs-icon' },
  { name: 'Express.js', level: 'Menengah', icon: 'simple-icons:express' },
  { name: 'PostgreSQL', level: 'Menengah', icon: 'logos:postgresql' },
  { name: 'Git & GitHub', level: 'Mahir', icon: 'logos:git-icon' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: 'logos:html-5' },
];
</script>

<template>
<section id="skill" class="py-20 bg-black">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-12 text-white text-center tracking-wide drop-shadow-lg">My Skills</h2>
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="(skill, idx) in skills"
        :key="skill.name"
        class="group bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-7 rounded-2xl shadow-xl text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 opacity-0 translate-y-8 animate-fade-in cursor-pointer relative overflow-hidden"
        :style="{ animationDelay: (idx * 0.12) + 's' }"
      >
        <!-- Efek glow saat hover -->
        <div class="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 group-hover:shadow-[0_0_32px_0_#22d3ee99]"></div>
        <!-- Icon Skill hanya efek hover -->
        <div class="flex justify-center mb-4">
          <IconifyIcon
            :icon="skill.icon"
            class="text-5xl text-cyan-300 drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
          />
        </div>
        <h3 class="text-lg font-bold text-white mb-1 tracking-wide group-hover:text-cyan-300 transition-colors duration-300">{{ skill.name }}</h3>
        <p class="text-cyan-200 mt-1 font-medium group-hover:text-white transition-colors duration-300">{{ skill.level }}</p>
        <!-- Animasi garis bawah -->
        <span class="block mx-auto mt-3 h-1 w-8 rounded-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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

/* Hapus animasi pulse pada icon */
</style>
