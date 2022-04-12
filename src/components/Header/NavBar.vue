<template>
    <div class="flex">
        <img src="@/assets/images/logo.png" alt="" />
        <ul class="flex mt-7">
            <li>
                <router-link to="/movies" class="ml-5">Movies</router-link>
            </li>
            <li>
                <router-link to="/actors" class="ml-5">Actors</router-link>
            </li>
            <li>
                <router-link to="/profile" class="ml-5">Profile</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
