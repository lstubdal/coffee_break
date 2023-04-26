<template>
    <div class="login">
        <div class="loginContainer">
            <form action="#" @submit.prevent="logIn"> 
                <h2>LOG IN</h2>
                <div class="login__field">
                    <label for="email" class="email">Email</label>
                    <input id="email" type="email" name="email" v-model="email" value required autofocus />
                </div>
    
                <div class="login__field">
                    <label for="password" class="password">Password</label>
                    <input id="password" type="password" name="password" v-model="password" readonly onfocus="this.removeAttribute('readonly');" value required autofocus /> <!-- make the field readonly while form loading. While the field get focus, change that field to be editable.  -->
                </div>
    
                <div v-if="error">{{ error }}</div> <!-- display error if login gone wrong -->
                <button type="submit" class="login__submit">Login</button>
            </form>
    
            <div class="switch">
                <p>Need an account?</p>
                <Router-Link :to="{ name: 'register' }" class="switch--link">SIGN UP</Router-Link>
            </div>
        </div>
    </div>
 </template>
 
 <script>
     export default {
        data() {
            return { 
                email: "",
                password: "",
                error: ""
            }
        },

        methods: {
            async logIn() {
                try {
                    await this.$store.dispatch('logIn', {
                        email: this.email,
                        password: this.password
                    })
                    // fetch all users book into store.js
                    
                    this.$router.push({name: 'profile', params: {username: this.user.data.displayName}}) // navigate to current userprofile
                }
                catch(err) {
                    this.error = err.message
                }
            }
        },

        computed: {
            user() {
                return this.$store.getters.getUser
            }
        }
     }
 </script>
<style>
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100%;
        font-family: var(--second-font);
        background-image: url("/images/ocean.jpg");
        background-size: cover;
    }

    .loginContainer {
        background-color: white;
        width: 30%;
        height: 65%;
        padding: 70px;
        border-radius: 1px;
        
    }

    input[type="email"], input[type="password"] {
        background: transparent;
        border: 1px solid rgb(99, 98, 98);
    }

    .login__field {
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 10px 0px;
    }

    .login__submit {
        margin: 20px 0px;
        padding: 10px 25px;
        background-color: rgb(118, 109, 156);
        font-size: 0.9em;
        color: white;
        border: none;
        border-radius: 2px;

    }

    .switch {
        display: flex;
        font-size: 1em;
        padding-top: 10px;
    }

    .switch--link{
        padding-left: 10px;
        font-weight: 800;
        color: rgb(118, 109, 156);
        
    }
</style> 