import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'szllr1kt',
    dataset: 'production',
    apiVersion: '2023-01-17',
    //token: import.meta.env.VITE_SANITY, 
    useCdn: false,
    //ignoreBrowserTokenWarning: true
})