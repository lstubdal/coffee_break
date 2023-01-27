<template>
    <div class="recommendation">
        <h2>Recommend a book...</h2>

        <div class="bookInfo">
            <label for="title" class="bookInfo__label">Title</label>
            <input id="title" type="text" placeholder="The books title" v-model="title"  class="bookInfo__input"/>

            <label for="author" class="bookInfo__label">Author</label>
            <input id="author" type="text" placeholder="The author of the book" v-model="author"  class="bookInfo__input"/>

            <label for="description" class="bookInfo__label">Why do you recommend the book?</label>
            <input id="description" type="text" placeholder="Short description" v-model="description" class="bookInfo__input" />

            <select id="category" @change="getCategory()">
                <option value="selectCategory">Select genre of book</option>
                <option :value="genre" v-for="genre in genres">{{ genre }}</option>
            </select>
            
            <button @click="share">SHARE</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                author: '',
                description: '',
                category: '',
                rating: 0,
                genres: ['Fantasy', 'Romance', 'Dystopian', 'Mystery', 'Thriller/Horror', 'Sci-fi', 'Self-help', 'Art', 'Health', 'History', 'Motivational' ]
                // image?
            }
        },

        methods: {
            share() {
                console.log(this.title, this.author, this.description);
            },

            getCategory(event) {
                console.log(event.target.value)
                return this.category = event.target.value;
            }
        }
    }
</script>
<style>
    .recommendation {
        padding: 100px;
    }

    .bookInfo {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .bookInfo__label {
        padding: 5px;
    }

    .bookInfo__input {
        margin: 10px;
        padding: 5px;
    }

    .bookInfo > select {
        margin: 10px;
        padding: 10px;
    }
</style>