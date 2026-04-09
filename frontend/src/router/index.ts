import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import PublicLayout from "../layouts/PublicLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";

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
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("../pages/admin/Login.vue"),
  },

  {
    path: "/admin",
    component: AdminLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "AdminDashboard",
        component: () => import("../pages/admin/Dashboard.vue"),
      },
      // 1. Halaman Beranda
      {
        path: "home-settings",
        name: "AdminHomeSettings",
        component: () => import("../pages/admin/HomeSettings.vue"),
      },
      // 2. Halaman Profil
      {
        path: "profile-settings",
        name: "AdminProfileSettings",
        component: () => import("../pages/admin/ProfileSettings.vue"),
      },
      // 3. Halaman Fasilitas
      {
        path: "facilities",
        name: "AdminFacilities",
        component: () => import("../pages/admin/Facilities.vue"),
      },
      // 4. Halaman Berita
      {
        path: "news",
        name: "AdminNews",
        component: () => import("../pages/admin/News.vue"),
      },
      // 5. Halaman Tentang Kami
      {
        path: "about-settings",
        name: "AdminAboutSettings",
        component: () => import("../pages/admin/AboutSettings.vue"),
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

// Router Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const isGoingToAdmin = to.path.startsWith("/admin");
  const isGoingToLogin = to.name === "AdminLogin";

  if (isGoingToAdmin && !isGoingToLogin && !isAuthenticated) {
    next({ name: "AdminLogin" });
  } else if (isGoingToLogin && isAuthenticated) {
    next({ name: "AdminDashboard" });
  } else {
    next();
  }
});

export default router;
