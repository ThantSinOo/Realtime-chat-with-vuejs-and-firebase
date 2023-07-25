<template>
    <h3>Sign Up</h3>
    <form @submit.prevent="submitSignUp">
        <input type="text" placeholder="Enter Name" v-model="displayName" />
        <input type="email" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <div v-if="error" class="error">{{ error }}</div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';
    export default{
        setup(props, context){
            let displayName = ref('');
            let email = ref('');
            let password = ref('');

            let {error, createAcc} = useSignup();
            let submitSignUp = async() =>{
                let res = await createAcc(displayName.value, email.value, password.value);
                if(res){
                    context.emit('enterChat');
                }
                console.log("res data =>", res.user);
            }
            return{
                displayName,
                email,
                password,
                submitSignUp,
                error
            }
        }
    }
</script>