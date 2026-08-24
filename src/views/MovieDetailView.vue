<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useMovieStore } from '../stores/useMovieStore';

const props = defineProps<{
    id: string;
}>();

const movieStore = useMovieStore();

onMounted(() => {
    movieStore.fetchMovieById(props.id);
});

const posterUrl = computed(() => {
    return movieStore.currentMovie?.Poster !== 'N/A'
        ? movieStore.currentMovie?.Poster
        : 'https://via.placeholder.com/300x450?text=No+Poster';
});

const actorsList = computed(() => {
    return movieStore.currentMovie?.Actors?.split(', ') || [];
});
</script>

<template>
    <section class="movie-detail">
        <div v-if="movieStore.isLoading" class="movie-detail__state movie-detail__state--loading">
            Загрузка данных о фильме...
        </div>

        <div v-else-if="movieStore.error" class="movie-detail__state movie-detail__state--error">
            {{ movieStore.error }}
        </div>

        <div v-else-if="movieStore.currentMovie" class="movie-detail__container">
            <RouterLink to="/" class="movie-detail__back-btn">
                ← Вернуться на главную
            </RouterLink>

            <div class="movie-detail__content">
                <aside class="movie-detail__sidebar">
                    <div class="movie-detail__poster-wrapper">
                        <img class="movie-detail__poster" :src="posterUrl" :alt="movieStore.currentMovie.Title" />
                    </div>
                </aside>

                <main class="movie-detail__main">
                    <h1 class="movie-detail__title">{{ movieStore.currentMovie.Title }}</h1>

                    <div class="movie-detail__badges">
                        <span class="movie-detail__badge">{{ movieStore.currentMovie.Year }}</span>
                        <span class="movie-detail__badge">{{ movieStore.currentMovie.Runtime }}</span>
                        <span class="movie-detail__badge movie-detail__badge--accent">{{ movieStore.currentMovie.Genre
                        }}</span>
                        <span class="movie-detail__badge movie-detail__badge--rating">★ {{
                            movieStore.currentMovie.imdbRating }}</span>
                    </div>

                    <p class="movie-detail__plot">{{ movieStore.currentMovie.Plot }}</p>

                    <dl class="movie-detail__meta">
                        <div class="movie-detail__meta-row">
                            <dt>Режиссер:</dt>
                            <dd>{{ movieStore.currentMovie.Director }}</dd>
                        </div>
                        <div class="movie-detail__meta-row">
                            <dt>Сценарий:</dt>
                            <dd>{{ movieStore.currentMovie.Writer }}</dd>
                        </div>
                    </dl>

                    <div class="movie-detail__actors-block">
                        <h3 class="movie-detail__section-title">В главных ролях</h3>
                        <ul class="movie-detail__actors">
                            <li v-for="actor in actorsList" :key="actor" class="movie-detail__actor-tag">
                                {{ actor }}
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    </section>
</template>