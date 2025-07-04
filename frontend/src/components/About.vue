<template>
  <section id="about" class="py-24 bg-black">
    <div class="container mx-auto px-8">
      <div class="bg-gray-800 rounded-2xl shadow-lg p-10 max-w-2xl mx-auto border border-gray-700 animate-fade-in">
        <h2 class="text-3xl font-bold mb-6 text-gray-100 text-center">Tentang Saya</h2>
        <p class="text-gray-400 text-lg leading-relaxed text-center">
          Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka. Saya suka belajar hal baru dan berkolaborasi dalam tim.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: none;}
}
.animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
</style>
