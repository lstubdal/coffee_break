<template>
    <header class="header">
        <Router-Link :to="{ name: 'dashboard' }" class="header__logo">
            <h1>BOOKWORMS</h1>
        </Router-Link>

        <div class="header__user">
            <div class="header__user--loggedIn" v-if="user.loggedIn">
                <p class="header__user">Hello, <b>{{ getUserName }}</b></p>
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

            getUserName() {
                if (this.user) {
                    return this.user.data.displayName
                    
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
    h1 {
        font-weight: 400;
        font-size: 2.8em;
    }
    nav > ul {
        display: flex;
    }

    ul > li {
        list-style: none;
    }

    .header {
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-family: var(--second-font);
    }

    .header__user--loggedIn {
        display: flex;
    }

    .header__user--loggedIn > button {
        padding: 5px 23px 5px 23px;
        margin-left: 30px;
        margin-top: -5px;
        font-family: var(--second-font);
        font-size: 0.9em;
        background: none;
        border: 1px solid;
        border-radius: 2px;
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