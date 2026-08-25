<script setup lang="ts">
import type { Movie } from '../types/movie';
import { useFavoritesStore } from '../stores/useFavoritesStore';

const props = defineProps<{
    movie: Movie;
}>();

const favoritesStore = useFavoritesStore();
</script>

<template>
    <div class="movie-card">
        <RouterLink :to="`/movie/${props.movie.imdbID}`" class="movie-card__link">
            <img :src="props.movie.Poster" :alt="props.movie.Title" class="movie-card__poster" />
            <h3 class="movie-card__title">{{ props.movie.Title }}</h3>
        </RouterLink>

        <div class="movie-card__footer">
            <span class="movie-card__year">{{ props.movie.Year }}</span>

            <button type="button" class="movie-card__favorite-btn"
                :class="{ 'movie-card__favorite-btn--active': favoritesStore.isFavorite(props.movie.imdbID) }"
                title="Добавить в избранное" @click.stop="favoritesStore.toggleFavorite(props.movie)">
                ♥
            </button>
        </div>
    </div>
</template>