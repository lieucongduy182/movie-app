<template>
    <div>
        <img :src="getProfileImage" alt="" class="object-cover" />
        <span class="text-gray-300">{{ cast.character }}</span>
    </div>
</template>
<script>
export default {
    props: ['cast'],
    computed: {
        getProfileImage() {
            if (this.cast.profile_path !== null) {
                return `https://image.tmdb.org/t/p/w500${this.cast.profile_path}`;
            } else {
                return `http://via.placeholder.com/350x450`;
            }
        },
    },
};
</script>
