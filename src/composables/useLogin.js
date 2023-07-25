import { auth } from '@/firebase/config';
import { ref } from 'vue';

let error = ref('');
let signIn = async(email,password) =>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password);
        if(! res){
            throw new Error("Sorry, Can't Login");
        }
        return res;
    }catch(err){
        error.value = err.message;
        console.log(error.message);
    }
}

let useLogin = () =>{
    return {error, signIn}
}

export default useLogin;