<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useMovieStore } from '../stores/useMovieStore';


const props = defineProps<{
    id: string
}>();

const movieStore = useMovieStore();

onMounted(() => {
    movieStore.fetchMovieById(props.id);
})

const posterUrl = computed(() => {
    return movieStore.currentMovie?.Poster !== 'N/A' ? movieStore.currentMovie?.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'
})

const actorsList = computed(() => {
    return movieStore.currentMovie?.Actors.split(', ') || [];
})
</script>
<template>
    <section class="movie-detail">
        <div v-if="movieStore.isLoading" class=" movie-detail__loading">Загрузка данных о фильме</div>
        <div v-else-if="movieStore.error" class="movie-detail__err">{{ movieStore.error }}</div>
        <div v-else-if="movieStore.currentMovie" class="movie-detail__container">
            <div class="movie-detail__data">
                <h2 class="movie-detail__title">{{ movieStore.currentMovie.Title }}</h2>
                <div class="movie-detail__poster">
                    <img class="movie-detail__img" :src="posterUrl" :alt="movieStore.currentMovie?.Title">
                </div>
                <div class="movie-detail__year">Год - {{ movieStore.currentMovie?.Year }}</div>
                <div class="movie-detail__runtime">Время продолжительности - {{ movieStore.currentMovie?.Runtime }}
                </div>
                <div class="movie-detail__genre">Жанр - {{ movieStore.currentMovie?.Genre }}</div>
                <div class="movie-detail__rating">Рейтинг - {{ movieStore.currentMovie?.imdbRating }}</div>
                <div class="movie-detail__plot"> Описание - {{
                    movieStore.currentMovie?.Plot }}</div>
                <div class="movie-detail__director">Директор - {{ movieStore.currentMovie?.Director }}</div>
                <div class="movie-detail__writer">Писатель - {{ movieStore.currentMovie?.Writer }}</div>
                <p>Актеры:</p>
                <ul class="movie-detail__actors">
                    <li v-for="actor in actorsList" :key="actor" class="movie-detail__authors-item">{{ actor }}
                    </li>
                </ul>
            </div>
            <RouterLink to="/">Возврат на главную</RouterLink>
        </div>
    </section>
</template>

<style>
.movie-detail__data {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>