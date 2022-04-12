<template>
    <div class="mt-5">
        <h2 class="uppercase text-yellow-500 text-lg font-semibold">
            Popular Movies
        </h2>
        <MovieItem />
    </div>
</template>
<script>
import MovieItem from '../Item/MovieItem.vue';
export default {
    components: {
        MovieItem,
    },
};
</script>
<style></style>
