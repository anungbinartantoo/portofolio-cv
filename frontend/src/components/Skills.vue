<script setup>
defineOptions({ name: 'SkillsSection' });
const skills = [
  { name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' }, { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' },
];
</script>
<template>
<section id="skill" class="py-20 bg-black">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-6 text-gray-100 text-center">Keahlian & Teknologi</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="(skill, idx) in skills" :key="skill.name"
        class="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700 hover:scale-105 hover:border-gray-500 transition-transform duration-300 opacity-0 translate-y-8 animate-fade-in"
        :style="{ animationDelay: (idx * 0.1) + 's' }">
        <h3 class="text-xl font-bold text-gray-100">{{ skill.name }}</h3>
        <p class="text-gray-400 mt-2">{{ skill.level }}</p>
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
