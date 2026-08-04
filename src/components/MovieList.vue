<script setup lang="ts">import {
    useMovieStore
}

    from '../stores/useMovieStore';
import MovieCard from './MovieCard.vue';

const movieStore = useMovieStore();

</script>
<template>
    <div v-if="movieStore.isLoading" class="movie-loading">Loading films...</div>
    <div v-else-if="movieStore.error" class="movie-error">
        <p> {
            {
            movieStore.error
            }
            }

        </p>
    </div>
    <div v-else-if="movieStore.movies.length" class="movie-list">
        <div class="movie-list__container">
            <MovieCard v-for="movie in movieStore.movies" :key="movie.imdbID" :movie="movie" />
        </div>
    </div>
    <div v-else class="movie-empty">
        <p>Введите название фильма в поиске выше</p>
    </div>
</template>