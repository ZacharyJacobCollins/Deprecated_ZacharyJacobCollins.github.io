<template>
	<div class="container">
		<div class="center">
				
			<div class="welcome-display">
				<h1 class="title"> Year in Review </h1>
				<laptop></laptop>
			</div>
			<br />
			<div class="row">
				<ul>

					<li> January 22, 2017.   Placed 1st at Spartahack 2017 https://devpost.com/software/blooming-garden</li>
					<li> February 26, 2017.  Won Feed Clothe prize at hackillinois https://devpost.com/software/drop-earrings-not-bombs </li>
					<li> March 17, 2017.  Recieved and accepted first full time position as a software engineer.  60k starting salary, 2 days a week remote, health insurance </li>
					<li> March 23, 2017.  Found a sublet to live in for the summer in downtown ann arbor http://www.towerplaza.net/ </li>
					<li> March 26, 2017.  Placed 1st at Mhacks https://devpost.com/software/whispr </li>
				</ul>
		    </div>
		</div>
	</div>
</template>

<script>
	import Laptop from '../components/Laptop.vue';
	import GithubApi from '../mixins/GithubApi.js'

	export default {
	  name: 'year-in-review-view'
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
