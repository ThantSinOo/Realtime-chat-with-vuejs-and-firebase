<template>
   <Navbar></Navbar> 
   <ChatWindow></ChatWindow>
   <NewChatForm></NewChatForm>
</template>

<script>
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import { watch } from 'vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
    export default{
        components:{
            Navbar,
            ChatWindow,
            NewChatForm
        },
        setup(){
            let router = useRouter();
            let {user} = getUser();
            
           watch(user,()=>{
            if(!user.value){
                router.push("/");
            }
           })
        }
    }
</script>

<style>

</style>