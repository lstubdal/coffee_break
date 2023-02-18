<template>
    <div class="book">
        <p class="book__author">{{ author }}</p>
        <h3 class="book__title">{{ title }}</h3>
        <p class="book__recommender"><i>written by {{ recommender }}</i></p>

        <!-- read more toggle -->
        <p v-if="!readMoreCliked" class="book__description">{{ description.slice(0, 300) }} <button @click="toggleReadMore" class="book__description-readmore">[...Read more]</button></p> 
        <p v-else class="book__description">{{ description }} <button @click="toggleReadMore" class="book__description-readmore">[...Read less]</button></p>

        <p class="book__rating">{{ rating }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                readMoreCliked: false
            }
        },

        methods: {
            toggleReadMore() {
                this.readMoreCliked = !this.readMoreCliked;
            }
        },

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
        height: 100%;
        display: flex;
        flex-direction: column;
        font-family: var(--second-font);
        padding: 23px;
        border: 2px solid var(--text);
        position: relative;
        /* figure out how to only expand one component when read more */
    }

    .book__recommender {
        font-size: 1em;
        opacity: 70%;
    }

    .book__title {
        font-size: 2em;
    }

    .book__author {
        font-weight: 500;
    }

    .book__description {
        padding: 20px 0px;
    }

    .book__rating {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 1.3em;
        font-weight: 500;
        padding: 20px;
    }

    .book__description-readmore {
        background: none;
        border: none;
        color: var(--text);
        font-family: var(--second-font);
        font-weight: 500;
        cursor: pointer;
    }

    .book__description-readmore:hover {
        color: var(--soft-highlight);
    }
</style>