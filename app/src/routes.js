import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue'

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
        path: '/:username',
        component: Profile
    }

];

