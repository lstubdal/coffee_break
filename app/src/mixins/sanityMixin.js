
import sanity from "../sanity"

export default {
    data() {
        return {
            loading: true,
            updated: false,
            users: null
        }
    },

    methods: {
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