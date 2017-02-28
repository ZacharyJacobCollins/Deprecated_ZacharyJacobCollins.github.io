<template>
	<div class="container">
		<div class="center">
				
			<div class="welcome-display">
				<h1 class="title"> Zachary Jacob Collins </h1>
				<laptop></laptop>
			</div>

			<br />

			<div class="row">

			   	<span class="col-12 last-updated">Website Last Updated: {{ repoLastUpdated }}</span>
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
		font-size: 4rem;
		display: flex;
		justify-content: center;
		margin-bottom: 60px;
	}

	.last-updated {
		text-align: center;	
		margin-top: 10px;
		margin-bottom: 50px;
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
