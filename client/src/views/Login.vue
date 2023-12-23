<script setup>
//import firebase from '../utils/firebase';
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref(); //error message
const router = useRouter();

const login = () => {
  const auth = getAuth(); //from firebase/auth
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in!");
      console.log(auth.currentUser.email); //stored in local storage
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case"auth/invalid-email":
          errMsg.value="Invalid email!";
          break;
        case"auth/user-not-found":
          errMsg.value="No account with that emal was found!";
          break;
        case"auth/wrong-password":
          errMsg.value="Incorrect password!";
          break;
        default:
        errMsg.value="Email or password was incorrect!";
          break;
      }
      //alert(error.message);
    });
};

  // export default {
  //     data() {
  //     return {
  //       user: {
  //         email: '',
  //         password: '',
  //       }
  //     };
  //   },
  //   methods: {
  //     async onSubmit() {
        
  //     }
  //   }
  // }
</script>

<template>
    <div class="articlewrapper">
        <h1>Влез</h1>
        <form @submit.prevent="onSubmit">
            <label for="email">Имейл:</label>
            <input type="text" name="email" id="email" v-model="email" />
            <label for="password">Парола:</label>
            <input type="password" name="password" id="password" v-model="password" />
        <button type="submit" class="buttonstyle" value="Login" @click="login">Вход</button>
        <p v-if="errMsg" class="errMsg">{{ errMsg }}</p>
        </form>
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
    padding: 100px 0 30px;
}

/*Form style*/
form {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: #808080;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="number"],
  textarea {
    padding: 8px;
    margin: 5px;
    border-radius: 10px;
    outline: none;
    border: 1px solid rgb(32, 32, 32);
  }
  
/* Button */
.buttonstyle {
    display: inline-block;
    width: 120px;
	margin-top: 20px;
	margin-bottom: 50px;
	padding: 10px 20px;
	background: rgb(235, 143, 57);
	border-radius: 5px;
	box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.1);
	border: 1px solid rgb(184, 113, 46);
	line-height: normal;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	text-shadow: 0px 1px 0px rgba(0, 0, 0, .2);
	font-size: 1em;
	font-weight: 400;
    color: #FFF !important;
    cursor: pointer;
}

.buttonstyle a {
	text-decoration: none;
	color: #FFF !important;
}

a:hover {
    background-color: rgb(184, 113, 46);
    text-decoration: none;
      cursor: pointer;
  }
  
  a:active {
      background-color: rgb(206, 102, 5);
      cursor: pointer;
  }

  .errMsg {
    color: rgb(161, 19, 4);
    margin-bottom: 50px;
  }
</style>