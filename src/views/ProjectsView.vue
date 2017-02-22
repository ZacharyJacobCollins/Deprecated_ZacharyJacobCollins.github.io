<template>
	<div class="container">
		<div class="projects-wrapper">
			<!-- Row 1 -->
			<div class="row">

				<projectcard 
					title="Blooming Garden" 
					description="Automated Gardening written in Laravel/Vue/Python. Grow plants all year long, share results with friends, optimize with ML. "
					link="https://devpost.com/software/blooming-garden">
				</projectcard>

				<projectcard 
					title="Remember" 
					description="Losing your stuff is a thing of the past, keys, wallets, cell phones"
					link="https://devpost.com/software/remember-bl679g">
				</projectcard>

				<projectcard 
					title="Internodes" 
					description="Augmented reality system built at Mhacks 8, and designed for detroit"
					link="https://github.com/ZacharyJacobCollins/Mhacks8LaravelApp">
				</projectcard>

			</div>

			<!-- Row 2 -->
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
