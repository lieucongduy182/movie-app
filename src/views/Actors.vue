<template>
    <div class="container mx-auto px-8 py-8">
        <h2 class="uppercase text-orange-500 font-semibold text-lg">
            Popular Actors
        </h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
            <ActorItem
                v-for="actor in actors"
                :key="actor.id"
                :actor="actor"
                :known_for="actor.known_for"
            />
        </div>
        <div class="flex mt-10 justify-center">
            <a href="" @click.prevent="previous()">Previous</a>
            <a href="" @click.prevent="next()" class="ml-5"> Next</a>
        </div>
        <!-- <div class="mt-10 flex justify-center">
            <div class="spinner"></div>
        </div> -->
    </div>
</template>
<script>
import ActorItem from '@/components/Item/ActorItem.vue';

let currentPage = 1;

export default {
    components: {
        ActorItem,
    },
    data() {
        return {
            actors: [],
        };
    },
    mounted() {
        this.fetchActors(currentPage);
        // this.scroll()
    },
    methods: {
        async fetchActors(page) {
            try {
                const response = await this.$http.get(
                    `/person/popular?page=${page}`
                );
                this.actors = response.data.results
                // this.actors.push(...response.data.results);
            } catch (error) {
                console.log(error);
            }
        },
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow =
                    document.documentElement.scrollTop + window.innerHeight ===
                    document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    currentPage += 1;
                    this.fetchActors((currentPage += 1));
                }
            };
        },
        next() {
            currentPage += 1;
            this.fetchActors(currentPage);
        },
        previous() {
            currentPage -= 1;
            this.fetchActors(currentPage);
        },
    },
};
</script>
