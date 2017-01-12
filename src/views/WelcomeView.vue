<template>
	<div id="welcome-container">
		<div class="card text-center">
		  <div class="card-header">
		    ZacharyJacobCollins.github.io
		  </div>
		  <div class="card-block">
		    <p class="card-text">"Greats aren't great because at birth they can paint, the greats are great because they paint a lot."</p>
		    <router-link to="projects" class="btn btn-primary">Projects</router-link>
		  </div>
		  <div class="card-footer text-muted">
		    Website Last Updated: {{ repoLastUpdated }}
		  </div>
		</div>
	</div>
</template>

<script>
	import GithubApi from '../mixins/GithubApi.js'

	export default {
	  name: 'welcome-view',
	  mixins: [GithubApi],
	  mounted() {
    	this.fetchRepoLastUpdated();
	  }
	}

</script>

<style scoped>
	#welcome-container {
		display: flex;	
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>
