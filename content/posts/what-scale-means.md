+++
title = "What does scale mean to me"
date = 2020-06-21T00:03:28+02:00
author = "Julien Bisconti"
tags = [ "scale", "microservices", "data", "c10k", "rps"]
draft = false
+++

My personal definition of "at scale" means a service handles __more than 10,000 RPS__ (ten thousands requests per second).
The reason I came up with that number is when I learned that the [C10K problem](https://en.wikipedia.org/wiki/C10k_problem) is a solved problem and __hardware is not the bottleneck anymore.__
Meaning that a __single machine__ can handle 10,000 connections at the same time.

If a single machine can handle that much, why build a distributed system ?
Because the bottleneck now becomes the development teams which need to communicate and synchronize among themselves.
However, building a distributed system is completely different than building a centralized system; the same way building a car factory is completely different than building a car.

When I talk about scale, I talked about the scale of the product, not the amount of people building it.
There are value and tradeoffs in both.

## Distributed systems

Why build a distributed system if a single machine can handle that much ?
Because adding more people developing onto a centralized system can bring down speed of development to a crawl.

### Which one to choose

Do you like complexity? By all means, choose a distributed system.
Just remember that there are a lot more people capable of building a car than a car factory.

### Iterating towards a distributed system

Would you dare to enter a building and go the 15th floor if you knew that it is a bunch of houses on top of each other *glued together* over time ?
There is a picture that lots enthusiastic people talking about MVP (minimum viable product) like to share:
![Illustration of MVP product development by Henrik Kniberg](/images/mvp.jpg)
<p class="content-dates">
Illustration of MVP product development by Henrik Kniberg. Source: https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp
</p>

Note that all car manufacturers in history have started by making skateboards, then bikes to finally make cars.
I will try to keep the sarcasm to a minimum but no promises.
This mental model should work for the user interface that a company ships to their customers because a UI is viewed as a single system.
I don't think that mental model can be applied to a distributed system.
I don't think any car manufacturers started by making skateboards.
The reason is: "They were too busy building car factories".

### System of systems

A distributed system is different from a centralized system.
I know that it may seem confusing because both are called __system__ but I assure you, they are completely different things.
We can think of it this way: a distributed system is a system of systems, a centralized system is considered one system.
A car manufacturer usually does not make only one car, it makes a factory that makes cars.

### Scale

Since a distributed system is a system of systems, one subsystem can grow significantly more than another.
So the scaling limit of a distributed system is almost infinite.
This brings its own set of problems that a centralized system can easily cope with.
When distributed, the complexity lies into the dependencies between the systems which is extremely hard to codify and reason about for a human.
Whereas a centralized system could potentially hide away the complexity by providing a superior layer of abstraction.
The fact of the matter is this tradeoff is inevitable.

## Conclusion

A distributed system is a system of systems that is an order of magnitude more complex than a centralized one.
The tradeoff is the scaling capabilities versus the management of complexity.
Not every company needs a distributed system if it doesn't need to handle more than 10,000 RPS.
Let's be realistic about what we are trying to achieve.
The rest will flow from there.
