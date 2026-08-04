import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Movie, SearchResponse } from '../types/movie';

export const useMovieStore = defineStore('movie', () => {
    const movies = ref<Movie[]>([]);
    const isLoading = ref<boolean>(false);
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
    return { movies, isLoading, error, searchMovies };
});
