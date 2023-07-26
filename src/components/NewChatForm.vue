<template>
    <form>
        <textarea placeholder="Enter Message" v-model="message" @keypress.enter="handleSubmit"></textarea>
    </form>
</template>

<script>
import {ref} from 'vue';
import { db } from '@/firebase/config';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import { firestore } from '../firebase/config'
import getCollection from '@/composables/getCollection';

    export default{
        setup(){
            let message = ref('');
            let {user} = getUser();
            let {error,addDoc} = getCollection("messages");
            let handleSubmit = async () =>{
                let chat = {
                    message: message.value,
                    name: user.value.displayName,
                    created_at: timestamp()
                }
                await addDoc(chat);
                message.value = '';
                // 
    // const collectionRef = db.collection('messages');
    // collectionRef.get()
    //   .then(querySnapshot => {
    //     // If the query was successful, Firestore is connected
    //     console.log('Connection to Firestore succeeded!');
    //   })
    //   .catch(error => {
    //     console.error('Error connecting to Firestore:', error);
    //   });
            }

            return{
                message,
                handleSubmit
            }
        }
    }
</script>

<style>
    form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>