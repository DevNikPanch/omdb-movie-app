import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Movie, MovieDetail, SearchResponse } from '../types/movie';

export const useMovieStore = defineStore('movie', () => {
    const movies = ref<Movie[]>([]);
    const isLoading = ref<boolean>(false);

    const currentMovie = ref<MovieDetail | null>(null);

    const error = ref<string | null>(null);

    async function searchMovies(query: string) {
        if (!query.trim()) return;
        error.value = null;
        isLoading.value = true;
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=e6867c0a&s=${encodeURIComponent(query)}`,
            );

            if (!response.ok) throw new Error('Ошибка сети!');

            const data: SearchResponse = await response.json();

            if (data.Response === 'True' && data.Search) {
                movies.value = data.Search;
            } else {
                movies.value = [];
                error.value = data.Error || 'Фильмы не найдены';
            }
        } catch (err) {
            error.value = 'Не удалось загрузить данные. Проверьте соединение.';
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    async function fetchMovieById(id: string) {
        currentMovie.value = null;
        if (!id.trim()) return;
        error.value = null;
        isLoading.value = true;

        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=e6867c0a&i=${id}`);
            if (!response.ok) throw new Error('Ошибка сети!');

            const data: MovieDetail = await response.json();

            if (data.Response === 'True') {
                currentMovie.value = data;
            } else {
                currentMovie.value = null;
                error.value = data.Error || 'Фильмы не найдены';
            }
        } catch (err) {
            error.value = 'Не удалось загрузить данные. Проверьте соединение.';
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    const searchQuery = ref<string>('');

    const filteredMovies = computed(() => {
        const query = searchQuery.value.trim().toLowerCase();

        if (!query) return movies.value;
        return movies.value.filter((item) => {
            return item.Title.toLowerCase().includes(query);
        });
    });

    return {
        movies,
        isLoading,
        error,
        searchMovies,
        fetchMovieById,
        currentMovie,
        searchQuery,
        filteredMovies,
    };
});
