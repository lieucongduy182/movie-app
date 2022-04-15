<template>
    <div>
        <img :src="imageBackDrops" alt="" class="object-cover" />
    </div>
</template>
<script>
export default {
    props: ['image'],
    computed: {
        imageBackDrops() {
            if (this.image.profile_path !== null) {
                return `https://image.tmdb.org/t/p/w500${this.image.file_path}`;
            } else {
                return `http://via.placeholder.com/350x450`;
            }
        },
    },
};
</script>