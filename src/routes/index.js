import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      name: 'Movie',
      path: '/movie/:id',
      component: Movie,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
