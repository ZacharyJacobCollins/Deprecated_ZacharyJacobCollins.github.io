<template>

	<div class="card col-lg-3 offset-lg-1 project-card">
	  <div class="card-block">
	    <a :href="link"><h3 class="card-title">{{ title }}</h3></a>
	    <hr/>
	    <p class="card-text">{{ description }} </p>
	  </div>
	</div>

</template>

<script>

	export default {
	  	name: 'projectcard',
		props: ['title', 'link', 'description'], 
	}
</script>

<style scoped>
	.project-card {
		box-shadow: 0 10px 75px -16px #000;
		min-height: 350px;	
	}

</style>