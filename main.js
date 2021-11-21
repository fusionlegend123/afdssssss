var firebaseConfig = {
apiKey: "AIzaSyCsirFRClRCce0vgve1_gS-SHcDi5RtJyQ",
authDomain: "route655-c165c.firebaseapp.com",
databaseURL: "https://route655-c165c-default-rtdb.firebaseio.com",
projectId: "route655-c165c",
storageBucket: "route655-c165c.appspot.com",
messagingSenderId: "233202238786",
appId: "1:233202238786:web:3bc4b553a7cab439d334db",
measurementId: "G-1TE898DN45"
};
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){user_name=document.getElementById("user_name").Value;
firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}