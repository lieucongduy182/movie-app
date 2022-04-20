<template>
    <div class="container mx-auto mt-5">
        <h2 class="text-4xl font-semibold">Images</h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-4"
        >
            <div v-for="(image, index) in this.images" :key="index">
                <img
                    :src="imageBackDrops(image)"
                    class="object-cover"
                    @click="showImageModel(image)"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['images'],
    methods: {
        imageBackDrops(image) {
            if (image.file_path) {
                return `https://image.tmdb.org/t/p/w500${image.file_path}`;
            } else {
                return `http://via.placeholder.com/350x450`;
            }
        },
        showImageModel(image) {
            let imageFullPath = '';
            if (image.file_path) {
                imageFullPath = `https://image.tmdb.org/t/p/original${image.file_path}`;
            } else {
                imageFullPath = `http://via.placeholder.com/350x450`;
            }
            this.$emit('on-image-click', imageFullPath);
        },
    },
};
</script>
<style lang=""></style>
