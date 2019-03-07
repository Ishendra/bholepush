importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ''
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
    console.log(notification.click_action)
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: notification.icon,
        image:notification.image,
        click_action:notification.click_action
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
