<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const isLoggedIn = ref(false);
let username = '';
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            username = auth.currentUser.email.split('@')[0];
            console.log(username);
        }
    });
});

</script>

<template>
<div class="articlewrapper">
    <h1>Моят профил</h1>
        <h2>Моите данни</h2>
        <span>Регистриран имейл:&nbsp;&nbsp; {{ username }}</span>
        <h2>Моите рецепти</h2>
            <div>                      
                <!-- {
                recipes
                    .filter(x => x.author === username)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(x => 
                        <div key={x._id}>
                            <Link to={`/recipes/details/${x._id}`} className={style.profilelink}>
                            {x.name}
                            </Link>
                        </div>)
                } -->
            </div>
</div>
</template>


<style scoped>
.container {
    width: 1200px;
    margin: 0px auto;
  }
  
.articlewrapper {
    max-width: 600px;
    margin: 0px auto;
    text-align: center;
  }
  
.articlewrapper h1 {
    padding: 50px 0 30px;
  }

.profilelink {
    text-decoration: none;
  }

.profilelink:hover, 
.profilelink:visited:hover {
    background-color: #FFF;
    color: rgb(235, 143, 57);
  }

.profilelink:visited {
    color: gray;
  }

</style>