import home from './components/Pages/Home.vue'
import about from './components/Pages/About.vue';
import category from './components/Pages/Category.vue';
import singleProduct from './components/Pages/singleProduct';
const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/category', component: category },
    { path: '/singleProduct', component: singleProduct }
];



export default routes;