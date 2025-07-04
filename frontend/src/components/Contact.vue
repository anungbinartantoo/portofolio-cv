<script setup>
defineOptions({ name: 'ContactSection' });
const year = new Date().getFullYear();
</script>

<template>
  <section id="kontak" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6 max-w-xl text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-100">Hubungi Saya</h2>
      <p class="text-xl text-gray-400 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
      <form class="bg-gray-800 rounded-xl p-8 mb-10 shadow border border-gray-700 animate-fade-in" @submit.prevent>
        <input
          type="text"
          placeholder="Nama"
          class="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          class="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          required
        />
        <textarea
          placeholder="Pesan"
          class="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          class="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 w-full"
        >
          Kirim Pesan
        </button>
      </form>
      <div class="flex justify-center space-x-6 mb-8 animate-fade-in">
        <a href="https://github.com/anungbinartantoo" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
        <a href="https://id.linkedin.com/in/anung-binartanto-983175292" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
      </div>
      <p class="text-gray-500">&copy; {{ year }} anungbinartanto. Dibuat dengan Vue 3 dan Express.js </p>
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
  opacity: 0;
  transform: translateY(40px);
  animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) forwards;
}
</style>
