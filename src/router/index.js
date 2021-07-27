import { createRouter, createWebHistory } from 'vue-router';

import ChatComponent from '../views/chat/Chat.vue';

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: ChatComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;