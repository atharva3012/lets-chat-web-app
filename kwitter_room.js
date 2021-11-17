const firebaseConfig = { apiKey: "AIzaSyCZF_0tRSa0PqpeXCjL7tHNhib4JpLJcyE",
 authDomain: "atharvakwitter.firebaseapp.com",
  databaseURL: "https://atharvakwitter-default-rtdb.firebaseio.com",
  projectId: "atharvakwitter",
   storageBucket: "atharvakwitter.appspot.com", 
   messagingSenderId: "624796650560",
    appId: "1:624796650560:web:9025b99894ad38950123a5",
     measurementId: "G-GKK6SMFLEN" };
     
     // Initialize Firebase const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
