import { createApp } from 'vue'
import App from './App.vue'

import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
register();

import './assets/scss/all.scss'

createApp(App).mount('#app')
