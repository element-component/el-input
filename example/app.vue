<script>
  module.exports = {
    name: 'app',

    components: {
      ElInput: require('./../src/index')
    },

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
