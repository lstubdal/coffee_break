<template>
   <div v-if="user.loggedIn" class="dashboard--loggedIn">
      <p class="dashboard__heading">What have others been reading?</p>

      <div class="books" v-if="!loading">
         <Book 
            :recommender="book.recommender"
            :title="book.title"
            :author="book.author"
            :description="book.description"
            :category="book.category"
            :rating="book.rating"
            v-for="book in this.result"
         />
      </div>
   </div>

   <div v-else class="dashboard">

   </div>
</template>
 
<script>
   import { getAuth } from 'firebase/auth';
   import sanityMixin from '../mixins/sanityMixin';
   import allBooks from '../groq/allBooks.groq?raw';
   import Book from '../components/Book.vue';

   export default {
      mixins: [sanityMixin],
      async created() {
         // get the current user by setting an observer on the Auth object:
         const auth = getAuth()
         auth.onAuthStateChanged(user => {
               this.$store.dispatch('fetchUser', user)
         })

         await this.sanityFetch(allBooks);
         this.$store.dispatch('updateBooks', this.result)
        },

        computed: {
            user() {
                return this.$store.getters.getUser
            },
        }, 
        
        components: {
         Book
        }
    }
</script>
<style>
   .dashboard {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("/images/background.jpg");
      background-size: cover;
   }

   .dashboard--loggedIn {
      padding: 80px;
      background-color: var(--background);
      color: var(--text)
   }

   .dashboard__heading {
      font-family: var(--second-font);
      font-weight: 400;
      font-size: 2.4em;
      padding: 50px 0px;
   }

   .books {
      display: grid;
      grid-template-columns: repeat(3, 1fr );
      grid-auto-rows: auto;
      gap: 30px;
   }
</style>
 