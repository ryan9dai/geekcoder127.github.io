---
title:  "How to use CSS Keyframes"
subtitle: "A quick and simple guide"
image: "img/posts/how-to-css-keyframes.png"
date: 2018-02-03 09:00:00
---

In your website, have you ever wanted to make custom animations without flash or special custom gifs?

Well, CSS keyframes solve this problem. CSS keyframes allow you to create custom animations for most HTML elements.

## So how do I use them?

Well, keyframes are first called by an element with the animation CSS property.

The animation property looks like this:

``` css
animation: exampleAnimation 1s linear infinite;
```

This will make the animation call the "exampleAnimation" keyframe, which will last 5 seconds, and be linear (go at the same pace regarless of time), and will loop infinitely.

But, of course, this won't work, because we haven't defined "exampleAnimation."

The define this, we use the "@keyframes" selector.

For our example animation it would start like this:

``` css
@keyframes exampleAnimation {
	
}
```

Now we need to specify our animation inside the curly parentheses.

To make an animation, we specify a time in the animation, and styles that correspond to that time.

With the times written, your element will automatically smoothly transition from each time style to the next.

For example, we could have the keyframe:

``` css
@keyframes exampleAnimation {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
```

This would give your element a nice fade in and pop in effect.

But this still will be weird, because we set the animation to infinite.

Let's take the infinite out.

It still doesn't work though, because the final style in the keyframe expires after the animation is over.

We can add some Javascript to compensate, though.

Essentially we'll just use the setTimeout function to add a class with the final styles to the element.

That could look like this:

``` javascript
button.onclick = function(){
	// Add class with animation
	element.setAttribute("class","animateIn");
	setTimeout(function(){
		element.setAttribute("class","animateIn animated");
	},1000);
}
```

The animated class could just have styles that look exactly like the final styles in our keyframe:

``` css
.animated {
	opacity: 1;
	transform: scale(1);
}
```

## That's all for this week!

I hope you learned something from this post!

### Quick update: I'll probably be posting more on Wednesdays now!

``` javascript
console.log("Bye!");
```