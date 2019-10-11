const Buyshop = () => import('../pages/Buyshop/Buyshop.vue')
const Category = () => import('../pages/Category/Category.vue')
const General = () => import('../pages/General/General.vue')
const Home = () => import('../pages/Home/Home.vue')
const Person = () => import('../pages/Person/Person.vue')
const Found = () => import('../pages/General/Found/Found.vue')
const Choice = () => import('../pages/General/Choice/Choice.vue')
const Phone = () => import('../pages/Person/Phone/Phone.vue')
const Email = () => import('../pages/Person/Email/Email.vue')
const Search = () => import('../pages/Search/Search.vue')

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