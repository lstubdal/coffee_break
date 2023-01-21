<template>
    <div class="register">
        <form action="#" @submit.prevent="registerUser"> 
            <h2>Sign up</h2>
            <div class="register__field">
                <label for="username" class="username">Username</label>
                <input id="username" type="username" name="username" v-model="username" value required autofocus />
            </div>

            <div class="register__field">
                <label for="email" class="email">Email</label>
                <input id="email" type="email" name="email" v-model="email" value required autofocus />
            </div>

            <div class="register__field">
                <label for="password" class="password">Password</label>
                <input id="password" type="password" name="password" v-model="password" readonly onfocus="this.removeAttribute('readonly');" value required autofocus />
            </div>

            <div v-if="error">{{ error }}</div> <!-- display error if register gone wrong -->
            <button type="submit" class="register__submit">register</button>
        </form>

        <div class="switch">
            <p>Already a user?</p>
            <Router-Link :to="{ name: 'login' }" class="switch--link">LOG IN</Router-Link>
        </div>
    </div>
</template>
 
 <script>
    import sanityMixin from '../mixins/sanityMixin'

    export default {
        mixins: [sanityMixin],

        data() {
            return {
                email: "",
                password: "",
                username: "",
                error: ""
            }
        },

        methods: {
            async registerUser() {
                try {
                    await this.$store.dispatch('register', {
                        email: this.email,
                        password: this.password,
                        name: this.username
                    })
                    this.$router.push('/')
                }  
                catch (err) {
                    this.error = err.message
                }

                this.addUserToSanity()
            },

            addUserToSanity() {
                console.log("Clicked")
                /* this.createOrUpdateUser(
                    " ",
                    this.username, 
                    this.email, 
                    this.password,
                    this.slug()
                ) */
            },

            createSlug() {
                const slug = this.username.replaceAll(' ', '-');
                return slug.toLowerCase();
            },
         }
     }
 </script>
<style>
.register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-family: Arial, Helvetica, sans-serif;
}

.register__field {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.register__submit {
    margin: 10px;
    padding: 1px 8px;
}
</style> 