// define mixin object
module.exports = {
  data () {
    return {
      repoLastUpdated: '',   
    }
  },
    methods: {
      fetchRepoLastUpdated() {
        var that = this;
        $.ajax({
            type: "GET",
            url: "https://api.github.com/repos/ZacharyJacobCollins/ZacharyJacobCollins.github.io",
            success: function(data){
              //Retrieve the last push time to the repo for update time
              if(data.pushed_at) {
                that.repoLastUpdated = new Date(Date.parse(data.pushed_at)).toString();
              }
              //On blank repoLastUpdated return sometime today
              else {
                that.repoLastUpdated = "Sometime today";
              }
            },
            //On complete fail return err and set to sometime today
            failure: function(errMsg) {
                console.log(err);
                that.repoLastUpdated = "Sometime today";
            }
        });
      },
  },
  mounted() {
    console.log('Github api mixin mounted succesfully');
  }
}