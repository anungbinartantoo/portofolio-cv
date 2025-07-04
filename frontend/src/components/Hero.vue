<template>
  <section id="profil" class="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
    <!-- Nama besar -->
    <div class="absolute inset-0 flex flex-col justify-center items-center z-10">
      <h1 class="text-[7vw] md:text-[6vw] font-extrabold text-white text-center leading-none tracking-tight uppercase">
        ANUNG<br />BINARTANTO
      </h1>
      <!-- Foto profil -->
      <div class="relative flex justify-center mt-6 mb-6">
        <img
          src="https://avatars.githubusercontent.com/u/55883148?v=4"
          alt="Foto Profil"
          class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border-4 border-gray-800 transition duration-500 filter grayscale hover:grayscale-0"
        />
      </div>
      <h2 class="mt-4 md:mt-8 text-[3vw] md:text-[2vw] font-extrabold text-white text-center tracking-tight uppercase">
        WEB DEVELOPER FRONTEND
      </h2>
    </div>
    <!-- Lokasi (opsional) -->
    <div class="absolute left-6 bottom-6 flex items-center bg-gray-900/80 rounded-2xl px-4 py-2 shadow z-20">
      <svg class="w-6 h-6 text-gray-300 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-3.866 0-7 1.343-7 3v2h14v-2c0-1.657-3.134-3-7-3z"/>
      </svg>
      <span class="text-gray-200 text-sm">Located in Yogyakarta, Indonesia.</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style scoped>
/* Responsive font size for hero */
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem !important;
  }
  h2 {
    font-size: 1.2rem !important;
  }
}
</style>
