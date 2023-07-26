import { ref } from 'vue';
import { db } from '@/firebase/config';
let getCollection = (collection) =>{
    let error = ref('');
    let addDoc = async(doc) =>{
       try{
        await db.collection(collection).add(doc);
       }catch(err){
        error.value = err.message;
       }
    }

    return{error,addDoc}
}

export default getCollection