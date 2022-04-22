<template>
    <div class="container mx-auto px-8 py-8">
        <h2 class="uppercase text-orange-500 font-semibold text-lg">
            Popular Actors
        </h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
            <ActorItem v-for="actor in actors" :key="actor.id" :actor="actor" />
        </div>
    </div>
</template>
<script>
import ActorItem from '@/components/Item/ActorItem.vue';
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
        this.fetchActors(1);
    },
    methods: {
        async fetchActors(numberPage) {
            try {
                const response = await this.$http.get(
                    `/person/popular?page${numberPage}`
                );
                this.actors = response.data.results;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
