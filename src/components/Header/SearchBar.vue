<template>
    <div class="flex mt-6 relative">
        <input
            ref="searchBox"
            type="text"
            class="rounded-full bg-gray-600 px-8 w-50 h-10 mr-4 outline-none focus:outline-gray-700"
            placeholder="Search ..."
            v-model="searchTerm"
            @input="debounceSearch"
            @focus="handleFocus"
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
            <ul class="p-2" v-if="showSearchrResult">
                <li
                    v-for="(movie, index) in this.searchResults"
                    :key="index"
                    @click="showSearchrResult = false"
                >
                    <router-link
                        :to="`/movie/${movie.id}`"
                        class="flex items-center py-2 border-b border-gray-500"
                    >
                        <img
                            :src="imagePostPath(movie.poster_path)"
                            class="w-12 object-cover"
                        />
                        <span class="ml-3">{{ movie.title }}</span>
                    </router-link>
                </li>
            </ul>
            <ul
                class="px-3"
                v-if="
                    showSearchrResult == true && this.searchResults.length == 0
                "
            >
                <li>No Result Found {{ this.searchTerm }}</li>
            </ul>
        </div>
        <AccountDropDown />
    </div>
</template>
<script>
import AccountDropDown from './AccountDropDown.vue';
export default {
    components: {
        AccountDropDown,
    },
    data() {
        return {
            searchTerm: '',
            searchResults: [],
            showSearchrResult: false,
        };
    },
    mounted() {
        this.keyboardEvents();
    },
    methods: {
        handleFocus() {
            if (this.searchTerm != '') {
                this.showSearchrResult = true;
            }
        },
        keyboardEvents() {
            window.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) {
                    this.showSearchrResult = false;
                }
            });
            window.addEventListener('keypress', (e) => {
                if (e.keyCode == 47) {
                    e.preventDefault();
                    this.$refs.searchBox.focus();
                }
            });
            window.addEventListener('keydown', (e) => {
                if (e.keyCode == 27) {
                    this.showSearchrResult = false;
                    this.searchTerm = '';
                }
            });
        },
        async fetchSearchTerm(term) {
            try {
                const response = await this.$http.get(
                    `/search/movie?query=${term}`
                );
                this.searchResults = response.data.results;
                this.showSearchrResult = this.searchResults ? true : false;
            } catch (error) {
                this.showSearchrResult = false;
                console.log(error);
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
