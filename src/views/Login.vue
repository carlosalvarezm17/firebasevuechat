<template>
    <div>
        <h3>Login</h3>
        <button @click="login">Login with google</button>        
    </div>
</template>

<script>

import firebase from 'firebase'
export default {
    methods:{
        login(){
            var provider = new firebase.auth.GoogleAuthProvider();
        }
    }
}
</script>