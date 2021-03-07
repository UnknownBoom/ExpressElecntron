console.log("ok router")
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'),
        children:[
          { path: '/users', component: () => import('components/user/User.vue')},
          { path: '/realtors', component: () => import('components/realtor/Realtor.vue')},
          // { path: '/levi', component: () => import('components/levi/levi.vue')}
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
