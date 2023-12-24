<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const isLoggedIn = ref(false);
let email = ref('');
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            email.value = auth.currentUser.email;
            //console.log(auth.currentUser.email);
        }
    });
});

</script>

<template>
<div class="articlewrapper">
    <h1>Моят профил</h1>
        <h2>Моите данни</h2>
        <span>Регистриран имейл:&nbsp;&nbsp; {{ email }}</span>
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