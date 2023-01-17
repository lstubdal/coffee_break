import { createApp, VueElement } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import App from './App.vue';
import store from '../store.js'
import routes from '../routes.js';

const app_store = createStore(store);
const app_router = createRouter({	 
	routes: routes,
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {	/* keep scrolling position when routing to next page */
		return { left: 0, top: 0 };
	  }
})

// configuration of firebase project
const firebaseConfig = {
    apiKey: "AIzaSyCkAXMFHjVmE33urRr9bKs9TaGUxXD2_So",
    authDomain: "lesehestene-ef50f.firebaseapp.com",
    projectId: "lesehestene-ef50f",
    storageBucket: "lesehestene-ef50f.appspot.com",
    messagingSenderId: "26011162770",
    appId: "1:26011162770:web:91076c9c6e99005dcf6e4b"
};

// then inizialize app and authentication for fb
const firebase = initializeApp(firebaseConfig)
const app_firebaseAuth = getAuth(firebase)

createApp(App)
	.use(app_store)
	.use(app_router)
	.use(app_firebaseAuth) // include it in create app function
	.mount('#app');