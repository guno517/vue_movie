<template>
  <h2>Title: {{ getTitle }}</h2>
  <h2>Year: {{ getYear }}</h2>
  <h2>Runtime: {{ getRuntime }}</h2>
  <h2>Director: {{ getDirector }}</h2>
  <img :src="getPoster" />
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    detailMovie() {
      return this.$store.state.movie.detailMovie;
    },
    getTitle() {
      return this.$store.state.movie.title;
    },
    getYear() {
      return this.$store.state.movie.year;
    },
    getRuntime() {
      return this.$store.state.movie.runtime;
    },
    getDirector() {
      return this.$store.state.movie.director;
    },
    getPoster() {
      return this.$store.state.movie.poster;
    },
  },
};
</script>