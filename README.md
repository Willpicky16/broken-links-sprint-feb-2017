# wk10-broken-links

On this 2-day sprint you will learn some of the core Node.js modules. The sprint is also designed to make you work out a few things for yourselves - you'll need to be googling/stackoverflowing a lot.

## Problem

Whilst browsing the Chessbase shop over the weekend, geeky James came across a lot of broken links. He thought it'd be nice to put together a .txt file consisting of a list of pages that contain broken links, together with what the link(s) on that page is/are supposed to be linking to. He'll then send this to Chessbase, in the hope of getting some free chess swag for his good deed.

The api you need is https://broken-links-api.herokuapp.com/

## Goals

Create a web app where you can put a domain into an input field and, after a short period of time, are given a link to a .txt file containing all the required information. If the file has already been produced for that domain,
then it's corresponding link should be highlighted on the frontend end and no request need be made to the server.

## Constraints

1. Don't use any 3rd party modules - use the [Node API](https://nodejs.org/api/http.html)
2. Work in your project teams, work out what work needs to be done and how you will break it up.
3. If you need help from the team, please make sure you've got all of the web pages you've used to try and
 solve the problem open! This sprint is as much about helping you improve your problem solving process as anything else.
4. Practice on the domain that we have set up for you. There's a risk that some of your code might make thousands of requests
to the server over an extended period of time - if it's got a bug in it. This is effectively a [Dos Attack](https://en.wikipedia.org/wiki/Denial-of-service_attack)
which we'd quite like to avoid.
