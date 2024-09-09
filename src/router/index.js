/**
 * Vue Router
 * @see https://next.router.vuejs.org/
 * @description
 * Vue Router instance creation with default configs.
 */
import {createRouter, createWebHistory} from "vue-router";

/**
 * Vue Router instance
 * @type {Router} Vue Router instance creation with default configs
 * @property {Object} history - Vue Router history
 * @property {Array} routes - Vue Router routes
 */
const router = createRouter({
    history: createWebHistory(),
    routes: []
});

export default router;