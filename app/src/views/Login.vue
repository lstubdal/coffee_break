<template>
    <div class="login">
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
            <button type="submit" class="login__submit">login</button>
        </form>

        <div class="switch">
            <p>Need an account?</p>
            <Router-Link :to="{ name: 'register' }" class="switch--link">SIGN UP</Router-Link>
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
                    this.$router.push('/') // go to dashboard
                }
                catch(err) {
                    this.error = err.message
                }
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
        font-family: Arial, Helvetica, sans-serif;
    }

    .login__field {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .login__submit {
        margin: 10px;
        padding: 1px 8px;
    }

    .switch {
        display: flex;
    }

    .switch--link{
        padding-left: 10px;
        font-weight: 800;
        color: rgb(219, 144, 6);
    }
</style> 