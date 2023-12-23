import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/reset.css';
import App from './App.vue';
import router from './router/router';

// Import firebase functions we need
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXZR_SpZBXVpQl79mGlcv7BXwyhWKQy8",
  authDomain: "recipes-555.firebaseapp.com",
  projectId: "recipes-555",
  storageBucket: "recipes-555.appspot.com",
  messagingSenderId: "672226570280",
  appId: "1:672226570280:web:da0e53cf1fe40c76fa451d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
