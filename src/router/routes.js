import Buyshop from '../pages/Buyshop/Buyshop.vue';
import Category from '../pages/Category/Category.vue';
import General from '../pages/General/General.vue';
import Home from '../pages/Home/Home.vue';
import Person from '../pages/Person/Person.vue';
import Found from '../pages/General/Found/Found.vue';
import Choice from '../pages/General/Choice/Choice.vue';
import Phone from '../pages/Person/Phone/Phone.vue';
import Email from '../pages/Person/Email/Email.vue';
import Search from '../pages/Search/Search.vue';

export default [
  {
    path: '/home',
      component: Home,
      meta: {
        showFooter: true,
        showHeader: true
      }
  },
  {
    path: '/buyshop',
    component: Buyshop,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: false
    }
  }, 
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  }, 
  {
    path: '/general',
    component: General,
    meta: {
      showFooter: true
    },
    children:[
      {
        path: '/general/fond',
          component: Found,
          meta: {
            showFooter: true
          }
      },
      {
        path: '/general/choice',
        component: Choice,
        meta: {
          showFooter: true
        }
      },
      {
        path: '',
        redirect: '/general/fond'
      }
    ]
  }, 
  {
    path: '/person',
    component: Person,
    meta: {
      showFooter: false
    },
     children: [{
         path: '/person/phone',
         component: Phone,
         meta: {
           showFooter: false
         }
       },
       {
         path: '/person/email',
         component: Email,
         meta: {
           showFooter: false
         }
       },
     ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]