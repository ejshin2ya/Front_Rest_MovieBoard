<template>
  <div class="container">
    <h2>게시글 목록</h2>
    <hr />
    <div v-if="boards.length">
      <b-table-simple hover responsive class="text-center">
        <b-thead>
          <b-tr>
            <b-th>번호</b-th>
            <b-th>제목</b-th>
            <b-th>글쓴이</b-th>
            <b-th>조회수</b-th>
            <b-th>등록일</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="board in pageBoardList" :key="board.id">
            <b-td>{{ board.id }}</b-td>
            <b-td
              ><b-link :to="`/board/${board.id}`">{{
                board.title
              }}</b-link></b-td
            >
            <b-td>{{ board.writer }}</b-td>
            <b-td>{{ board.viewCnt }}</b-td>
            <b-td>{{ board.regDate }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
    <div v-else>등록된 게시글이 없습니다.</div>
    <div>
      <select v-model="mode">
        <option value="1">제목</option>
        <option value="2">내용</option>
        <option value="3">제목+내용</option>
      </select>
      <input type="text" v-model="keyword" />
      <button @click="search">검색</button>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BoardList",
  data() {
    return {
      keyword: "",
      mode: 1,
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    ...mapState(["boards"]),
    rows() {
      return this.boards.length;
    },
    pageBoardList() {
      return this.boards.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  created() {
    this.$store.dispatch("getBoards");
  },
  methods: {
    search() {
      const payload = {
        mode: this.mode,
        keyword: this.keyword,
      };
      this.$store.dispatch("getBoards", payload);
    },
  },
};
</script>

<style></style>
