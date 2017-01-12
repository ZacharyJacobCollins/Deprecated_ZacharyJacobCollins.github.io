<template>
  <div id="app">
	  	<transition name="fade" mode="out-in">
	      <router-view class="view"></router-view>
	    </transition>
  </div>
</template>


<style>
	@import url('https://fonts.googleapis.com/css?family=Raleway');	

	html, body, #app {
		font-family: 'Raleway', sans-serif;	
		width: 100%;
		height: 100%;
	}

	/*Transition Effect*/
	.fade-enter-active,
	.fade-leave-active {
	  transition: all 0.2s ease;
	}
	.fade-enter,
	.fade-leave-active {
	  opacity: 0;
	}

</style>
