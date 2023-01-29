import rating from "./rating"

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
            validation: Rule => Rule.required().min(5).error('Book must have a description')
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
        }
    ]
}