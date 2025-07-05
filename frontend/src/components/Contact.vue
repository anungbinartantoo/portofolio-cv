<script setup>
defineOptions({ name: 'ContactSection' });
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRenderLoop } from '@tresjs/core'
const y = ref(0)
useRenderLoop(() => {
  y.value += 0.01
})

// --- Animasi interaktif mengikuti gerak cursor ---
const cardRef = ref(null)
const rotateX = ref(0)
const rotateY = ref(0)

function handleMouseMove(e) {
  const card = cardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  // Batasi sudut agar tidak terlalu ekstrim
  rotateY.value = ((x - centerX) / centerX) * 12
  rotateX.value = -((y - centerY) / centerY) * 12
}
function handleMouseLeave() {
  rotateX.value = 0
  rotateY.value = 0
}

onMounted(() => {
  const card = cardRef.value
  if (card) {
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
  }
})
onBeforeUnmount(() => {
  const card = cardRef.value
  if (card) {
    card.removeEventListener('mousemove', handleMouseMove)
    card.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<template>
  <section id="kontak" class="py-24 bg-black min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 px-2 md:px-8">
      <!-- Form di kiri -->
      <div class="flex-1 flex flex-col justify-center">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 text-left">Contact</h2>
        <p class="text-lg text-gray-400 mb-8 text-left">
          Jangan ragu untuk terhubung atau bertanya.<br>
          Terbuka untuk kolaborasi, project baru, atau diskusi teknologi!
        </p>
        <form
          class="bg-[#23272d] rounded-xl p-6 shadow border border-gray-700 flex flex-col gap-4 animate-fade-in"
          @submit.prevent
        >
          <input
            type="text"
            placeholder="Nama"
            class="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-teal-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            class="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-teal-400"
            required
          />
          <textarea
            placeholder="Pesan"
            class="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-teal-400 resize-none"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            class="bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Kirim Pesan
          </button>
        </form>
        <div class="flex gap-6 mt-6">
          <a
            href="https://github.com/anungbinartantoo"
            target="_blank"
            class="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
            aria-label="GitHub"
          >
            <svg class="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path
                d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.88.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
              />
            </svg>
            <span class="hidden sm:inline transition group-hover:underline">GitHub</span>
          </a>
          <a
            href="https://id.linkedin.com/in/anung-binartanto-983175292"
            target="_blank"
            class="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"
              />
            </svg>
            <span class="hidden sm:inline transition group-hover:underline">LinkedIn</span>
          </a>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-center min-h-[400px] md:pl-20">
        <div
          ref="cardRef"
          class="relative w-full max-w-xs aspect-[3/4] bg-black rounded-3xl shadow-2xl border border-cyan-400/60 p-0 flex flex-col items-center overflow-hidden"
          :style="`
            box-shadow:
              0 0 18px 0 #00fff755,
              0 1.5px 8px 0 #0003,
              0 0.5px 1.5px 0 #0002,
              ${rotateX !== 0 || rotateY !== 0 ? '0 4px 16px 0 #00fff744, 0 0 12px 2px #00fff722' : ''};
            transform:
              perspective(900px)
              rotateX(${rotateX * 1.1}deg)
              rotateY(${rotateY * 1.1}deg)
              scale3d(${1 + (Math.abs(rotateX) + Math.abs(rotateY)) * 0.006}, ${1 + (Math.abs(rotateX) + Math.abs(rotateY)) * 0.006}, 1);
            transition: transform 0.32s cubic-bezier(.4,0,.2,1), box-shadow 0.32s cubic-bezier(.4,0,.2,1);
          `"
        >
          <!-- Glow border effect -->
          <div class="absolute inset-0 rounded-3xl pointer-events-none border-2 border-cyan-400/40" style="box-shadow: 0 0 40px 0 #00fff7a0; z-index:1"></div>
          <!-- Name & Title -->
          <div class="relative z-10 flex flex-col items-center pt-8 pb-2 px-6">
            <h3 class="text-3xl font-extrabold text-white mb-1 text-center drop-shadow">Anung Binartanto</h3>
            <p class="text-base text-cyan-200 font-semibold mb-2 text-center drop-shadow">Fullstack Developer</p>
          </div>
          <!-- Foto profil lebih naik dan lebih besar -->
          <div class="relative z-20 flex justify-center items-center w-full" style="margin-top: -60px;">
            <img
              src="/profile.png"
              alt="Anung Binartanto"
              class="w-56 h-72 object-cover rounded-xl"
              style="box-shadow: none;"
            />
          </div>
          <!-- Glass info bar -->
          <div class="absolute bottom-0 left-0 w-full px-4 pb-6 z-20">
            <div class="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between px-3 py-2 shadow-lg">
              <div class="flex items-center gap-3">
                <img src="/profile.png" alt="mini avatar" class="w-8 h-8 object-cover border border-white/20 rounded-xl" />
                <div>
                  <div class="text-white/90 font-medium text-sm">@anungbinartanto</div>
                  <div class="text-cyan-200 text-xs">Online</div>
                </div>
              </div>
              <a
                href="https://wa.me/6281390830955"
                target="_blank"
                class="bg-white/10 border border-white/20 rounded-xl p-2 text-white hover:bg-cyan-400/30 transition flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <!-- WhatsApp SVG Logo Only -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.711.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.889 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.088c0 2.13.557 4.21 1.615 6.033L.057 24l6.063-1.615a11.876 11.876 0 005.929 1.515h.005c6.554 0 11.989-5.435 11.991-12.088a11.86 11.86 0 00-3.486-8.485z"/>
                </svg>
              </a>
            </div>
          </div>
          <!-- Background pattern (optional) -->
          <div class="absolute inset-0 z-0 pointer-events-none"></div>
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
  opacity: 0;
  transform: translateY(40px);
  animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) forwards;
}
</style>
