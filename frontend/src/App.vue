<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
