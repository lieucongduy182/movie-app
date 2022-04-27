<template>
    <div class="mt-3 mx-auto">
        <router-link :to="`/actors/${actor.id}`">
            <img
                :src="imageProfile"
                class="object-cover hover:opacity-75 transition ease-in-out"
            />
        </router-link>
        <h2>{{ actor.name }}</h2>
        <span
            class="text-gray-500 text-sm"
            v-for="(item, index) in known_for"
            :key="index"
        >
            {{ knownFor(item, index) }}
        </span>
    </div>
</template>

<script>
export default {
    props: ['actor', 'known_for'],
    computed: {
        imageProfile() {
            return `https://image.tmdb.org/t/p/w500/${this.actor.profile_path} `;
        },
    },
    mounted() {
        this.knownFor();
    },
    methods: {
        knownFor(item, index) {
            if (this.actor.known_for.length - 1 == index) {
                return item.title;
            } else {
                return item.title + ', ';
            }
        },
    },
};
</script>

<style scoped></style>
