<script setup lang="ts">
import { useMovieStore } from '../stores/useMovieStore';

const movieStore = useMovieStore();

const handleSearch = () => {
    movieStore.searchMovies(movieStore.searchQuery);
}

</script>

<template>
    <header class="header">
        <div class="header__container">
            <h1 class="header__logo">Film<span>Hub</span></h1>

            <form class="header__search" @submit.prevent="handleSearch">
                <div class="header__search-field">
                    <input v-model="movieStore.searchQuery" type="text"
                        placeholder="Поиск фильмов (например, Matrix)..." class="header__input" />
                    <button v-if="movieStore.searchQuery" type="button" class="header__button--clear" title="Очистить"
                        @click="movieStore.searchQuery = ''">
                        ✕
                    </button>
                </div>

                <button type="submit" class="header__button">
                    Найти
                </button>
            </form>
        </div>
    </header>
</template>
