import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, updateProfile} from "firebase/auth";

export default {
    state() {
        return {
            user: {
                loggedIn: false,
                data: null,
            },
            allBooks: []
        }
    },

    getters: {
        getUser(state) {
            return state.user // return user objet from state
        },

        getAllBooks(state) {
            return state.allBooks
        }
    },

    mutations: {
        // set changes to the user status
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },

        // set changes to the users data
        SET_USER(state, data) {
            state.user.data = data 
        },

        SET_ALL_BOOKS(state, books) {
            state.allBooks = books;
        }

    },

    actions: {  // Actions COMMITS the mutations
        /* 
            - Register new user
            - createUserWithEmailAndPassword from fb auth 
            - updateProfile from fb   
        */
        async register(context, {email, password, name}) {
            const response = await createUserWithEmailAndPassword(getAuth(), email, password)
            if (response) {
                context.commit('SET_USER', response.user) // if successfull, update users data
                updateProfile(response.user, { displayName: name})
            } else {
                throw new Error('Sorry, unable to register user :(')
            }
        },

        // log in with signInWithEmailAndPassword from fb-auth
        async logIn(context, {email, password, username}) {
            const response = await signInWithEmailAndPassword(getAuth(), email, password)
            if (response) {
                context.commit('SET_USER', response.user)
            } else {
                throw new Error("Sorry, login failed :/")
            }
        },

        async logOut(context) {
            await signOut(getAuth())
            context.commit('SET_USER', null) // clear out users data when logged out 
        },

        // accepts the user as a parameter to update the state based on its current value.
        async fetchUser(context, user) {
            context.commit('SET_LOGGED_IN', user !== null) 
            if (user) {
                context.commit('SET_USER', {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                context.commit('SET_USER', null);
            }
        },

        updateBooks(context, books) {
            console.log('all books', books)
            context.commit('SET_ALL_BOOKS', books)
        }

    }
}