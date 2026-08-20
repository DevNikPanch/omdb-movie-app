import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetailView from '../views/MovieDetailView.vue';

const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/movie/:id', component: MovieDetailView, name: 'movie-detail', props: true },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
