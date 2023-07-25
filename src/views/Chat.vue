<template>
   <Navbar></Navbar> 
</template>

<script>
import { watch } from 'vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
    export default{
        components:{
            Navbar
        },
        setup(){
            let router = useRouter();
            let {user} = getUser();
           watch(user, ()=>{
            if(!user.value){
                router.push("/");
            }
           })
        }
    }
</script>

<style>

</style>