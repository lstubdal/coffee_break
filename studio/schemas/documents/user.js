export default {
    title: 'User',
    name: 'user',
    type: 'document',
    fields: [
        {
            title: 'Username',
            name: 'username',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Must have username')
        },

        {
            title: 'Email',
            name: 'email',
            type: 'string',
            validation: Rule => Rule.required().min(5).error('Must have email')
        },

        {
            title: 'Password',
            name: 'password',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Must have password')
        },

        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'username',
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
            }
        },

        {
            title: 'Your recommended books',
            name: 'books',
            type: 'array',
            of: [
            {
                type: 'reference',
                to: {type: 'book'}
            }
        ] 
        }
    ]
}

