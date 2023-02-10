import rating from "./rating"
import category from "./category"

export default {
    title: 'Book',
    name: 'book',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Book must have title')
        },

        {
            title: 'Author',
            name: 'author',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Book must have Author')
        },

        {
            title: 'Description of book',
            name: 'description',
            type: 'text',
            description: 'What makes the book worth sharing?',
            validation: Rule => Rule.required().min(5).error('Book must have a description'),
            validation: Rule => Rule.required().max(1000).error('To many words!')
        },

        {
            title: 'Book category',
            name: 'category',            
            description: 'Choose the books category',
            type: 'string',
            options: {
                list: [
                    ...category
                ]
            }
        },

        {
            title: 'Rate the book',
            name: 'rating',
            description: 'Rate the book from 1-6',
            type: 'number',
            options: {
                list: [
                    ...rating
                ]
            }
        },

        {
            title: 'The person writing this recommendation',
            name: 'recommender',
            description: 'Userame goes here',
            type: 'string',
            readOnly: true // will automaticly be accesed when user is logged in
        }
    ]
}