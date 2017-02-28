<template>
	<div class="main-panel col-6">
		<p class="panel-text">{{ content }}</p>
	</div> 
</template>

<script>
	name: 'panel',
	props: ['content']
</script>

<style scoped>

	html, body, .container { 
	  height: 100%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}

	.main-box {
	  border-radius: .3in;
	  background: black;
	  box-shadow: 0 10px 75px -16px #000;
	}

	.quote-text {
	  font-family: 'Source Code Pro', 'Megrim', cursive;
	  color: white;
	}


</style>

