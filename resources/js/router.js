import home from './components/Pages/Home.vue'
import about from './components/Pages/About.vue';
import category from './components/Pages/Category.vue';

const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/category', component: category }
];



export default routes;