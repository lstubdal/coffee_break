
import sanity from "../sanity"

export default {
    data() {
        return {
            loading: true,
            result: null,
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
                password: password
            }
            
            sanity.create(newUser).then((res) => {
                console.log(`User registered => ID is ${res._id}`)
             })
        },

        createBook(bookID, key, title, author, description, category, rating, username) {
            const newBook = {
                _type: 'book',
                _id: bookID,
                _key: key,
                title: title,
                author: author,
                description: description,
                category: category,
                rating: rating,
                recommender: username
            }

            sanity.create(newBook).then((res) => {
                console.log(`Book created => ID is ${res._id}`)
            })
        },

        addBookToUsersListSanity(userID, book) {
            sanity
                .patch(userID)
                .insert('after', 'books[-1]', [book])
                .commit({autoGenerateArrayKeys: true})  // peform patch, return promise
                .then((bookUpdated) => {
                    console.log('Book added users list', bookUpdated)
                })
                .catch((error) => {
                    console.log('Erorr', error)
                })
        }
    }
}