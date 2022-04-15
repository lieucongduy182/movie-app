<template>
    <div class="flex mt-6 relative">
        <input
            type="text"
            class="rounded-full bg-gray-600 px-8 w-50 h-10 mr-4 outline-none focus:outline-gray-700"
            placeholder="Search ..."
            v-model="searchTerm"
            @input="debounceSearch"
        />
        <div class="absolute top-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mt-3 ml-2 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>

        <div class="absolute top-12 bg-gray-600 w-64 rounded">
            <ul class="p-2" v-if="this.searchResults.length != 0">
                <li
                    class="flex items-center py-2 border-b border-gray-500"
                    v-for="(movie, index) in this.searchResults"
                    :key="index"
                >
                    <img
                        :src="imagePostPath(movie.poster_path)"
                        class="w-12 object-cover"
                        alt=""
                    />
                    <span class="ml-3">{{ movie.title }}</span>
                </li>
            </ul>
            <ul class="px-3">
                <li v-if="noResultFound && this.searchResults.length == 0">
                    No Result Found {{ this.searchTerm }}
                </li>
            </ul>
        </div>

        <img
            src="@/assets/images/avatar.jpg"
            alt=""
            class="h-10 w-10 rounded-full object-cover"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchTerm: '',
            searchResults: [],
            noResultFound: false,
        };
    },
    methods: {
        async fetchSearchTerm(term) {
            try {
                const response = await this.$http.get(
                    `/search/movie?query=${term}`
                );
                this.searchResults = response.data.results;
                this.noResultFound = this.searchResults ? true : false;
            } catch (error) {
                this.noResultFound = false;
                this.searchResults = [];
            }
        },
        debounceSearch() {
            setTimeout(() => {
                this.fetchSearchTerm(this.searchTerm);
            }, 500);
        },
        imagePostPath(poster_path) {
            if (poster_path) {
                return `https://image.tmdb.org/t/p/w500${poster_path}`;
            } else {
                return `http://via.placeholder.com/50x75`;
            }
        },
    },
};
</script>
<style lang=""></style>
