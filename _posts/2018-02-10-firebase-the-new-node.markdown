---
title:  "Firebase: The New Node"
subtitle: "The Perfect Backend Solution?"
image: "img/posts/firebase-the-new-node.png"
date: 2018-02-10 09:00:00
---

### I guess I'll start with a bit of history.

I've been doing web dev for a while, and a lot of the times I come across a project that requires backend code.

For me, anything on the backend is really annoying - MySQL is a really big hassle, and Nodejs is just too complex.

So, one day, I heard of this thing called Firebase.

Firebase claims to be the "all in one solution" for all of your backend needs.

Firebase handles user authentication, whether it be by email, or by Google Account.

Firebase also has a really handy realtime database, which you can use for just about anything.

It also has a bunch of other features that I haven't explored yet (but you can).

### So, in this post I'll show you how to make a quick chat application.

This application will be very simple, and require only a couple of things.

First, a Sign Up and Sign In system, and next, a realtime chat for all users to talk on.

For Sign Up and Sign In, we'll use Firebase Authentication, and for the Realtime Chat, we'll use Firebase Realtime Database.

First, I'll make a file called ```index.html```. This will be the sign in and sign up page.

Next, we'll make an html page called ```chat.html``` for our chat, of course.

Note that I won't be covering the CSS in this post.

```index.html``` and ```signup.html``` will have similar HTML, which will look like this:

```html
<title>Firebase Chat</title>
<h1>Firebase Chat!</h1>
<form>
	<input type="text" placeholder="Email..." id='email'>
	<input type="password" placeholder="Password..." id='password'>
	<input type="button" value='Sign In With Email and Password' id='signin'>
	<input type="button" value='Sign Up With Email and Password' id='signup'>
</form>
```

This is obviously very sloppy HTML, but it'll get the job done.

Now let's do the chat's HTML.

```html
<title>Firebase Chat</title>

<input type="button" value='Sign Out' id='signout'>

<div id="chat"></div>

<input type="text" placeholder="Message" id='msgbox'>
<input type="button" value='Send' id='sendmsg'>
```

Now, we need to setup the Firebase side of things.

I'll first navigate to firebase.google.com, and start a new project.

Then, I'll click get started for web.

I'll copy the code into both files.

You also have to enable Firebase Authentication for email under the authentication tab.

On the index.html file, I'll create a authentication object in under my Firebase copied script.

```javascript
const auth = firebase.auth();
```

Next I'll setup the event listeners, with the ```signInWithEmailAndPassword``` and ```createUserWithEmailAndPassword``` Firebase functions.

```javascript
document.getElementById("signin").onclick = function(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	const promise = auth.signInWithEmailAndPassword(email,password);
}
document.getElementById("signup").onclick = function(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	const promise = auth.createUserWithEmailAndPassword(email,password);
}
```

We'll also setup our Auth change event.

This will fire when a user in signed in, signed up, or signed out.

The event also takes the ```firebaseUser``` variable, which has information about the user whose authentication changed.

Inside the event we'll navigate to the ```chat.html``` page, if the user is valid.

```javascript
auth.onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		window.location.href += "/../chat.html";
	}
});
```

Now we've got our authentication working!

Next we'll setup the chat app.

First, we'll setup the auth changed event.

Inside, we'll first set our global email variable to the users email.

We'll also see if the firebaseUser variable isn't valid, meaning you've clicked the sign out button.

We also have to add all our messages, which will be done in the child added event.

The child added event works for all messages (even ones sent before the page loaded), and works chronologically.

Inside this event, the snapshot variable is passed, which gives the object value and other information.

We'll write the message inside the snapshot variable inside the chat container.

```javascript
var email;

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(!firebaseUser){
		window.location.href += "/../index.html";
	}
	email = firebaseUser.email;
	firebase.database().ref().on("child_added",snapshot => {
		document.getElementById("chat").innerHTML += "<p><strong>" + snapshot.val().email + ": </strong>" + snapshot.val().message + "</p>";
	});
});
```

Finally, we need to be able to write to the chat.

For this, we'll create an event listener for the send button, that will add the message to the Firebase Database.

Then, we'll also clear the message input box.

```javascript
document.getElementById("sendmsg").onclick = function(){
	var msg = document.getElementById("msgbox").value;
	var pushObj = {email: email,message: msg};
	firebase.database().ref().push(pushObj);
	document.getElementById("msgbox").value = "";
}
```

To complete the entire app, we'll add the sign out functionality.

```javascript
document.getElementById("signout").onclick = function(){
	firebase.auth().signOut();
}
```

## Well, that's all!

You can download the code here [here](img/posts/firebase-the-new-node.zip){:download="firebase.zip"}.

Note that it'll **only work with your firebase config settings**, and I've left them blank.

```javascript
console.log("See you soon!");
```