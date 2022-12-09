<template>
  <main>
    <div class="mainpage__search-header">
      영화 검색
      <div class="search-container">
        <input
          v-model="title"
          class="search-input"
          placeholder="영화를 검색해주세요"
          type="text" />
        <button @click="fetchMovies">
          Search
        </button>
      </div>
    </div>
    <div class="result__inner">
      <div class="result__page">
        <div class="result__header">
          검색 결과
        </div>
        <div class="result__container">
          <div
            v-for="movie in movies"
            :key="movie.imdbID"
            class="result"
            @click="$router.push({
              name: 'Movie',
              params: {
                id: movie.imdbID
              }
            })">
            <div
              class="movie-poster"
              :style="{ backgroundImage: `url(${movie.Poster})` }">
            </div>
            <div class="movie-title">
              {{ movie.Title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movies.movies;
    },
  },
  methods: {
    fetchMovies() {
      this.$store.dispatch('movies/fetchMovies', {
        title: this.title,
        position: 'main', // 
      });
    },
    getMovieId(data) {
      this.$store.dispatch('movie/fetchMovie', {
        id: data, 
      });
      this.title = '';
      this.$store.commit('movies/clearSearch');
    },
  },
};
</script>

<style scoped lang="scss">
.mainpage__search-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-font;
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 20px

}

.search-container {
  display: flex;
  width: 50%;
  height: 40px;
  max-width: 500px;
  padding: 5px;
  margin-left: 15px;
  border-radius: 10px;
  border: 1px solid;

  .search-input{
    flex-grow: 1;
    border: none;
    font-size: 20px;

    &:focus {
      outline: none;
    }
  }
}

.result__page{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.result__header {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 24px;
}

.result__container{
  display: grid;
  grid-template-columns: repeat(5,15rem);
  grid-template-rows: repeat(2, 20rem);
  align-items: center;
  justify-items: center;

  .movie-title{
    text-align: center;
    width: 150px;
  }
  .movie-poster {
    width: 160px;
    height: 200px;
    background-size: cover;
    margin-bottom: 5px;
  }
}
.result{
  cursor: pointer;
  border: 1px solid;
  padding: 10px;
  height: 250px;
  width: 160px;
}

@media(max-width: 1200px){
  
}
</style>