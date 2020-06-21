+++
title = "What does scale mean to me"
date = 2020-06-21T00:03:28+02:00
author = "Julien Bisconti"
tags = [ "scale", "microservices", "data", "c10k", "rps"]
draft = false
+++

My personal definition of "at scale" means a service handles __more than 10,000 RPS__ (ten thousands requests per second).
The reason I came up with that number is when I leaned that the [C10K problem](https://en.wikipedia.org/wiki/C10k_problem) is a solved problem and __hardware is not the bottleneck anymore.__
Meaning that a __single machine__ can handle 10,000 connections at the same time.

If a single machine can handle that much, why build a distributed system ?
Because the bottleneck now becomes the developement teams which needs to communicate and synchronized among themselves.
However, building a distributed system is completely different than building a centralized system; the same way building a sky scraper is completely different than building a house.

When I talk about scale, I talked about the scale of the product, not the amount of people building it.
There are value and tradeoffs in both.

## Distributed systems

Why build a distributed system if a single machine can handle that much ?
Because adding more people developing onto a centralized system can bring down speed of development to a crawl.

### Which one to choose

Do you like complexity? By all means, choose a distributed system.
Just remember that there are a lot more people capable of building a house than a sky scaper.

### Iterating towards a distributed system

Would you dare to enter a building and go the 15th floor if you knew that it is a bunch of houses on top of each other *glued together* over time ?
There is a picture that lots enthousiastic people talking about MVP (minimum viable product) like to share:
![Illustration of MVP product development by Henrik Kniberg](/images/mvp.jpg)
<p class="content-dates">
Illustration of MVP product development by Henrik Kniberg. Source: https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp
</p>

Note that all car manufacturer in history have started by making skateboards, then bikes to finally make cars.
I will try to keep the sarcasm to a minimum but no promises.
This mental model should work for the user interface that a company ships to their users.
I don't think it works for software.
I don't think any car manufacturers started by making skateboards.
The reason is: "They were too busy building a car factory".

### System of systems

A distributed system is different from centralized system.
I know that it may seem confusing because both are called __system__ but I assure you, they are completely different thing.
We can think of it this way: a distributed system is a system of systems, a centralized system is considered one system.
A car manufacturer does not make only one car, it makes a factory that makes cars.

### Scale

Since a distributed is a system of systems, one system can grow significantly more than an another.
So the scaling limit a distributed system is almost infinite.
This brings its own set of problem that a centralized system can easily cope with.
When distributed, the complexity lies into the dependencies between the systems which is extremely hard to codify and reason about for a human.
Whereas a centralized system could potentially hide away the complexity by providing a superior layer of abstraction.
The fact of the matter is this tradeoff is inevitable.

## Conclusion

A distributed system is a system of systems that is an order of magniture more complex than a centralized one.
The tradeoff is the scaling capabilities versus the management of complexity.
Not every company needs a distributed system. Not every company needs a sky scaper.
Let's be realistic about what we are trying to achieve.
The rest will flow from there.
