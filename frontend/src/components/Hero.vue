<template>
  <section id="profil" class="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
    <!-- Background animasi antariksa -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Bintang-bintang -->
      <div v-for="n in 40" :key="n" :style="starStyle(n)" class="star"></div>
      <!-- Planet dan roket dihapus -->
    </div>
    <!-- Hero Content -->
    <div class="relative flex flex-col justify-center items-center z-10 pt-4 md:pt-10 pb-12 w-full hero-content">
      <transition name="name-fly-up">
        <h1
          v-if="showHero"
          ref="typedName"
          class="text-[9vw] md:text-[4.5vw] font-extrabold text-white text-center leading-none tracking-tight uppercase drop-shadow-lg mb-4 whitespace-pre-line"
        >
          <span>{{ typedText }}</span>
          <span
            v-if="showCursor && typingIndex < fullText.length"
            class="typing-cursor"
          ></span>
        </h1>
      </transition>
      <!-- Foto profil efek popup -->
      <transition name="photo-popup">
        <div v-if="showHero" class="relative flex justify-center mb-6">
          <img
            src="https://avatars.githubusercontent.com/u/55883148?v=4"
            alt="Foto Profil"
            class="w-56 h-56 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-gray-800 transition duration-500 filter grayscale hover:grayscale-0"
          />
        </div>
      </transition>
      <!-- Animate on view for WEB DEVELOPER -->
      <transition name="fade-slide">
        <h2
          v-if="showWebDev"
          class="relative text-[5vw] md:text-[2.5vw] font-extrabold text-white text-center tracking-tight uppercase drop-shadow mb-2"
        >
          <span class="webdev-glow">WEB DEVELOPER</span>
        </h2>
      </transition>
    </div>
    <!-- Lokasi (opsional) -->
    <div class="absolute left-0 top-[15%] md:top-[10%] md:translate-y-1/2 lg:top-1/2 hidden sm:block opacity-100 z-20">
      <div class="flex items-center gap-x-2 rounded-e-full bg-zinc-700 py-2 pl-2 pr-3 dark:bg-neutral-800 md:gap-x-8 md:py-3 md:pr-4">
        <!-- Info lokasi -->
        <div class="flex flex-col items-start">
          <p class="w-20 text-xs leading-[18px] md:text-sm text-white dark:text-gray-200">
            Located in Yogyakarta, Indonesia.
          </p>
        </div>
        <!-- Icon besar dalam lingkaran -->
        <div class="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-black shadow p-0">
          <svg
            class="w-10 h-10 md:w-12 md:h-12 text-gray-600 location-flip"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
            <circle cx="12" cy="11" r="2.5" />
          </svg>
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
      fullText: "ANUNG\nBINARTANTO",
      typedText: "",
      typingIndex: 0,
      showWebDev: false,
      showHero: true,
      observer: null,
      heroObserver: null,
      showCursor: true,
      cursorInterval: null,
    };
  },
  mounted() {
    this.typeWriter();
    // Blinking cursor
    this.cursorInterval = setInterval(() => {
      if (this.typingIndex < this.fullText.length) {
        this.showCursor = !this.showCursor;
      } else {
        this.showCursor = false;
      }
    }, 500);
    // Observer untuk web developer
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.showWebDev = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );
    // Observer untuk nama dan foto
    this.heroObserver = new IntersectionObserver(
      ([entry]) => {
        this.showHero = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    this.$nextTick(() => {
      const heroContent = this.$el.querySelector('.hero-content');
      if (heroContent) {
        this.observer.observe(heroContent);
        this.heroObserver.observe(heroContent);
      }
    });
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
    if (this.heroObserver) this.heroObserver.disconnect();
    if (this.cursorInterval) clearInterval(this.cursorInterval);
  },
  methods: {
    typeWriter() {
      if (this.typingIndex < this.fullText.length) {
        this.typedText += this.fullText[this.typingIndex];
        this.typingIndex++;
        setTimeout(this.typeWriter, 90);
      }
    },
    // Membuat posisi random untuk bintang
    starStyle() {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const duration = 3 + Math.random() * 5;
      return {
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`
      };
    }
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
  h1 {
    font-size: 2.2rem !important;
  }
  h2 {
    font-size: 1.1rem !important;
  }
}

/* Nama keluar dari foto ke atas */
.name-fly-up-enter-active,
.name-fly-up-leave-active {
  transition:
    opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.name-fly-up-enter-from,
.name-fly-up-leave-to {
  opacity: 0;
  transform: translateY(80px) scale(0.96);
}
.name-fly-up-enter-to,
.name-fly-up-leave-from {
  opacity: 1;
  transform: translateY(-20px) scale(1);
}

/* Foto profil efek popup */
.photo-popup-enter-active,
.photo-popup-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.photo-popup-enter-from,
.photo-popup-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
.photo-popup-enter-to,
.photo-popup-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Fade-slide transition for h2 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.location-flip {
  animation: location-flip 2.5s cubic-bezier(.4,0,.2,1) infinite;
  transform-origin: 50% 80%;
}
@keyframes location-flip {
  0% { transform: scaleX(1);}
  20% { transform: scaleX(-1);}
  40% { transform: scaleX(1);}
  100% { transform: scaleX(1);}
}

.typing-cursor {
  display: inline-block;
  height: 1em;
  width: 0;
  margin-left: 2px;
  border-left: 2.5px solid #7AC6B7;
  vertical-align: bottom;
  animation: blink 1s steps(1) infinite;
  background: none;
  font-size: inherit;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.webdev-glow {
  position: relative;
  z-index: 1;
}
.webdev-glow::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%) scale(1);
  width: 110%;
  height: 60%;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, #22d3ee88 0%, #22d3ee33 70%, transparent 100%);
  filter: blur(10px);
  opacity: 0.5;
  z-index: -1;
  animation: webdev-glow-anim 2.5s ease-in-out infinite alternate;
}
@keyframes webdev-glow-anim {
  0% { opacity: 0.4; filter: blur(8px); transform: translate(-50%, -50%) scale(1);}
  100% { opacity: 0.6; filter: blur(14px); transform: translate(-50%, -50%) scale(1.04);}
}

/* Bintang */
.star {
  position: absolute;
  background: radial-gradient(circle, #fff 70%, #a7f3f3 100%);
  border-radius: 50%;
  opacity: 0.92;
  box-shadow:
    0 0 6px 2px #67e8f9cc,
    0 0 1.5px 0.5px #fff;
  animation: twinkle 3.5s infinite alternate, star-move 18s linear infinite;
  pointer-events: none;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.92; filter: blur(0.5px);}
  50% { opacity: 0.55; filter: blur(1.5px);}
}
/* Animasi gerak halus bintang */
@keyframes star-move {
  0% { transform: translateY(0) scale(1);}
  100% { transform: translateY(-10px) scale(1.04);}
}

/* Hapus style planet dan roket jika tidak digunakan */
</style>
