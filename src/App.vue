<template>
    <div class="container mx-auto">
        <div class="flex justify-between border-b border-gray-600">
            <NavBar />
            <SearchBar />
        </div>
        <router-view />
    </div>
</template>

<script>
import NavBar from '@/components/Header/NavBar.vue';
import SearchBar from '@/components/Header/SearchBar.vue';
export default {
    components: {
        NavBar,
        SearchBar,
    },
};
</script>

<style></style>
