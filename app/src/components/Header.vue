<template>
    <header class="header">
        <Router-Link :to="{ name: 'dashboard'}" class="header__logo"> 
            <h1 class="header--loggedIn" v-if="user.loggedIn">CB</h1>
            <h1  v-else>coffe break</h1>
        </Router-Link>

        <div class="header__user">
            <div class="header__user--loggedIn" v-if="user.loggedIn">
                <p class="header__user">Hello, <span class="header__user--name">{{ getUserName }}</span></p>

                <div class="hamburgerContainer">
                    <svg @click="toggleMenu()" v-if="!menuClicked" class="hamburger" width="60" height="25" viewBox="0 0 57 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H57V5.33333H0V0ZM11.5 13.3333H57V18.6667H11.5V13.3333ZM27 26.6667H57V32H27V26.6667Z" fill="#2E6390"/>
                    </svg>

                    <div class="hamburger--clicked" v-if="menuClicked" v-click-outside="onClickOutside">
                        <svg class="hamburger__exit" @click="toggleMenu()"  width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M79.7655 76.4844C79.981 76.6998 80.1519 76.9556 80.2685 77.2371C80.3851 77.5186 80.4451 77.8203 80.4451 78.125C80.4451 78.4297 80.3851 78.7314 80.2685 79.0129C80.1519 79.2944 79.981 79.5502 79.7655 79.7656C79.5501 79.9811 79.2943 80.152 79.0128 80.2686C78.7313 80.3852 78.4296 80.4452 78.1249 80.4452C77.8202 80.4452 77.5185 80.3852 77.237 80.2686C76.9555 80.152 76.6997 79.9811 76.4843 79.7656L49.9999 53.3203L23.5155 79.7656C23.0804 80.2007 22.4902 80.4452 21.8749 80.4452C21.2595 80.4452 20.6694 80.2007 20.2343 79.7656C19.7991 79.3305 19.5547 78.7404 19.5547 78.125C19.5547 77.5097 19.7991 76.9195 20.2343 76.4844L46.6796 50L20.2343 23.5156C19.7991 23.0805 19.5547 22.4904 19.5547 21.875C19.5547 21.2597 19.7991 20.6695 20.2343 20.2344C20.6694 19.7993 21.2595 19.5548 21.8749 19.5548C22.4902 19.5548 23.0804 19.7993 23.5155 20.2344L49.9999 46.6797L76.4843 20.2344C76.9194 19.7993 77.5095 19.5548 78.1249 19.5548C78.7402 19.5548 79.3304 19.7993 79.7655 20.2344C80.2006 20.6695 80.4451 21.2597 80.4451 21.875C80.4451 22.4904 80.2006 23.0805 79.7655 23.5156L53.3202 50L79.7655 76.4844Z" fill="#EAE8D9"/>
                        </svg>

                        <RouterLink :to="{ name: 'profile', params: { username:  `${getUserName}` }}" class="hamburger--clicked-link">My page</RouterLink>
                        <RouterLink :to="{ name: 'dashboard'}" class="hamburger--clicked-link">Dashboard</RouterLink>
                        <RouterLink :to="{ name: 'recommendation'}" class="hamburger--clicked-link">New recommendation +</RouterLink>
                        <button class="hamburger__logout" @click.prevent="logOut">Log out</button>
                    </div>
                </div>
            </div>
            
            <Router-Link :to="{ name: 'login'}" v-else class="header__user--notLoggedIn" @click="toggleMenu">Login</Router-Link>
        </div>
    </header>
 </template>
 
 <script>
    import { getAuth } from 'firebase/auth';
    import vClickOutside from 'click-outside-vue3' // register when clicked outside of menu


    export default {
        created() {
            // get the current user by setting an observer on the Auth object:
            const auth = getAuth()
            auth.onAuthStateChanged(user => {
                this.$store.dispatch('fetchUser', user)
            })
        },

        data() {
            return {
                menuClicked: false
            }
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
                this.$router.push({name: 'dashboard'}) // reload page, after logged out
            },

            toggleMenu(){
                this.menuClicked = !this.menuClicked;
            },
            
            onClickOutside() {
                this.toggleMenu()
            }
        },

        directives: {
            clickOutside: vClickOutside.directive
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
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-family: var(--second-font);
        background-color: transparent;
        border-bottom: 0.5px solid rgb(211, 209, 209);
        box-shadow: 0 2px 4px -4px #373636;
        color: var(--text);
        z-index: 10;
    }

    .header__logo {
        text-decoration: none;
        color: var(--text)
    }

    .header--loggedIn {
        font-size: 1em;
    }

    .header__user--loggedIn {
        display: flex;
    }

    .header__user--name {
        font-weight: 600;
        padding-right: 30px;
    }

    .header__user--notLoggedIn {
        margin-right: 15px;
        padding: 8px 40px;
        color: var(--text);
        border: 2px solid var(--text);
        background-color:none;
        text-decoration: none;
        font-family: var(--second-font);
        font-weight: 500;
        font-size: 1.2em;
        border-radius: 2px;
    }

    .header__user--notLoggedIn:hover {
        color: var(--background);
        border: 2px solid var(--text);
        background-color: var(--text);
    }

    .hamburgerContainer {
        position: relative;
    }

    .hamburger {
        cursor: pointer;
    }

    .hamburger--clicked {
        width: 240px;
        height: 270px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        color: var(--background);
        background-color: var(--text);
    }
    
    .hamburger--clicked-link {
        color: var(--background);
        text-decoration: none;
        padding-bottom: 20px;
    }

    .hamburger--clicked-link:hover {
        color: var(--soft-highlight); 
    }

    .hamburger__logout {
        padding: 5px 23px 5px 23px;
        font-family: var(--second-font);
        font-size: 0.9em;
        background: none;
        border: 2px solid;
        border-radius: 2px;
        color: var(--background);
        cursor: pointer;
        margin-top: 20px;
    }

    .hamburger__exit {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        margin: 10px;
    }

    .hamburger__logout:hover {
        color: var(--soft-highlight); 
    }
</style> 