<template>
  <div>
    <h2>게시글 수정</h2>
    <fieldset>
      <legend>등록이지롱</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="board.title" /><br />
      <label for="writer">글쓴이</label>
      <input type="text" id="title" v-model="board.writer" /><br />
      <label for="content">글내용</label>
      <textarea v-model="board.content" cols="30" rows="10"></textarea>
      <button @click="updateBoard">수정</button>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BoardUpdate",
  computed: {
    ...mapState(["board"]),
  },
  methods: {
    updateBoard() {
      let updatedBoard = {
        id: this.board.id,
        title: this.board.title,
        writer: this.board.writer,
        content: this.board.content,
      };
      this.$store.dispatch("updateBoard", updatedBoard);
    },
  },
};
</script>

<style></style>
