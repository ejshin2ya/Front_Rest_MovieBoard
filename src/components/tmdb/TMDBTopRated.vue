<template>
  <div class="container">
    <h3>영화 탑순위</h3>
    <b-row>
      <b-card
        v-for="(movie, index) in tmdbTopRatedMovies"
        :key="index"
        :title="movie.title"
        :img-src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        img-top
      >
        <b-card-text class="text-truncate">{{ movie.overview }}</b-card-text>
        <b-list-group flush>
          <b-list-group-item>등수 : {{ index + 1 }}</b-list-group-item>
          <b-list-group-item
            >개봉일 : {{ movie.release_date }}</b-list-group-item
          >
          <b-list-group-item
            >언어 : {{ movie.original_language }}</b-list-group-item
          >
        </b-list-group>
      </b-card>
    </b-row>
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
