<template>
  <div class="movie-container">
    <div class="movie">
      <div
        class="poster"
        :style="{ backgroundImage: `url(${detailMovie.Poster}})` }">
      </div>
      <div class="info-container">
        <div class="title">
          {{ detailMovie.Title }}
        </div>
        <div class="etc">
          <div class="year">
            <span class="infoName">개봉 연도:</span> {{ detailMovie.Year }}
          </div>
          <div class="runtime">
            <span class="infoName">러닝 타임:</span> {{ detailMovie.Runtime }}
          </div>
          <div class="language">
            <span class="infoName">국가:</span> {{ detailMovie.Country }}
          </div>
        </div>
        <div class="ratings">
          <span class="infoName">평점:</span> {{ detailMovie.Ratings?.[0].Value }}
        </div>
        <div class="plot">
          <div class="infoName">
            줄거리
          </div> {{ detailMovie.Plot }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    detailMovie() {
      return this.$store.state.movie.detailMovie;
    },
  },
  created() {
    this.$store.dispatch('movie/fetchMovie', {
      id: this.$route.params.id,
    });
  },
  methods: {
    resizePoster(url) {
      return url.replace('SX300', 'SX700');
    },
  },
};
</script>

<style scoped lang="scss">
.movie-container {
  padding-top: 30px;
  margin: 0 30px;
}


.movie {
  display: flex;
  box-sizing: border-box;
}
.poster {
  width: 500px;
  height: 700px;
  margin-right: 50px;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
}

.info-container {
  flex-grow: 1;

  .title {
    font-size: 60px;
    line-height: 1;
    margin-bottom: 15px;
    font-weight: 700;
  }

  .infoName {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .etc {
    margin-bottom: 15px;
  }

  .ratings{
    margin-bottom: 15px;
  }
}
</style>