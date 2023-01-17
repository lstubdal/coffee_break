<template>
    <header class="header">
        <Router-Link :to="{ name: 'dashboard' }" class="header__logo">LH</Router-Link>

        <div class="header__user">
            <div class="header__user--loggedIn" v-if="user.loggedIn">
                <p class="header__user">Heisann, <b>{{ firstName }}</b>!</p>
                <button @click.prevent="logOut">Log out</button>
            </div>
            
            <Router-Link :to="{name: 'login'}" v-else class="header__user--notLoggedIn">Log in/Sign up</Router-Link>
        </div>
    </header>
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

            firstName() {
                if (this.user) {
                    const fullName = this.user.data.displayName.split(" ")
                    return fullName[0]
                }
            }
        },

        methods: {
            async logOut() {
                await this.$store.dispatch('logOut')
                this.$router.push('/') // reload page, after logged out
            }
        }
    }
 </script>
<style>
    .header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    nav > ul {
        display: flex;
    }

    ul > li {
        list-style: none;
    }

    .header__user--loggedIn {
        display: flex;
    }

    .header__user--loggedIn > button {
        padding:01px 8px;
        margin-left: 10px;
    }

    .header__user--notLoggedIn {
        margin: 15px;
        padding: 5px;
        border: 2px solid orange;
        color: black;
        background-color: orange;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 4px;
    }

    .header__logo {
        text-decoration: none;
        color: black;
    }
</style> 