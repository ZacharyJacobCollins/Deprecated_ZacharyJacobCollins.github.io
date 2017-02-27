<template>
	<div class="container">
		
			<h2> Zachary Jacob Collins </h2>
			<laptop></laptop>
			<br />
		    <p class="card-text">"Greats aren't great because at birth they can paint, the greats are great because they paint a lot."</p>
			<br />
		   	Website Last Updated: {{ repoLastUpdated }}
			<br />
		    <router-link to="projects"><i class="material-icons">work</i></router-link>
		    <router-link to="resume"><i class="material-icons">description</i></router-link>
		    <router-link to="learning"><i class="material-icons">device_hub</i></router-link>
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

	.material-icons {
		font-size: 50px;
		padding: 10px;
	}

</style>
