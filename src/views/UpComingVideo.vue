<template>
    <div id="example" class="container mt-10 mx-5">
        <h2 class="text-xl font-semibold text-yellow-500">UPCOMING VIDEOS</h2>
        <carousel-3d
            :controls-visible="true"
            :clickable="false"
            :listData="upComingVideos"
            :height="500"
            :key="upComingVideos.length"
        >
            <slide
                v-for="(movie, i) in this.upComingVideos"
                :key="i"
                :index="i"
            >
                <figure>
                    <img :src="imagePosterPath(movie.poster_path)" />
                    <figcaption>
                        <router-link :to="`/movie/${movie.id}`">
                            {{ movie.title }}
                        </router-link>
                    </figcaption>
                </figure>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    components: {
        Carousel3d,
        Slide,
    },
    data() {
        return {
            upComingVideos: [],
        };
    },
    mounted() {
        this.fetchUpComingVideos();
    },
    methods: {
        async fetchUpComingVideos() {
            const response = await this.$http.get(`/movie/upcoming`);
            this.upComingVideos = response.data.results.slice(0, 5);
        },
        imagePosterPath(poster_path) {
            if (poster_path) {
                return `https://image.tmdb.org/t/p/w300${poster_path}`;
            } else {
                return `http://via.placeholder.com/375x375`;
            }
        },
    },
};
</script>
<style scoped>
.carousel-3d-container figure {
    margin: 0;
}

.carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
}
</style>
