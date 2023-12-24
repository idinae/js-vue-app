<!-- <script> -->
//import { useCartStore } from '../store/cartStore';

//     export default {
//         components: {
//             RouterLink,
//         },
//         data() {
//             return{
// 					// userData: {
// 					//     isAuthenticated,
// 					//    username
// 					// }
//             }
//         },
//         // cartProducts: {
//         //     type: Array,
//         //     required: true,
//         //     default: () => []
//         // },
//         //emtis: ['onSelect'],
//         // computed: {
//         //     ...mapState(useCartStore, ['products'])
//         // },
//         methods: {
//             // onSelect(view) {
//             //     this.$emit('onSelect', view);
//             // }
//         }
//     };
<!-- </script> -->

<script setup>
	import { ref, onMounted } from 'vue';
	import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

	import { mapState } from 'pinia';
    import { RouterLink, useRouter } from 'vue-router';

	const router = useRouter();
	const isLoggedIn = ref(false);
	let username = ref('');
	
	let auth;
	onMounted(() => {
		auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				isLoggedIn.value = true;
				username.value = auth.currentUser.email.split('@')[0];
				console.log(username.value);
			} else {
				isLoggedIn.value = false;
			}
		});
	});

	const handleSignOut = () => {
		signOut(auth).then(() => {
			router.push('/');
		});
}

</script>

<template>
    <div>
		<div class="container">
			<div class="header">
				<div class="logo">
					<h1><router-link to="/" class="headerlogo"><span>Cook</span>Book</router-link></h1>
				</div>
				<div class="menu">
					<ul>
					<!-- {isAuthenticated ? <li><Link to="/recipes/create">Create</Link></li> : ''} -->
					<li v-if="isLoggedIn" class="welcome">Welcome, {{username}}!</li>
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
					<li><router-link to="/register" v-if="!isLoggedIn">Register</router-link></li>
					<li><router-link to="/profile" v-if="isLoggedIn">Profile</router-link></li>
					<li><router-link to="/logout" @click="handleSignOut" v-if="isLoggedIn">Logout</router-link></li>
						

					</ul>
				</div>
			</div>
		</div>
    </div>
</template>


<style scoped>
/** LOGO */

.logo {
	float: left;
	width: 300;
	letter-spacing: -2px;
}

.logo h1 a {
	display: block;
	line-height: 100px;
	text-transform: uppercase;
	text-decoration: none;
	font-family: 'Archivo Narrow', 'Open Sans', sans-serif;
	font-size: 1.3em;
	color: #3E3E3E;
}

.logo span {
	color: rgb(235, 143, 57);
}

/** MENU */

.menu {
	float: right;
	width: 800px;
}

.menu ul {
	float: right;
	margin: 0px;
	padding: 30px 0px 0px 0px;
	list-style: none;
	line-height: normal;
}

.menu li {
	float: left;
	border-left: 1px solid #E7E7E7;
	list-style: none;
}

.menu li:first-child {
	border-left: none;
}

.menu a, .welcome {
	display: block;
	padding: 10px 20px;
	margin: 0em 1em;
	letter-spacing: 2px;
	text-decoration: none;
	text-transform: uppercase;
	font-family: 'Archivo Narrow', sans-serif;
	font-size: 1.10em;
	font-weight: 600;
	color:  rgb(235, 143, 57);
}

.menu .active a {
	background: rgb(235, 143, 57);
	border-radius: 5px;
	box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.1);
	border: 1px solid rgb(184, 113, 46);
	color: #FFFFFF;
	cursor: pointer;
}

.menu .active a:hover {
	background-color: rgb(184, 113, 46);
	cursor: pointer;
}

.menu .active a:active {
	background-color: rgb(184, 113, 46);
	cursor: pointer;
}

.menu a:hover {
	text-decoration: none;
	color: #FFFFFF;
	cursor: pointer;
}

/** HEADER **/

.header {
	overflow: hidden;
	border-bottom: 1px solid #E7E7E7;
}

.container {
	max-width: 1200px;
	margin: 0px auto;
}

.welcome {
	color:  darkgray;
}


@MEDIA all and (max-width: 600px) {

    .body {
		max-width: 600px;
	}
	
	.container {
		max-width: 600;
		margin: 0px auto;
	}

	.header {
		max-width: 600;
		margin: 0px auto;
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: space-around;
	}

	.menu {
		max-width: 100%;
	}

	.menu ul {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		float: unset;
		text-align: center;
		padding: 0 0 20px 0;
	}

}
</style>