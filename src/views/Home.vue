<template>
    <div>
        <PopularMovies />
        <UpComingVideo />
    </div>
</template>

<script>
/* eslint-disable */
import PopularMovies from './PopularMovies.vue';
import UpComingVideo from './UpComingVideo.vue';
export default {
    name: 'HomeView',
    components: {
        PopularMovies,
        UpComingVideo,
    },
};
</script>
