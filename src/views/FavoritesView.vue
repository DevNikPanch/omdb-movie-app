<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MovieCard from '../components/MovieCard.vue';
import { useFavoritesStore } from '../stores/useFavoritesStore';

const favoritesStore = useFavoritesStore();

</script>

<template>
    <section class="favorites">
        <div class="favorites__container">
            <h1 class="favorites__title">Избранные фильмы</h1>
            <div v-if="!favoritesStore.countFavoritesMovies" class="favorites__empty">
                <p class="favorites__empty-text">Ваш список избранного пуст</p>
                <RouterLink to="/" class="favorites__empty-link"> Найти фильмы </RouterLink>
            </div>
            <div v-else class="favorites__grid">
                <MovieCard v-for="movie in favoritesStore.favoritesMovies" :key="movie.imdbID" :movie="movie" />
            </div>
        </div>
    </section>
</template>