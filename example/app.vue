<script>
  import Vue from 'vue';
  import ElInput from './../src/index';

  Vue.use(ElInput);

  module.exports = {
    name: 'app',

    template: require('./demo.md'),
    data() {
      return {
        input: '',
        input1: '',
        input2: '',
        input3: 0,
        input4: '',
        input5: '',
        input6: ''
      };
    }
  };
</script>
