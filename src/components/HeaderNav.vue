<template>
  <header>
    <div
      class="mg-logo"
      @click="$router.push('/')">
      🎞MovieGo
    </div>
    <div class="search-container">
      <input
        v-model="title"
        placeholder="영화를 검색해주세요"
        type="text"
        @input="fetchMovies($event)" />
      <div
        v-if="(title.length > 0 && hasResult)"
        class="search-list">
        <ul>
          <SearchItem 
            v-for="movie in headerMovies"
            :key="movie.imdbID"
            :movie="movie" 
            :title="title" 
            @update="titleChange" />
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import SearchItem from '~/components/SearchItem';
export default {
  components: {
    SearchItem,
  },
  data() {
    return {
      title: '',
      isShowList: false, // 검색 결과 하나 선택하면 리스트 안보이게 하기
    };
  },
  computed: {
    headerMovies() {
      return this.$store.state.movies.headerMovies;
    },
    total() {
      return this.$store.state.movies.totalResults;
    },
    detailMovie() {
      return this.$store.state.movie.detailMovie;
    },
    hasResult() {
      return this.$store.state.movies.headerMovies && this.$store.state.movies.headerMovies.length;
    },
  },
  watch: {

  },
  methods: {
    fetchMovies() {
      this.$store.dispatch('movies/fetchMovies', {
        title: this.title,
        position: 'header',
      });
    },
    getMovieId(data) {
      this.$store.dispatch('movie/fetchMovie', {
        id: data, 
      });
      this.title = '';
      this.$store.commit('movies/clearSearch');
    },
    titleChange(title) {
      this.title = title;
    },
  },
};
</script>

<style scoped lang="scss">
header{
  border: 1px solid;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  margin-bottom: 24px;

  .mg-logo{
    font-size: xx-large;
    cursor: pointer;
  }

  .search-container{
    width: 400px;

    input:focus{
      ul {
        display: block;
      }
    }

    ul {
      position: absolute;
      overflow-y: auto;
      max-height: 500px;
    }

    input {
      width: 400px;
    }
  }
}
</style>