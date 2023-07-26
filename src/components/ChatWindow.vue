<template>
   <div class="chat_window">
    <div class="messages" ref="msgBox">
        <div class="single" v-for="message in formattedMessages" :key="message.id">
            <span class="created_at">{{ message.created_at }}</span>
            <span class="name">{{ message.name }}</span>
            <span class="message">{{ message.message }}</span>
        </div>
    </div>
   </div>
</template>

<script>
import { db } from '@/firebase/config';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from "date-fns";
    export default{
        setup(){
            let messages = ref([]);
            let msgBox = ref(null);
            onUpdated(()=>{
                msgBox.value.scrollTop = msgBox.value.scrollHeight;
                console.log('Scroll value =>',msgBox.value.scrollTop );
            })
            let formattedMessages = computed(()=>{
                return messages.value.map((msg)=>{
                    let formatTime = formatDistanceToNow(msg.created_at.toDate());
                    return {...msg, created_at:formatTime}
                })
            })
            db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
                let result = [];
                snap.forEach((doc)=>{
                    let document = {... doc.data(), id:doc.id}
                    if(doc.data().created_at){
                        result.push(document);
                    console.log("Ref Message =>", messages.value);
                    }
                });
                messages.value = result;
                console.log("Result message =>", result);
                console.log("Ref message =>", messages.value.name);
            });
            return{
                messages,
                formattedMessages,
                msgBox
            }
        }
    }
</script>

<style>
      .chat_window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created_at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>