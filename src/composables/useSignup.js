import { ref } from 'vue'
import { auth } from '../firebase/config'

let error = ref(null);

let createAcc = async(displayName,email,password) =>{
    try{
        //  let res = await auth.createUserWithEmailAndPassword(email.value,password.value);
        let res = await auth.createUserWithEmailAndPassword(email,password); 
        res.user.updateProfile({displayName:displayName});
        if(!res){
            throw new Error("Can't Sign Up");   
        }
        return res;
        }catch(error){
            error.value = error.message;
            console.log(error);
        }

}
let useSignup = () =>{
    return{error, createAcc}
}


export default useSignup;