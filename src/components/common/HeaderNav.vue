<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'home' }">메인</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/board">게시판목록</b-nav-item>
          <b-nav-item :to="{ name: 'boardCreate' }">게시글등록</b-nav-item>
          <b-nav-item to="/tmdb">TMDB</b-nav-item>
          <b-nav-item to="/map">카카오Map</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
