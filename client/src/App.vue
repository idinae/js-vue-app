<script>
//import Home from './views/Home.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    //Home,
	AppHeader,
    AppFooter
  },
};
</script>

<template class="App">
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
html,
body {
	height: 100%;
}

body {
	margin: 0px;
	padding: 0px;
	font-family: 'Open Sans', sans-serif;
	font-size: 10pt;
	color: #727272;
}

.container {
	max-width: 1200px;
	margin: 0px auto;
}

header h1, h2, h3 {
	padding: 20px 0px 20px 0px;
	text-transform: uppercase;
	font-family: 'Arial Narrow', Arial, sans-serif;
}

/* .banner {
	padding: 30px 0px;
} */

.reciperow {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}


@MEDIA all and (max-width: 600px) {

  .body {
        max-width: 600px;
	}
	
	.container {
		max-width: 600;
		margin: 0px auto;
	}

	.imglogo {
		display: none;
	}

}






</style>