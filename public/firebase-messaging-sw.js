importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
    apiKey: "AIzaSyA3-ObYYDK2LloI-MM4wD7IBIX7l6Ek5Po",
    authDomain: "bhole-1214d.firebaseapp.com",
    databaseURL: "https://bhole-1214d.firebaseio.com",
    projectId: "bhole-1214d",
    storageBucket: "bhole-1214d.appspot.com",
    messagingSenderId: '235280288937'
  };
  firebase.initializeApp(config);
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
console.log("service worker")
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});