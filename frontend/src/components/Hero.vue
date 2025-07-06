<template>
  <section id="profil" class="relative min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black overflow-hidden transition-colors duration-300">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-center pt-10 pb-12 w-full hero-content z-10 max-w-5xl">
      <!-- Kiri: Teks -->
      <div class="flex-1 flex flex-col items-center md:items-start justify-center px-4 md:px-8">
        <h2 class="text-lg md:text-xl text-cyan-700 dark:text-cyan-300 font-semibold mb-2 text-center md:text-left transition-colors duration-300">Hello, I'm</h2>
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 drop-shadow-lg text-center md:text-left transition-colors duration-300">
          Anung Binartanto
        </h1>
        <div class="flex items-center h-12 mb-6 justify-center md:justify-start w-full">
          <span class="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mr-2 transition-colors duration-300">And I'm a</span>
          <span class="text-2xl md:text-3xl font-bold text-cyan-700 dark:text-cyan-300 typing-effect transition-colors duration-300">{{ currentRole }}</span>
          <span v-if="showCursor" class="typing-cursor ml-1"></span>
        </div>
        <!-- Keterangan lokasi -->
        <p class="text-xs text-gray-600 dark:text-gray-300 mb-2 text-center md:text-left transition-colors duration-300">Located in Yogyakarta, Indonesia</p>
        <button
          class="mt-2 px-7 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg mx-auto md:mx-0"
        >
          <a
            href="/cv-anung-binartanto.pdf"
            download
            class="block w-full h-full"
          >
            Download CV
          </a>
        </button>
      </div>
      <!-- Kanan: Foto profil (Bulan besar) -->
      <div class="flex-1 flex justify-center items-center mt-12 md:mt-0 relative">
        <div class="relative flex justify-center items-center group">
          <div class="profile-glow dark:profile-glow-light"></div>
          <img
            src="https://avatars.githubusercontent.com/u/55883148?v=4"
            alt="Foto Profil"
            class="w-64 h-64 md:w-[370px] md:h-[370px] object-cover rounded-full border-8 border-gray-200 dark:border-gray-900 shadow-2xl bg-white dark:bg-black transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            style="box-shadow: 0 0 60px 0 #67e8f9cc, 0 0 0 8px #e0f2fe;"
          />
          <!-- Efek "bulan" halus -->
          <div class="absolute inset-0 rounded-full pointer-events-none" style="box-shadow: 0 0 80px 24px #a5f3fc22 inset;"></div>
          <!-- Animasi ring berputar -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="ring-spin"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      roles: [
        "Fullstack Developer",
        "Freelancer",
        "Student"
      ],
      currentRole: "",
      roleIndex: 0,
      charIndex: 0,
      typingForward: true,
      showCursor: true,
      typingInterval: null,
      cursorInterval: null,
    };
  },
  mounted() {
    this.startTyping();
    this.cursorInterval = setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  },
  beforeUnmount() {
    clearInterval(this.typingInterval);
    clearInterval(this.cursorInterval);
  },
  methods: {
    startTyping() {
      this.typingInterval = setInterval(() => {
        const role = this.roles[this.roleIndex];
        if (this.typingForward) {
          if (this.charIndex < role.length) {
            this.currentRole = role.slice(0, this.charIndex + 1);
            this.charIndex++;
          } else {
            this.typingForward = false;
            setTimeout(() => {}, 1200);
          }
        } else {
          if (this.charIndex > 0) {
            this.currentRole = role.slice(0, this.charIndex - 1);
            this.charIndex--;
          } else {
            this.typingForward = true;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
          }
        }
      }, this.typingForward ? 140 : 60);
    },
    downloadCV() {
      window.open('/cv-anung-binartanto.pdf', '_blank');
    }
  }
};
</script>

<style scoped>
/* Efek typing cursor */
.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: #22d3ee;
  margin-left: 2px;
  animation: blink 1s steps(1) infinite;
  vertical-align: middle;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Responsive moon effect */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column !important;
    gap: 2.5rem;
  }
}

.profile-glow {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  z-index: 0;
  pointer-events: none;
  border: 2.5px solid #22d3eeaa;
  box-shadow:
    0 0 40px 0 #06b6d480,
    0 0 0 8px #0e172a,
    0 2px 12px 0 #06b6d433;
  background: linear-gradient(135deg, #06b6d422 0%, #23272d00 100%);
  opacity: 0.7;
  transition: opacity 0.4s, border-color 0.4s, background 0.4s;
}
.profile-glow-light {
  border-color: #a5f3fc;
  box-shadow:
    0 0 40px 0 #67e8f9cc,
    0 0 0 8px #e0f2fe,
    0 2px 12px 0 #a5f3fc55;
  background: linear-gradient(135deg, #a5f3fc33 0%, #fff0 100%);
  opacity: 0.8;
}

/* Animasi ring berputar di sekitar foto */
.ring-spin {
  display: block;
  width: 110%;
  height: 110%;
  border-radius: 9999px;
  border: 3px dashed #06b6d4;
  opacity: 0.18;
  animation: ring-spin 7s linear infinite;
}
@keyframes ring-spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

/* Efek grayscale ke warna pada foto profil */
.group:hover img {
  filter: grayscale(0);
  transform: scale(1.05);
}
</style>
