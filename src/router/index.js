import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";

import BoardList from "@/components/board/BoardList.vue";
import BoardCreate from "@/components/board/BoardCreate.vue";
import BoardUpdate from "@/components/board/BoardUpdate.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";

import TMDBView from "@/views/TMDBView.vue";
import TMDBTopRated from "@/components/tmdb/TMDBTopRated.vue";
import TMDBPopular from "@/components/tmdb/TMDBPopular.vue";

import KakaoMapView from "@/views/KakaoMapView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board",
    component: BoardView,
    children: [
      {
        path: "",
        name: "boardList",
        component: BoardList,
      },
      {
        path: "create",
        name: "boardCreate",
        component: BoardCreate,
      },
      {
        path: "update",
        name: "boardUpdate",
        component: BoardUpdate,
      },
      {
        path: ":id",
        name: "boardDetail",
        component: BoardDetail,
      },
    ],
  },
  {
    path: "/tmdb",
    name: "tmdb",
    component: TMDBView,
    children: [
      {
        path: "toprated",
        name: "toprated",
        component: TMDBTopRated,
      },
      {
        path: "popular",
        name: "popular",
        component: TMDBPopular,
      },
    ],
  },
  {
    path: "/map",
    name: "map",
    component: KakaoMapView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
