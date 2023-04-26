import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue';
import NewRecommendation from './views/NewRecommendation.vue';

export default [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard
    },
    
	{
        name: 'login',
        path: '/login',
        component: Login
    },

    {
        name: 'register',
        path: '/register',
        component: Register
    },

    {
        name: 'profile',
        path: '/:username', /* /profile/:username? fix router issue console */
        component: Profile
    },

    {
        name: 'recommendation',
        path: '/recommendation',
        component: NewRecommendation
    }

];

