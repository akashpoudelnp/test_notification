<script setup>
import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";
import {ref} from "vue";

const firebaseConfig = {
    apiKey: "AIzaSyCPpE_inybQtcfi3e7sQioLVzVsEAqOBek",
    authDomain: "lwf-app.firebaseapp.com",
    projectId: "lwf-app",
    storageBucket: "lwf-app.appspot.com",
    messagingSenderId: "401152904482",
    appId: "1:401152904482:web:f5fe697d53ec329bfc697b",
    measurementId: "G-FEEDT8665T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const myToken = ref('not_loaded');

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BNS-rfCR8Sdz5bOrW4bV2gaLXYnEMphsfNKVbwxPbQMPsyAoCwcI99ZNk8lO4wV9C8coMKU6_jXqFCS7o5LEgq8' }).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken)
        myToken.value =currentToken;
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});
</script>

<template>
  <main>
      <h1>Test Notification Sender</h1>
      <pre>
          {{myToken}}
      </pre>
  </main>
</template>
