<template>
	<div class="container">
		<div class="projects-wrapper">
			<!-- Row 1 -->
			<div class="row">
				<projectcard 
					title="Blooming Garden" 
					description="Automated Gardening written in Laravel, Vue, and Python. Grow plants all year long. Share results with friends, optimize with ML.  1st at Spartahack 2017"
					link="https://devpost.com/software/blooming-garden">
				</projectcard>
				<projectcard 
					title="Remember" 
					description="Losing your stuff is a thing of the past, keys, wallets, cell phones, remember tracks it all.  Just ask Alexa."
					link="https://devpost.com/software/remember-bl679g">
				</projectcard>
				<projectcard 
					title="Internodes" 
					description="Augmented reality system built at Mhacks 8, and designed for detroit mobility."
					link="https://github.com/ZacharyJacobCollins/Mhacks8LaravelApp">
				</projectcard>
			</div>

			<br /><br />

			<!-- Row 2 -->
			<div class="row">
				<projectcard 
					title="Drop Earrings Not Bombs" 
					description="Ecommerce website built for syrian refugees at Hackillinois 2017."
					link="https://github.com/ZacharyJacobCollins/Mhacks8LaravelApp">
				</projectcard>
				<projectcard 
					title="Whisper" 
					description="Smart glasses. 1st at Mhacks 9"
					link="https://devpost.com/software/whispr">
				</projectcard>
			</div>
		</div>

	</div>
</template>

<script>
	import Projectcard from '../components/Projectcard.vue';

	export default {
	  name: 'projects-view',
	  components: {
	  	Projectcard
	  }
	}
</script>

<style scoped>
	.projects-wrapper {
		margin-top: 100px;
	}
</style>

