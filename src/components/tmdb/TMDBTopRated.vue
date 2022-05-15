<template>
  <div>
    <h3>탑순위</h3>
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>포스터</th>
          <th>제목</th>
          <th>줄거리</th>
          <th>언어</th>
          <th>개봉일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(movie, index) in tmdbTopRatedMovies" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <img
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
              style="height: 100px"
              alt=""
            />
          </td>
          <td>{{ movie.title }}</td>
          <td>{{ movie.overview }}</td>
          <td>{{ movie.original_language }}</td>
          <td>{{ movie.release_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["tmdbTopRatedMovies"]),
  },
  created() {
    this.$store.dispatch("getTmdbTopRated");
  },
};
</script>

<style></style>
