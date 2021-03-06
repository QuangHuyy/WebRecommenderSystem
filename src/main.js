import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'

// new Vue({
//   router,
// //   store,
//   render: (h) => h(App),
// }).$mount("#app"
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");