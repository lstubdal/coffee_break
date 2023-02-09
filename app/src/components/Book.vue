<template>
    <div class="book">
        <p>Recommended by: {{ recommender }}</p>
        <h3>{{ title }}</h3>
        <p>by: {{ author }}</p>
        <p>{{ description }}</p>
        <p>{{ rating }}</p>
    </div>
</template>
<script>
    export default {
        props: {
            recommender: { type: String },
            title: { type: String },
            author: { type: String },
            description: {type: String},
            rating: { type: String }
        }
    }
</script>
<style>
    .book {
        display: flex;
        flex-direction: column;
    }
</style>