<template>
     <nav >
      <div v-if="user">
          <p>Hi {{ user.displayName }}</p>
          <p class="email">logged in as {{ user.email }} </p>
      </div>
      <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser'
import { auth } from '@/firebase/config';

    export default{
        setup(){
            let error = ref('');
            let {user}= getUser();
            let logout = async() =>{
              try{
                await auth.signOut();
                
                console.log("logout work");
              }catch(err){
                error.value = err.message;
              }
            }
         
            return{
                logout,
                user,
                error
            }
        }
    }
</script>

<style>
     nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>