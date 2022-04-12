<template>
    <div
        class="container mx-auto"
    >
        <div class=" flex justify-between border-b border-gray-600">
            <NavBar />
            <SearchBar />
        </div>
        <PopularMovies />
    </div>
</template>

<script>
/* eslint-disable */
import NavBar from '@/components/Header/NavBar.vue';
import SearchBar from '@/components/Header/SearchBar.vue';
import PopularMovies from '@/components/Header/PopularMovies.vue';

export default {
    name: 'HomeView',
    components: {
        NavBar,
        SearchBar,
        PopularMovies,
    },
};
</script>
