<template>
   <div class="profile">
      <RecommendButton />

      <section>
         
      </section>
      <p>Your recommended books</p>

   </div>
 </template>
 
 <script>
    import { getAuth } from 'firebase/auth';
    import RecommendButton from '../components/RecommendButton.vue'

    export default {
        created() {
            // get the current user by setting an observer on the Auth object:
            const auth = getAuth()
            auth.onAuthStateChanged(user => {
                this.$store.dispatch('fetchUser', user)
            })
        },

        components: {
         RecommendButton
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
      height: 100%;
      background-color: var(--background);
      color: var(--text);
   }
</style> 