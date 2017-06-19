<template>
	<div class="container">
		<div class="projects-wrapper">
			<!-- Row 1 -->
			<div class="row">
				<projectcard 
					title="1st Day" 
					description="Petoskey/Mackinaw.  Option 1) https://www.airbnb.com/rooms/7601320?location=Mackinac%20Island%2C%20MI%2C%20United%20States&s=hdaNuVnb
													 Option 2) 

					">
				</projectcard>
				<projectcard 
					title="2nd Day" 
					description="Pictured Rocks
								 Option 1) https://www.airbnb.com/rooms/4029699?location=Pictured%20Rocks%20Cruises%2C%20City%20Park%20Drive%2C%20Munising%2C%20MI%2C%20United%20States&s=Oz7ViQfD
								 
					">
				</projectcard>
				<projectcard 
					title="3rd Day" 
					description="">
				</projectcard>
			</div>

			<br /><br />

		</div>

	</div>
</template>

<script>
	import Projectcard from '../components/Projectcard.vue';

	export default {
	  name: 'trips-view',
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

