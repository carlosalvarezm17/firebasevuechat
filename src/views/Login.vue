<template>
  <div>
    <h3>Login</h3>
    <button @click="login">Login with google</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  components: {
    
  },
  methods: {
      login: function() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(this);
            this.$router.push("/");
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage);
          });
      }
    }
};
</script>