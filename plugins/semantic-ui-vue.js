import Vue from 'vue';

if (process.BROWSER_BUILD) {
  window.onNuxtReady(() => {
    const SuiVue = requre("semantic-ui-vue");
    Vue.use(SuiVue);
  });
}
