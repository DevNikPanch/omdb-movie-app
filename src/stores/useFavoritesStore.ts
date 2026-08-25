import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Movie } from '../types/movie';

export const useFavoritesStore = defineStore('favorites', () => {
    const savedMovies = localStorage.getItem('filmhub_favorites');
    const initialData: Movie[] = savedMovies ? JSON.parse(savedMovies) : [];
    const favoritesMovies = ref<Movie[]>(initialData);

    watch(
        favoritesMovies,
        (newFavorites) => {
            localStorage.setItem('filmhub_favorites', JSON.stringify(newFavorites));
        },
        {
            deep: true,
        },
    );

    const isFavorite = (imdbID: string): boolean => {
        return favoritesMovies.value.some((item) => item.imdbID === imdbID);
    };

    const toggleFavorite = (movie: Movie) => {
        const index = favoritesMovies.value.findIndex((item) => item.imdbID === movie.imdbID);

        if (index !== -1) {
            favoritesMovies.value.splice(index, 1);
        } else {
            favoritesMovies.value.push(movie);
        }
    };

    return { favoritesMovies, isFavorite, toggleFavorite };
});
