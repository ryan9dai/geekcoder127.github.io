---
title:  "How I Coded Snake in Under 5 Minutes"
subtitle: "A simple explanation"
image: "img/posts/how-i-coded-snake-in-under-5-minutes.png"
date: 2018-01-24 12:12:12
---

When I first started coding, I would just search up videos online to try to learn new stuff.

Every once and I while, when I was watching these videos, the person would pull up the terminal or command line, and type a bunch of commands.

### I didn't understand any of those commands.

After seeing people use the command line so much, I eventually figured most of it out, and the rest I learned online.

But if you're in the situation that I was in years ago, I don't want you to go through a bunch of internet articles to figure it out.

### So, I made this guide to teach you how the terminal works.

**1. Why is the terminal useful, and what is it used for?**

For starters, terminal can be really useful for navigating the filesystem extremely quickly.

With terminal, you can:
- Navigate through folders
- View files
- Edit files
- Create files
- Create folders
- Move folders
- Delete files
- Delete folders

So, if you're starting a new project for example, you can quickly make all of the folders and files you need to start.

After that, you can just open up your text editor and open your main folder.

Along with just navigating the filesystem, terminal can be used to utilize installed commands.

For example, when install Nodejs (a popular js framework), it automatically creates both the ```node``` and ```npm``` commands on your terminal.

So, you can run the command node on your terminal, for example, and it will give you a javascript console.

Another example is the npm command, which stands for *Node Package Manager*, and it allows you to install packages for node.

So, you can run ```npm install package-name```, and it will install the requested package for you.

Another example is ```npm start```, which automatically boots up the project whose folder you're currently in.

### Jeez, can I just learn a few commands already?

Well, first, I need to explain the difference in the Windows and Mac terminals.

Windows uses a terminal called command line, which is not what I'm going to teach you, because although the syntax is relatively similar to the one I'm going to teach you, you'll likely never have to use it.

Mac and Linux both come with a terminal called Git Bash, which is the one I'll be teaching you.

**No, I've not forgotten about all of you Windows users out there.**

For Windows, you can just download Git Bash from the Git Bash site.

I can't memorize the URL off the top of my head, so just search it online.

### Okay, let's start.

**Command 1: pwd**

```pwd``` is one of the main commands you'll be using.

When you type ```pwd```, the terminal will print out the current directory you are in.

For example, if you're in the desktop, it will say ```C://Users/Your Name/Desktop```.

The ```pwd``` command is useful when you don't know your current directory.

**Command 2: cd**

```cd``` is likely the most useful command that you'll use.

```cd``` is used to navigate directories.

In short, you type ```cd``` then the directory you'd like to navigate to, and it will navigate to that directory.

To go to the parent directory, just type ```cd``` then "..".

**Command 3: touch**

The ```touch``` command is used to create a file.

All you have to do is write ```touch``` then the name of the file, and it will create the file in the current directory.

Note that you have to include the file extension when using the ```touch``` command.

**Command 4: nano**

You probably won't be using nano too much, but it's useful to know.

Upon typing ```nano``` then a file name, the terminal will turn into a text editor, and you'll be able to edit the requested file.

If the requested file is not found, it will create the file.

```nano``` is useful when you want to quickly create and write to a file, as you don't have to use the ```touch``` command, or even open a text editor.

To exit the nano editor, just type FN+F3, and press enter.

Note that if you exit the terminal while you are on the nano editor, and you haven't saved the file, all your work will be lost.

