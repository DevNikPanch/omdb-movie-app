<script setup lang="ts">
import { computed } from 'vue';
import type { Movie } from '../types/movie';

const props = defineProps<{
    movie: Movie
}>();

const posterUrl = computed(() => {
    return props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'
})
</script>
<template>
    <RouterLink :to="{ name: 'movie-detail', params: { id: movie.imdbID } }" class="movie-card">
        <div class="movie-card__container">
            <div class="movie-card__poster">
                <img class="movie-card__img" :src="posterUrl" :alt="movie.Title">
            </div>
            <div class="movie-card__info">
                <h3 class="movie-card__title">{{ movie.Title }}</h3>
                <div class="movie-card__meta">
                    <span class="movie-card__year">{{ movie.Year }}</span>
                    <span class="movie-card__type">{{ movie.Type }}</span>
                </div>
            </div>
        </div>
    </RouterLink>
</template>