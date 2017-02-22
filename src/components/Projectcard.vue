<template>

	<div class="card col-sm-3 offset-sm-1">
	  <div class="card-block">
	    <h3 class="card-title">{{ title }}</h3>
	    <hr/>
	    <p class="card-text">{{ description }} </p>
	    <a :href="link" class="btn btn-primary">View</a>
	  </div>
	</div>

</template>

<script>

	export default {
	  	name: 'projectcard',
		props: ['title', 'link', 'description'], 
	}
</script>

<style>

</style>