import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ContactDetails from '../views/ContactDetails.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/add',
    component: AddContact
  },
  {
    path: '/edit/:id',
    component: EditContact
  },
  {
    path: '/contact/:id',
    component: ContactDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router