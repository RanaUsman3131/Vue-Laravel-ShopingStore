import home from './components/Pages/Home.vue'
import about from './components/Pages/About.vue';
import category from './components/Pages/Category.vue';
import singleProduct from './components/Pages/singleProduct';
import checkout from './components/Pages/CheckOut';
import trackingOrder from './components/Pages/TrackingOrder';
import shoppingCart from './components/Pages/ShoppingCart';
import Confirmation from './components/Pages/Confirmation'
const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/category', component: category },
    { path: '/singleProduct', component: singleProduct },
    { path: '/checkout', component: checkout },
    { path: '/TrackingOrder', component: trackingOrder },
    { path: '/shoppingCart', component: shoppingCart },
    { path: '/Confirmation', component: Confirmation }
];



export default routes;