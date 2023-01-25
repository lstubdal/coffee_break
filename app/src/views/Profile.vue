<template>
   <div class="profile">
      <p>Your recommended books</p>
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
        }
    }
 </script>
<style>
   .profile {
      display: flex;
      justify-content: center;
      font-family: var(--second-font);
      font-weight: 300;
      font-size: 3em;
      padding: 100px;
      height: 100%;
      background-color: #EAE3D9;
   }
</style> 