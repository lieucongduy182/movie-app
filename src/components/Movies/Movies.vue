<template>
    <div>
        <div class="container mx-auto mt-12 flex border-b border-gray-600 pb-3">
            <img :src="imagePostPath" alt="" class="w-64" />
            <div class="ml-24">
                <h2 class="text-4xl font-semibold">{{ movies.title }}</h2>
                <div class="flex">
                    <svg
                        class="fill-current text-yellow-500 w-4 h-4 mt-1"
                        viewBox="0 0 24 24"
                    >
                        <g data-name="Layer 2">
                            <path
                                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                                data-name="star"
                            />
                        </g>
                    </svg>
                    <span class="text-gray-500 ml-2"
                        >{{ movies.vote_average * 10 }} % |
                        {{ movies.release_date }}
                        <span
                            v-for="(genre, index) in movies.genres"
                            :key="index"
                            >{{ genre.name
                            }}<span v-if="movies.genres.length - 1 !== index"
                                >,
                            </span></span
                        ></span
                    >
                </div>
                <p class="mt-5">
                    {{ movies.overview }}
                </p>
                <div class="mt-5">
                    <span> Featured Cast </span>
                    <div class="flex">
                        <div
                            v-for="(crew, index) in this.movies.credits.crew"
                            :key="index"
                        >
                            <div
                                v-if="index < 2"
                                class="mt-5 mr-10 flex flex-col"
                            >
                                <span>{{ crew.name }}</span>
                                <span class="text-sm text-gray-500">{{
                                    crew.job
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <a
                        class="rounded bg-yellow-500 px-5 py-4 inline-flex text-black hover:cursor-pointer"
                        @click.prevent="openModelYoutubeVideo"
                    >
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            />
                        </svg>
                        <span class="ml-3">Play Trailer</span>
                    </a>
                    <a
                        to="#"
                        class="rounded bg-yellow-500 px-5 py-4 inline-flex text-black ml-5"
                    >
                        <img src="@/assets/images/heart-white.png" alt="" />
                        <span class="ml-3">Favourite</span>
                    </a>
                </div>
            </div>
        </div>
        <Cast :cast="this.movies.credits.cast" />
        <Images
            :images="this.movies.images.backdrops"
            v-on:on-image-click="showImageModel"
        />
        <MediaModel
            v-model="modelOpen"
            :mediaURL="mediaURL"
            :isVideo="isVideo"
        />
    </div>
</template>
<script>
import Cast from './Cast.vue';
import Images from './Images.vue';
import MediaModel from '../Models/MediaModel.vue';
export default {
    components: {
        Cast,
        Images,
        MediaModel,
    },
    data() {
        return {
            movies: {
                credits: {
                    crew: {},
                },
                images: {
                    backdrops: {},
                },
                videos: {
                    results: [],
                },
            },
            modelOpen: false,
            isVideo: false,
            mediaURL: '',
        };
    },
    mounted() {
        this.fetchMovie(this.$route.params.id);
    },
    computed: {
        imagePostPath() {
            if (this.movies.poster_path) {
                return `https://image.tmdb.org/t/p/w500${this.movies.poster_path}`;
            } else {
                return `http://via.placeholder.com/350x450`;
            }
        },
        youtubeVideo() {
            if (!this.movies.videos) return;
            return `https://www.youtube.com/embed/${this.movies.videos.results[0].key}`;
        },
    },
    methods: {
        async fetchMovie(movieId) {
            const response = await this.$http.get(
                `/movie/${movieId}?append_to_response=credits,videos,images`
            );
            this.movies = response.data;
        },
        openModelYoutubeVideo() {
            this.mediaURL = this.youtubeVideo;
            this.isVideo = true;
            this.modelOpen = true;
        },
        showImageModel(imageFullPath) {
            this.mediaURL = imageFullPath;
            this.isVideo = false;
            this.modelOpen = true;
        },
    },
};
</script>
