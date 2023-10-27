import Vue from 'vue';
import './styles/main.scss'; // Garente a importação do arquivo de estilos globais
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render(h) { return h(App); },
}).$mount('#root');
