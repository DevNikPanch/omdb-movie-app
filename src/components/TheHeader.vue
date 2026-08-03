<script setup lang="ts">
import { ref } from 'vue';
import { useMovieStore } from '../stores/useMovieStore';

const movieStore = useMovieStore();

const searchQueryText = ref<string>('');

const handleSearch = () => {
    movieStore.searchMovies(searchQueryText.value);
}

</script>

<template>
    <header class="header">
        <div class="header__container">
            <h1 class="header__logo">Film<span>Hub</span></h1>

            <form class="header__search" @submit.prevent="handleSearch">
                <input v-model="searchQueryText" type="text" placeholder="Поиск фильмов (например, Matrix)..."
                    class="header__input" />
                <button type="submit" class="header__button">
                    Найти
                </button>
            </form>
        </div>
    </header>
</template>
