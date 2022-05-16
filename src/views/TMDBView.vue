<template>
  <div>
    <h2>TMDB뷰</h2>
    <div>
      <b-nav tabs align="center">
        <b-nav-item :active="$route.name == 'toprated'" to="/tmdb/toprated"
          >탑 순위</b-nav-item
        >
        <b-nav-item :active="$route.name == 'popular'" to="/tmdb/popular"
          >인기 순위</b-nav-item
        >
      </b-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "TMDBView",
};
</script>

<style></style>
