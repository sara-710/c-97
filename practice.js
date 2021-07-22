var firebaseConfig = {
    apiKey: "AIzaSyDxYcQ514hHvbZUp7MJ64rYynnCCgSIYVY",
    authDomain: "practice-activity-kwitte-51f5a.firebaseapp.com",
    databaseURL: "https://practice-activity-kwitte-51f5a-default-rtdb.firebaseio.com",
    projectId: "practice-activity-kwitte-51f5a",
    storageBucket: "practice-activity-kwitte-51f5a.appspot.com",
    messagingSenderId: "478197716952",
    appId: "1:478197716952:web:07144e5c1f0dc8e70dc4ad",
    measurementId: "G-DVNGH2VM8S"
};
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user name"
    });
}