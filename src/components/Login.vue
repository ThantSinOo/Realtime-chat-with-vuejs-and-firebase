<template>
    <h3>Login</h3>
    <form @submit.prevent="submitLogin">
        <input type="email" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <div v-if="error" class="error">{{ error }}</div>
        <button>Login</button>
    </form>
</template>

<script>
import useLogin from '../composables/useLogin';
import { ref } from 'vue';
    export default{
        setup(props, context){
            let email = ref('');
            let password = ref('');

            let { error, signIn } = useLogin();
            let submitLogin = async() =>{
              let res = await signIn(email.value, password.value);
            //   console.log(res.user);
            if(res){
                context.emit("enterChat");
            }
            }
            return{
                email,
                password,
                submitLogin,
                error
            }
        }
    }
</script>
