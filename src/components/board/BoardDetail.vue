<template>
  <div>
    <h3>게시글 상세보기</h3>
    <div class="m-4">
      조회수 : <b-badge variant="danger">{{ board.viewCnt }}</b-badge>
      <b-form-group label="제목" label-for="input-1">
        <b-form-input
          id="input-1"
          trim
          :value="board.title"
          readonly
        ></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input
          id="input-2"
          trim
          :value="board.writer"
          readonly
        ></b-form-input>
      </b-form-group>
      <b-form-group label="글내용" label-for="textarea">
        <b-form-textarea
          id="textarea"
          trim
          :value="board.content"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="outline-primary" @click="moveUpdate">수정</b-button>
      <b-button variant="outline-danger" @click="createBoard">삭제</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BoardDetail",
  computed: {
    ...mapState(["board"]),
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const id = pathName[pathName.length - 1];
    this.$store.dispatch("getBoard", id);
  },
  methods: {
    moveUpdate() {
      this.$router.push({ name: "boardUpdate" });
    },
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.board.id);
    },
  },
};
</script>

<style></style>
