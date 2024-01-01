<script>
    export default {
        data() {
            return {
                formData: {
                    type: '',
                    name: '',
                    products: '',
                    description: '',
                    imageUrl: ''
                }
            }
        },
        methods: {
            onFormChange(field, event) {
                this.formData[field] = event.target.value;
                console.log(this.formData[field]);
                console.log(event.target.name);
            }
        },
        // watch: {
        //     formData(newVal, prevVal) {
        //         console.log('watcher', newVal, prevVal);
        //     },
        //     //deep: true
        //     'formData.name': function (newVal) {
        //       console.log('formData', newVal);
        //     }
        // }
    }
</script>

<template>
    <div class="articlewrapper">
        <h1>Създай нова рецепта</h1>
        <form>
            <label htmlFor="type">Категория:</label>
            <select id="type" :value="formData.type" @input="onFormChange('type', $event)">
                <option value="starters">Предястия</option>
                <option value="mains">Основни ястия</option>
                <option value="desserts">Десерти</option>
            </select>
            <label htmlFor="name">Име:</label>
            <input type="text" name="name" id="name" :value="formData.name" @input="onFormChange('name', $event)" />
            <!-- <div className={`${style.validation} ${state.length<3 && style.show}`}>Name length should be minimum 3 characters.</div> -->
            <label htmlFor="products">Продукти:</label>
            <textarea type="text" rows="5" cols="50" name="products" id="products" :value="formData.products" @input="onFormChange('products', $event)"></textarea>
            <label htmlFor="description">Приготовление:</label>
            <textarea type="text" rows="10" cols="50" name="description" id="description" :value="formData.description" @input="onFormChange('description', $event)"></textarea>
            <label htmlFor="imageUrl">Снимка:</label>
            <input type="text" name="imageUrl" id="imageUrl" :value="formData.imageUrl" @input="onFormChange('imageUrl', $event)" />
            <button type="submit" class="buttonstyle" value="Create">Създай</button>
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

input,
textarea,
select {
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
  background-color: rgb(184, 113, 46);
  cursor: pointer;
}

textarea {
  padding: 8px;
  margin: 5px;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgb(32, 32, 32);
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