export default {
    title: 'User',
    name: 'user',
    type: 'docuemnt',
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
        }
    ]
}