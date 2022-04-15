<template>
    <div class="container mx-auto mt-5">
        <h2 class="text-4xl font-semibold">Images</h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-4"
        >
            <ImageItem v-for="(image, index) in images" :key="index" :image="image" />
        </div>
    </div>
</template>
<script>
import ImageItem from '../Item/ImageItem.vue';
export default {
    props: ['images'],
    components: {
        ImageItem,
    },
};
</script>
<style lang=""></style>
