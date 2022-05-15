<template>
  <div>
    <h2>TMDB뷰</h2>
    <div>
      <router-link to="/tmdb/toprated">탑 순위</router-link><br />
      <router-link to="/tmdb/popular">인기 순위</router-link>
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
