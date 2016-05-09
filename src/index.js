const ElInput = require('./input');

module.exports = {
  ElInput,
  install(Vue) {
    Vue.component(ElInput.name, ElInput);
  }
};
