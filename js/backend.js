// Firebase Initialization
var config = {
  apiKey: "AIzaSyD5vMJEi9o4ptfHOFXtD3uTHkO5sVl9gSk",
  authDomain: "full-stack-fun.firebaseapp.com",
  databaseURL: "https://full-stack-fun.firebaseio.com",
  projectId: "full-stack-fun",
  storageBucket: "full-stack-fun.appspot.com",
  messagingSenderId: "494686063672"
};
firebase.initializeApp(config);

var starCountRef = firebase.database().ref('posts');
starCountRef.on('value', function(snapshot) {
  alert(snapshot.val());
});