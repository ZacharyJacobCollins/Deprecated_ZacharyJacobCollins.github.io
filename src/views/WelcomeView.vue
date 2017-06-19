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
				<div class="col-2 link">
					<router-link to="projects">
						<i class="fa fa-wrench" aria-hidden="false" data-toggle="tooltip" data-placement="bottom" title="Projects"></i>
					</router-link>
				</div>
				<div class="col-2 link">
					<router-link to="resume">
						<i class="fa fa-file" aria-hidden="false" data-toggle="tooltip" data-placement="bottom" title="Resume"></i>
					</router-link>
				</div>
				<div class="col-2 link">
					<a href="trips">
						<i class="fa fa-flask" aria-hidden="false" data-toggle="tooltip" data-placement="bottom" title="Trips"></i>
					</a>
				</div>
				<div class="col-2 link">
					<router-link to="year">
						<i class="fa fa-picture-o" aria-hidden="false" data-toggle="tooltip" data-placement="bottom" title="Year In Review"></i>
					</router-link>
				</div>
				<div class="col-2 link">
					<a href="https://medium.com/@zacjacob">
						<i class="fa fa-pencil" aria-hidden="false" data-toggle="tooltip" data-placement="bottom" title="Medium Articles"></i>
					</a>
				</div>
				<div class="col-2 link">
					<a href="https://github.com/zacharyjacobcollins">
						<i class="fa fa-github" aria-hidden="false" data-toggle="tooltip" data-placement="bottom" title="Github"></i>
					</a>
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
	  methods: {
	  	initTooltips() {
	  		$(function () {
			  $('[data-toggle="tooltip"]').tooltip();
			});
	  	},
	  },
	  mounted() {
    	this.fetchRepoLastUpdated();
    	this.initTooltips();
	  }
	}

</script>

<style scoped>
	html, body {
		height: 100%;
		overflow: hidden;
	}

	img {
		height: 150px;
		border-radius: 1in;
	}

	.welcome-display {
		margin-top: 20%;
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

	.link {
		text-align: center;
	}

	i {
		color: black;
		font-size: 3em;
	}

</style>
