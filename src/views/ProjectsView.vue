<template>
	<div class="container">
		<div class="projects-wrapper">
			<!-- Row 1 -->
			<div class="row">
				<div class="card col-sm-3 offset-sm-1">
				  <div class="card-block">
				    <h3 class="card-title">Remember</h3>
				    <hr/>
				    <p class="card-text">Losing your stuff is a thing of the past, keys, wallets, cell phones </p>
				    <a href="https://github.com/ZacharyJacobCollins/Remember" class="btn btn-primary">Github </a>
				  </div>
				</div>

				<div class="card col-sm-3 offset-sm-1">
				  <div class="card-block">
				    <h3 class="card-title">Garden Bot</h3>
				    <hr/>
				    <p class="card-text"> Automated Gardening written in Golang, grow plants all year long </p>
				    <a href="https://github.com/ZacharyJacobCollins/Garden-Bot" class="btn btn-primary">Github</a>
				  </div>
				</div>

				<div class="card col-sm-3 offset-sm-1">
				  <div class="card-block">
				    <h3 class="card-title">Internodes</h3>
				    <hr/>
				    <p class="card-text"> Augmented reality system built at Mhacks 8, and designed for detroit</p>
				    <a href="https://github.com/ZacharyJacobCollins/Mhacks8LaravelApp" class="btn btn-primary">Github</a>
				  </div>
				</div>
			</div>

			<!-- Row 2 -->
		</div>

	</div>
</template>

<script>
	export default {
	  name: 'projects-view',
	}
</script>

<style scoped>

	div:hover div:not(:hover) {
		opacity: 0.7;
	}

	.projects-wrapper {
		margin-top: 100px;
		opacity: 1 !important;
	}

	.container {
		opacity: 1 !important;
	}

</style>
