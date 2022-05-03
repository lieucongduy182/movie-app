<template>
    <div class="relative">
        <button @click="OpenDropDown()" class="focus:outline-none">
            <img
                src="@/assets/images/avatar.jpg"
                alt=""
                class="h-10 w-10 rounded-full object-cover"
            />
        </button>

        <button
            class="fixed top-0 bottom-0 left-0 right-0 w-full h-full opacity-40 bg-black cursor-default"
            v-if="isOpen"
            @click="isOpen = false"
        ></button>

        <div
            class="absolute bg-white right-0 mr-3 shadow-xl rounded-lg w-40 mt-2"
            v-if="this.isOpen"
        >
            <a href="" class="text-gray-500 block hover:bg-indigo-500 px-4 py-4"
                >Account Setting</a
            >
            <a href="" class="text-gray-500 block hover:bg-indigo-500 px-4 py-4"
                >Support</a
            >
            <a href="" class="text-gray-500 block hover:bg-indigo-500 px-4 py-4"
                >Log Out</a
            >
        </div>
    </div>
</template>

<script>
export default {
    created() {
        const handleEscape = (e) => {
            if (e.key == 'Esc' || e.key == 'Escape') {
                return (this.isOpen = !this.isOpen);
            }
        };
        document.addEventListener('keydown', handleEscape);
        this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape);
        });
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        OpenDropDown() {
            return (this.isOpen = !this.isOpen);
        },
    },
};
</script>
