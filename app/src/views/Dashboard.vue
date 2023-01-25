<template>
   <div v-if="user.loggedIn" class="dashboard--loggedIn">
      <p>What have others been reading?</p>
   </div>

   <div v-else class="dashboard">

   </div>
</template>
 
<script>
   import { getAuth } from 'firebase/auth';

   export default {
        created() {
            // get the current user by setting an observer on the Auth object:
            const auth = getAuth()
            auth.onAuthStateChanged(user => {
                this.$store.dispatch('fetchUser', user)
            })
        },

        computed: {
            user() {
                return this.$store.getters.getUser
            },
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
      font-family: var(--second-font);
      font-weight: 400;
      font-size: 2.4em;
      padding: 100px;
   }
</style>
 