import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import PublicLayout from "../layouts/PublicLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/public/Home.vue"),
      },
      {
        path: "profil",
        component: () => import("../pages/public/Profile.vue"),
      },
      {
        path: "fasilitas",
        component: () => import("../pages/public/Facility.vue"),
      },
      {
        path: "berita",
        component: () => import("../pages/public/News.vue"),
      },
      {
        path: "tentang-kami",
        component: () => import("../pages/public/AboutUs.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,

  scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else if (to.hash) {
          resolve({ el: to.hash, behavior: "smooth" });
        } else {
          resolve({ top: 0 });
        }
      }, 400);
    });
  },
});

export default router;
