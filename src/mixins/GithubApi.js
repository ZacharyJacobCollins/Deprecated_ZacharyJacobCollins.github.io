// define mixin object
module.exports = {
  data () {
    return {
      repoLastUpdated: '',   
    }
  },
    methods: {
      //Retrieve when the repository was last updated
      fetchRepoLastUpdated() {
        var that = this;
        $.ajax({
            type: "GET",
            url: "https://api.github.com/repos/ZacharyJacobCollins/ZacharyJacobCollins.github.io",
            success: function(data){
              //Retrieve the last push time to the repo for update time
              that.repoLastUpdated = new Date(Date.parse(data.pushed_at)).toString();
            },
            //On complete fail return err and set to sometime today
            failure: function(errMsg) {
                console.log(err);
                that.error();
            },
            statusCode: {
                502: function () {
                  that.error();
                },
                500: function () {
                  that.error();
                },
            }
        });
      },
      error() {
        this.repoLastUpdated = "Sometime Today"; 
      }
  },
  mounted() {
    console.log('Github api mixin mounted succesfully');
  }
}