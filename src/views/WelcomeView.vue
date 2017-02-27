<template>
	<div class="container">
			
			<div class="welcome-display">
				<h1 class="title"> Zachary Jacob Collins </h1>
				<laptop></laptop>
			</div>

			<br />

			<div class="row">
			    <p class="card-text col-6">"Greats aren't great because at birth they can paint, the greats are great because they paint a lot."</p>
				<br />

			   	<span class="card-text col-6">Website Last Updated: {{ repoLastUpdated }}</span>
				<br />
				
				<div class="col-4 link">
					<router-link to="projects"><i class="material-icons">work</i></router-link>
				</div>
				<div class="col-4 link">
					<router-link to="resume"><i class="material-icons">description</i></router-link>
				</div>
			    <div class="col-4 link">
			    	<router-link to="learning"><i class="material-icons">device_hub</i></router-link>
			    </div>

		    </div>
	</div>
</template>

<script>
	import Laptop from '../components/Laptop.vue';
	import GithubApi from '../mixins/GithubApi.js'

	export default {
	  name: 'welcome-view',
	  mixins: [GithubApi],
	  components: {
	  	Laptop
	  },
	  mounted() {
    	this.fetchRepoLastUpdated();
	  }
	}

</script>

<style scoped>
	html, body {
		height: 100%;
		overflow: hidden;
	}

	.welcome-display {
		margin-top: 25%;
	}

	.title { 
		font-family: 'Megrim', cursive;
		display: flex;
		justify-content: center;
		margin-bottom: 60px;

	}

	.material-icons {
		font-size: 50px;
		padding: 10px;
	}

	.link {
		text-align: center;
	}

	i {
		color: green;
	}

</style>
