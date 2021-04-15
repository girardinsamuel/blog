---
title: Getting started
description: "Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS."
tags: masonite
---

## Introduction

I got the awesome opportunity to talk to Taylor Otwell, the creator of Laravel, for a few minutes at Laracon 2019. I knew I only wanted to take a few minutes of his time so I had to think of 1 solid question to ask him.

So here's the question I asked him:

Masonite is currently at over 1000 stars. When Laravel was at 1000 stars, what's something you did to really get it to the next level?

## Taylor's Response

What Taylor said was pretty straight forward and made a lot of sense:

He said:
Video tutorials, documentation and blog posts. The easier it is to learn, the more people will use it.

## Reflection

Now, this might be obvious to you but this was sort of profound to me. I feel like its something I always sort of knew but it was one of those things where simply hearing it out loud makes it make more sense than saying it to yourself.

The interesting part there is:

The easier it is to learn, the more people will use it

There is something implicit in that sentence right there. The goals I have been developing towards have been creating a better framework than all of its competitors.

But I think the real goal here is just as Taylor said, "The easier it is to learn, the more people will use it."

See, things don't have to be better for people to necessarily use it. It needs to be easy to learn. You need to be able to start development and stay started.

Think of the best package having no documentation at all vs a less good package with amazing documentation. Which one do you think more people will use?

## code block

```js{1,3-5}[server.js]
const http = require("http");
const bodyParser = require("body-parser");

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```
