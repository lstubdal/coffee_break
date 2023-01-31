
import sanity from "../sanity"

export default {
    data() {
        return {
            loading: true,
            result: null,
            updated: false
        }
    },

    methods: {
        async sanityFetch(query, params){
            this.result = await sanity.fetch(query, params); 
            this.loading = false;
        },

        createUser(username, email, password) {
            const newUser = {
                _type: 'user',
                username: username,
                email: email,
                password: password,
            }
            
            sanity.create(newUser).then((res) => {
                console.log(`User registered => ID is ${res._id}`)
             })
        }
    }
}