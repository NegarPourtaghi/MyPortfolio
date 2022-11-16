import { createRouter  , createWebHistory} from 'vue-router'
import home from './Components/home.vue'
import about from './Components/about.vue'
import contact from './Components/contact.vue'
import portfolio from './Components/portfolio.vue'
import AdminPanel from './Components/admin/AdminPanel.vue'
const routes=[
    {path:'/', component:home , name:'home'},
    {path:'/about', component:about, name:'about'},
    {path:'/contact', component:contact, name:'contact'},
    {path:'/portfolio', component:portfolio, name:'portfolio'},
    {path:'/AdminPanel', component:AdminPanel , name:'adminpanel'}

]




const router= createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
})

 
router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.requiresAuth) && store.state.token === null) {
        return next('/');
    } else {
        return next();
    }
});

export default router;