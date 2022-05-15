<template>
  <div>
    <h2>게시글 등록</h2>
    <fieldset>
      <legend>등록이지롱</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="writer">글쓴이</label>
      <input type="text" id="title" v-model="writer" /><br />
      <label for="content">글내용</label>
      <textarea v-model="content" cols="30" rows="10"></textarea>
      <button @click="createBoard">등록</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "BoardCreate",
  data() {
    return {
      title: "",
      writer: "",
      content: "",
    };
  },
  methods: {
    createBoard() {
      let newBoard = {
        id: 0,
        title: this.title,
        writer: this.writer,
        content: this.content,
      };
      this.$store.dispatch("createBoard", newBoard);
    },
  },
};
</script>

<style></style>
