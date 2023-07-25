<template>
    <div class="welcome container">
        <div v-if="isLogin">
            <Login @enterChat="enterChat"></Login>
            <p>Not a member <span @click="isLogin=!isLogin">Click to Signup</span></p>
        </div>
        <div v-else>
            <SingUp @enterChat="enterChat" />
            <p>Already a member? <span @click="isLogin=!isLogin">Click to Login</span></p>
        </div>
      
</div>
</template>

<script>
    import { ref } from 'vue';
    import SingUp from '@/components/SingUp.vue';
    import Login from '@/components/Login.vue';
    import { useRouter } from 'vue-router';
    export default{
        components: { SingUp, Login },
        setup(){
          let router = useRouter();
          let isLogin = ref(true);
          let enterChat = () =>{
            router.push('/chat');
          }
            return{
                isLogin,
                enterChat
            }
        }
    }
</script>

<style>
 
    .welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

</style>