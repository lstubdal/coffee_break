<template>
   <div class="profile">
      <RecommendButton  class="profile__button" />

      <p class="profile__title">Your recommended books</p>
      <section>
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


      </section>

   </div>
 </template>
 
 <script>

   import RecommendButton from '../components/RecommendButton.vue';
   import { getAuth } from 'firebase/auth';
   import sanityMixin from '../mixins/sanityMixin';
   import usersBooksQuery from '../groq/usersBooks.groq?raw';
   import Book from '../components/Book.vue';


   export default {
      mixins: [sanityMixin],

      async created() {

         const auth = getAuth()
            auth.onAuthStateChanged(user => {
               this.$store.dispatch('fetchUser', user).then(() => {
                  console.log('1. auth: ', user.displayName)
                  this.getUsersBooks(user.displayName)
                  
               }); 
            })
      },

      components: {
         RecommendButton,
         Book
      },

      methods: {
         async getUsersBooks(username) {
            await this.sanityFetch(usersBooksQuery, {
               username: username
            })

            console.log('2. ', this.result)

         }
      },

      computed:{
         user() {
            return this.$store.getters.getUser
         },

         books() {
            return this.$store.getters.getAllBooks;
         }
         

         
      }
   }
 </script>
<style>
   .profile {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: var(--second-font);
      font-weight: 300;
      padding: 100px;
      height: 200vh;
      background-color: var(--background);
      color: var(--text);
   }

   .profile__button {
      position: fixed;
      right: 70;
      bottom: 70;
   }

   .profile__title {
      font-size: 1.9em;
      padding: 30px;
   }
</style> 