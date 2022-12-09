<template>
  <li
    @click="[$router.push({
      name: 'Movie',
      params: {
        id: movie.imdbID
      }
    }), getMovieId(movie.imdbID)]">
    <div class="search-result">
      <div
        :style="{ backgroundImage: `url(${movie.Poster})` }"
        class="poster"></div>
      <div class="info">
        <div class="info__title">
          {{ movie.Title }}
        </div>
        <div class="info__year">
          {{ movie.Year }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: '',
    },
  },
  emits: ['update'],
  methods: {
    getMovieId(data) {
      this.$store.dispatch('movie/fetchMovie', {
        id: data, 
      });
      this.$store.commit('movies/clearSearch');
      this.$emit('update', '');
    },
  },
};
</script>

<style scoped lang="scss">
.search-result{
  width: 400px;
  display: flex;
  border: 1px solid;
  background-color: $color-background;

  .poster {
    width: 80px;
    height: 100px;
    background-size: cover;
  }
}
</style>