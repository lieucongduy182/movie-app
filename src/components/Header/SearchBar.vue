<template>
    <div class="flex mt-6 relative">
        <input
            type="text"
            class="rounded-full bg-gray-600 px-8 w-50 h-10 mr-4 outline-none focus:outline-gray-700"
            placeholder="Search ..."
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

        <div v-if="false" class="absolute top-12 bg-gray-600 w-64 rounded">
            <ul class="p-2">
                <li class="flex items-center py-2 border-b border-gray-500">
                    <img
                        src="@/assets/images/joker.jpg"
                        class="w-12 object-cover"
                        alt=""
                    />
                    <span class="ml-3">Joker</span>
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
export default {};
</script>
<style lang=""></style>
