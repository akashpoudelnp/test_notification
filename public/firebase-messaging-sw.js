// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCPpE_inybQtcfi3e7sQioLVzVsEAqOBek",
    authDomain: "lwf-app.firebaseapp.com",
    projectId: "lwf-app",
    storageBucket: "lwf-app.appspot.com",
    messagingSenderId: "401152904482",
    appId: "1:401152904482:web:f5fe697d53ec329bfc697b",
    measurementId: "G-FEEDT8665T",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
