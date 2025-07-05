// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll';
import Tres from '@tresjs/core';

const app = createApp(App)
app.directive('animate-on-scroll', animateOnScroll);
app.use(router);
app.use(Tres);
app.mount('#app');
