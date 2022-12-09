import { createApp } from 'vue';
import App from '~/App';
import fetchPlugin from '~/plugins/fetch';
import router from './routes/index';
import store from '~/store';

const app = createApp(App);
app.use(fetchPlugin, {
  // 지워도 될듯
  pluginName: '$fetchMovie',
});

app.use(router);
app.use(store);
app.mount('#app');
