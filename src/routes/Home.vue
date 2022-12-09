<template>
  <div class="main__search-header">
    🎞MovieGo
  </div>
  <MainPage />
</template>

<script>
import MainPage from '~/components/MainPage';
export default {
  components: {
    MainPage,
  },
};
</script>

<style scoped lang="scss">
.main__search-header{
  display: flex;
  justify-content: center;
  color: $color-font;
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 24px;
}
</style>