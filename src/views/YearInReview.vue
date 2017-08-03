<template>
	<div class="container">
		<div class="center">
			<div class="welcome-display">
				<h1 class="title"> Year in Review </h1>
				<laptop></laptop>
			</div>
			<br />
			<h2> Life Events </h2>
			<div class="row">
				<ul>

					<li> January 22, 2017.   Placed 1st at Spartahack 2017 https://devpost.com/software/blooming-garden</li>
					<li> February 26, 2017.  Won Feed Clothe prize at hackillinois https://devpost.com/software/drop-earrings-not-bombs </li>
					<li> March 17, 2017.  Recieved offer for fulltime position at Service Spring Corp. as a software engineer.  Salary enough to save and do fun things, 2 days a week remote, health insurance </li>
					<li> March 23, 2017.  Found a sublet to live in for the summer in downtown ann arbor http://www.towerplaza.net/ </li>
					<li> March 26, 2017.  Placed 1st at Mhacks https://devpost.com/software/whispr </li>
					<li> April 9, 2017.  Bought a cool watch</li>
					<li> April 10, 2017.  Attended the computer science celebration of excellence at EMU.  Thinking about sponsoring an ACM scholarship in coming years</li>
					<li> April 20, 2017.  Recieved and accepted a position at <a href="https://notion.ai">Notion</a> as a Cloud/Lead Voice Engineer (now <a href="https://trove.ai">Trove.AI</a>), working on IoT Devices!</li>
					<li>May 20, 2017.  Came to the conclusion that Macs are much much better than PCs </li>
					<li> May 21, 2017.  Won the largest cash prize and a trip for building an Alexa/Api application focused around providing information regarding safe drinking water at <a href="https://hackwsu.com">HackWSU</a></li>
					<li> May 30, 2017.  Dropped my Networking course at Eastern michigan University to be taken at a later date.</li>
					<li>June 8, 2017.  Spent about a month in a really weird situation crushing on a girl that wasn't into me.</li>
					<li> June 16, 2017. Gave $1,000 to an acquaintance I know in the Philipines so he could finish his schooling kicking off fulfilling one of my longtime goals of <a href="http://effective-altruism.com/">earning to give.</a></li>
					<li>July 4, 2017.  July 4th was great, went to a bbq and hung out in a rooftop hottub with friends</li>
					<li>July 10, 2017.  Attempted and failed at 500 lbs. deadlift.  Got it about 2/3 of the way up.  Couldn't lock it out</li>
					<li>July 11, 2017. Started the alchemist.  Phenomenal book.</li>
					<li>July 15, 2017.  Tried a cigar for the first time.  A puff is a decent accessory to a good glas of whiskey, but nothing to write home about.</li>
					<li>July 31, 2017.  Won best design hack at Detroit Industrial Hackathon.</li>
				</ul>
		    </div>
			<h2> Books I've read this year </h2>
			<ul>
				<li> The Blood Mirror - Brent Weeks: The fourth book in onne of my favorite fantasy series.</li>
				<li> The Warded Man - Peter V. Brett: The first book in the demon cycle.  Follows Arlen, an extremely relateable character for me</li>
				<li> Tuesdays with morrie - Mitch Albom</li>
				<li> The Alchemist - Paulo Coelho</li>
				<li> Radical Candor - Kim Scott: An extremely useful book that walks through building strong relationships as a manager, as well as how to manage more effectively</li>
			</ul>
			<h2> Concepts I've Encountered </h2>
			<ul>
				<li> <a href="https://en.wikipedia.org/wiki/Fitts%27s_law">Fitts's Law</a> Utilized in the creation of good UI.  Essentially closer mouse movements are better. Buttons on edges are better.  Bigger buttons are better</li>
				<li> <a href="https://en.wikipedia.org/wiki/Hick%27s_law">Hick's Law</a> The amount of choices a person has affects the time they will take to make them logarithmically. Modeled by equation T = b * log_2(n+1)  Where T is the average reaction time to choosing a choice, n is number of equally probable choices, and b is a constant</li>
			</ul>
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
