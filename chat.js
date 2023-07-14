// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBDjDHF6CfY0DOmOq1IcFPo-HvG2-pgni8",
    authDomain: "kwitter-47723.firebaseapp.com",
    databaseURL: "https://kwitter-47723-default-rtdb.firebaseio.com",
    projectId: "kwitter-47723",
    storageBucket: "kwitter-47723.appspot.com",
    messagingSenderId: "895710669024",
    appId: "1:895710669024:web:c82abd82c6722dcc3dc885",
    measurementId: "G-P7JBMNVHFM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



