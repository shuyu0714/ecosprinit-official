// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
register();

import './assets/scss/all.scss'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App)

// createApp(App).mount('#app')
