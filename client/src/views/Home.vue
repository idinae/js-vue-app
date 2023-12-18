<script >
import FilterNav from './Filter/FilterNav.vue';

export default {
  components: {
	FilterNav,
  },
};
</script>

<template>
	<div class="container">
		<div> 
			<img class="imglogo" src="../assets/images/img1.jpg" alt="aubergine in a plate" />
		</div>
		<div>
			<FilterNav />
			<!-- <div className={style.reciperow}>
				{this.state.recipes.map(x => 
					<Recipe 
						key={x._id} 
						id={x._id}
						type={x.type}
						name={x.name} 
						description={x.description} 
						imageUrl={x.imageurl} 
						likes={x.likes} 
					/>)}
			</div> -->
		</div>
	</div>
</template>

<style scoped>
h1,
h2,
h3 {
	margin: 0;
	/* padding: 0; */
}

p,
ol,
ul {
	margin-top: 0px;
}

p {
	line-height: 200%;
}

a:hover {
	text-decoration: none;
}

.container {
	width: 1200;
	margin: 0px auto;
}

.notfound {
	text-align: center;
	padding: 50px 0px 20px;
}
</style>
