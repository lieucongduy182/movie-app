<template>
    <div class="container mx-auto mt-5">
        <h2 class="text-4xl font-semibold">Cast</h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-3 gap-4"
        >
            <CastItem
                v-for="(cast, index) in this.cast"
                :key="index"
                :cast="cast"
            />
        </div>
    </div>
</template>

<script>
import CastItem from '../Item/CastItem.vue';
export default {
    props: ['cast'],
    components: {
        CastItem,
    },
};
</script>

<style></style>
