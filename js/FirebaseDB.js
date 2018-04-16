// Initialize Firebase
var config = {
    apiKey: "AIzaSyC46U4jvWDPWiHdGzXfczKP9C22r_OObjc",
    authDomain: "aromas-del-sur.firebaseapp.com",
    databaseURL: "https://aromas-del-sur.firebaseio.com",
    projectId: "aromas-del-sur",
    storageBucket: "aromas-del-sur.appspot.com",
    messagingSenderId: "63263763302"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  function setMessages(messages) {
    console.log("saved messages to Firebase");
    database.ref("messages").set(messages);
}

function getMessages(callback){
    database.ref("messages/").once("value").then(snapshot => {
        var data = snapshot.val();
        callback(data);
    });
}
