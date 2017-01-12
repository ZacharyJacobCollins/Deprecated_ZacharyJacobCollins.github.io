// define mixin object
module.exports = {
  data () {
    return {
      lastUpdated: '',   
    }
  },
    methods: {
      fetchRepoLastUpdated() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/repos/ZacharyJacobCollins/ZacharyJacobCollins.github.io",
            success: function(data){
              console.log(data);
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        });
      },
  },
  mounted() {
    console.log('Github api mixin mounted succesfully');
  }
}