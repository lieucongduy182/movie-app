<template>
    <div class="mt-5 mx-5">
        <h2 class="uppercase text-yellow-500 text-lg font-semibold">
            Popular Movies
        </h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
            <MovieItem
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
                :genres="genres"
            />
        </div>
    </div>
</template>
<script>
import MovieItem from '../components/Item/MovieItem.vue';
export default {
    components: {
        MovieItem,
    },
    data() {
        return {
            movies: [],
            genres: [],
        };
    },
    async mounted() {
        this.fetchGenres();
        this.fetchPopularMovies();
    },
    methods: {
        async fetchGenres() {
            try {
                const response = await this.$http.get('/genre/movie/list');
                this.genres = response.data.genres;
            } catch (error) {
                console.log(error);
            }
        },
        async fetchPopularMovies() {
            try {
                const response = await this.$http.get('/movie/popular');
                this.movies = response.data.results;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style></style>
