---
title:  "How I Coded Snake in Under 5 Minutes"
subtitle: "A simple explanation"
image: "img/posts/how-i-coded-snake-in-under-5-minutes.png"
date: 2018-01-27 14:12:12
---

So a little while back I did a presentation where I programmed snake in front of around 50 people in under 5 minutes (I managed it in 4:42).

The program was written from scratch in just HTML, CSS and Vanilla JS, all in one file.

### Your probably thinking "You must have really great memorization skills and typing speed"

This really just isn't the case. Fast typing speeds is definitely a plus, but it isn't completely vital.

### So what did I do to go so quickly?

Well, I spent a while making the program as short as possible.

I got rid of **everything** that wasn't needed to make it work.

I also put everything in one file - CSS in "style" tags, and JS in "script" tags.

Furthermore, I tried to copy and paste as much as possible (and as fast as possible).

### Ok, can I just see the code?

Sure, I'll walk you through what I did, and the code.

First, I wrote the HTML element for the entire snake container, which would contain the snake and apples.

I made the ID of this element "game," so that it was easy to edit in the Javascript code.

``` html
<div id='game'></div>
```

Next, I started writing the CSS.

``` html
<style></style>
```

I first reset the margin and padding of all elements, so that they don't get in the way.

``` css
* {
	margin: 0;
	padding: 0;
}
```

Then, I style the game container.

I set the background to black, the height to the height of the window, and the width to the same as the height, so that the game container is a square.

``` css
#game {
	background-color: #000;
	width: 100vh;
	height: 100vh;
}
```

Next, I style the divs inside the game container.
These divs will be the grid spaces of the snake body and apple.

I set the width and height to 5% of the window height, so that it is 1/20 of the game container.

Thus, there will be 20 grid spaces on each side, and 400 grid spaces in all (20 x 20 = 400).

I also set their position to absolute, so that I can easily position them in the Javascript.

Finally, I add a black border to add a grid-spacing effect.

The black border adds size to the grid spaces, and to get rid of that extra space, I set the box sizing to border box.

I also make the background green.

``` css
#game div {
	width: 5vh;
	height: 5vh;
	position: absolute;
	box-sizing: border-box;
	border: 2px solid black;
	background-color: #0f0;
}
```

The apple will have a background color of red, so I add that to my CSS.

``` css
#game div.apple {
	background-color: #f00;
}
```

Okay, now we're done with the CSS. 

If you're a decently fast typer, you should be able to write this portion and the HTML in a minute or so.

So now we need to start the JS.

``` html
<script></script>
```

To begin, I declare all the necessary variables.

These will be:

- My player (snake head) position variables (px and py)
- My apple position variables (ax and ay)
- My velocity variables for movement and direction (xv and yv)
- My trail array holding the entire tail of the snake (everything but the head)
- My gameover variable which checks if the game is over

I ignore the var before the variable declaration, as it is not needed, and I try to use a single declaration for multiple variables when possible.

``` javascript
px=py=9;
ax=ay=xv=yv=0;
trail=[{x: 9,y: 9}];
gameover=false;
```

Next, I add the arrow key event listeners.

Here copy and paste is a really big help.

``` javascript
document.onkeydown = function(e){
	switch(e.keyCode){
		case 37:
			xv=-1;yv=0;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 38:
			yv=-1;xv=0;
			break;
		case 40:
			yv=1;xv=0;
	}
}
```

Now comes the main part of the game: the main game loop.

The game loop is essentially a giant function that repeats over and over again.

In the case of the snake game, I'm making the game loop repeat every 1/10 of a second, to make the snake move fast, but not **too** fast.

We can use the setInterval function to achieve a game loop.

``` javascript
setInterval(function(){
	// Code Here
},100);
```

In the game loop, I start by adding the velocity to the snakes position, creating a moving effect.

``` javascript
px += xv;
py += yv;
```

Then I add a couple of ```if``` statements to add the effect of the snake going through the walls.

Again, copy and paste is very useful here.

``` javascript
if(px == -1){
	px = 19;
}
if(px == 20){
	px = 0;
}
if(py == -1){
	py = 19;
}
if(py == 20){
	py = 0;
}
```

Next, I clear my game board and draw the apple.

I use the style attribute to position the apple at the right position.

``` javascript
document.getElementById("game").innerHTML = "";

document.getElementById("game").innerHTML += "<div class='apple' style='left: " + ax*5 + "vh; top: " + ay*5 + "vh;'></div>";
```

I then add my gameover checking.

``` javascript
if(gameover){
	location.reload();
	alert("gameover :(");
}
```

Now, I loop through the entire trail, and draw each grid space of the snakes body.

I use the .forEach function to quickly loop through the array.

I also use this to check if the snakes head is touching it's tail, and the snake has actually started moving.

``` javascript

trail.forEach(function(item,index){
	document.getElementById("game").innerHTML += "<div style='left: " + item.x*5 + "vh; top: " + item.y*5 + "vh;'></div>";
	if(item.x == px && item.y == py && (xv + yv) != 0){
		gameover = true;
	}
});

```

To make the illusion that the snake is moving, we need to cut off the last part of its tail and add an extra grid space for its head.

To do this, we'll use the trail.shift and trail.push functions.

But, when the snake eats an apple, we want it to grow, right? Well we can do that by only cutting off the last part of its tail when it didn't eat an apple.

``` javascript
if(ax == px && ay == py){
	ax = Math.floor(Math.random() * 20);
	ay = Math.floor(Math.random() * 20);
}else{
	trail.shift();
}
trail.push({x: px, y: py});
```

Now we have a workable version of snake. This is the version I programmed in 5 minutes, but there are a few bugs to fix.

The first one and main one is that if you try to go the opposite direction you're currently in, you lose.

This is because the program tries to make the head literally go backwards, which will collide with the snakes tail.

All we have to do is not allow the direction change if the current direction is the opposite of the desired direction.

Here's the new code for the key event listener switch statement:

``` javascript

case 37:
	if(xv!=1){
		xv=-1;yv=0;
	}
	break;
case 39:
	if(xv!=-1){
		xv=1;yv=0;
	}
	break;
case 38:
	if(yv!=1){
		yv=-1;xv=0;
	}
	break;
case 40:
	if(yv!=-1){
		yv=1;xv=0;
	}

```

### Okay, That's it!

Now all that's left is to practice a few times and memorize the steps.

If you want to download the code, go [here](img/posts/how-i-coded-snake-in-under-5-minutes.html){:download="snake.html"}, and if you want to just play, go [here](img/posts/how-i-coded-snake-in-under-5-minutes.html){:target="_blank"}.

### I hope you liked this post!

``` javascript
var week = 7;
console.log("See you in " + week + " days!");
```