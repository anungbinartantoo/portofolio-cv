<template>
  <footer class="py-8 bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white text-center relative overflow-hidden">
    <!-- Efek cahaya tile elegan di atas footer -->
    <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1/2 h-12 pointer-events-none z-10">
      <div class="w-full h-full rounded-full blur-2xl opacity-15 bg-cyan-300"></div>
    </div>
    <div class="container mx-auto px-8 relative z-20 flex flex-col items-center">
      
      <div class="text-sm text-gray-400">
        &copy; 2025 Anung Binartanto. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>
