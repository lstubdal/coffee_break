import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'szllr1kt',
    dataset: 'production',
    apiVersion: '2023-01-17',
    token: 'skjZeCeSeIYis3cqhcWt7IsbDp7vExsZKI7lcxC9MyiCxwtaLZzrmcGReCW6nfaVs8RugoKXfPKYKJvVA29lJkNFsPOdYB9WGtundrmwCnmTH4XrEBB5bEsN0qXgM2HhD8yeGie3V6QBD6DHfpHs7sviawSPqghXB0zW88GqUc12Frdzyy3S', // import.meta.env.VITE_SANITY 
    useCdn: false,
    ignoreBrowserTokenWarning: true
})