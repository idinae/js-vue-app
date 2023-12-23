<script>
    export default {
      data() {
        return {
          user: {
            username: '',
            password: '',
            repeatPass: ''
          }
        }
      }
    }
</script>

<template>
    <div class="articlewrapper">
    <h1>Регистрирай се</h1>
        <form @submit.prevent="onSubmit">
            <label for="username">Имейл:</label>
            <input type="text" name={username} id="username" onChange="" v-model="user.username" />
            <label for="password">Парола:</label>
            <input type="password" name={password} id="password" onChange="" v-model="user.password" />
            <label for="repeatPassword">Повтори паролата:</label>
            <input type="password" name={repeatPassword} id="repeatPassword" onChange="" v-model="user.repeatPass" />
            <button type="submit" value="Register" class="buttonstyle">Изпрати</button>
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
    width: 160px;
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
      background-color: rgb(184, 113, 46);
      cursor: pointer;
  }

.validation {
  color: red;
  padding-bottom: 10px;
  display: none;
}

.show {
  display: block;
}
</style>