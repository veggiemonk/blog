---
title: "Google_cloud_training"
date: 2018-05-23T17:10:48+02:00
tags: ["google", "cloud", "kubernetes", "container", "automation"]
draft: true
---
# Google Cloud Onboarding Day

It's a one day event where anybody can attend for free in order to see what's available in the cloud build by Google.
Here is what the summary of that day.
At 8.00 sharp, the doors open to many people who were already waiting.
By waiting I mean playing with their phone, like I'm doing right now because I'm writing this blog post.
The presentation starts and it is a very well polished, very high level with technical anecdotes.
There is a webpage to ask questions and the slides were available before the presentation starts.
We received the link by email.
It is quite overwhelming the number of people that showed up.
I heard the number was >400 people but I have no means to verify that information.
Although as a guesstimate it is alright.

## Why attending

To see what was available because AWS is pretty much the default for every company I've worked for.
Google has a lot of highly qualified software engineers and invested many billions $ into its cloud.
Which makes it a really good candidate when choose a cloud provider.
Or maybe I was just curious.

## Content

The day was split like this:

1. Introducing Google Cloud Platform
1. Getting Started with Google Cloud Platform
1. Google Compute Engine and Networking
1. Google Kubernetes Engine
1. Serverless on Google Cloud
1. Google Cloud Platform Storage Options
1. Big Data and Machine Learning

I will only talk about the introduction and the getting started because that was the part that changed my views of Google as a company.

## Introducing Google as a company

In the presentation, we see the Google infrastructure which is something I didn't suspect to be that big.
People might guess it's big but they don't how big. In short, it's massive!
Google keeps its own offline backup of the internet. Usage of that backup hasn't been disclosed.
They couldn't find anything that could support their scale from the hardware to databases,
even the subsea cables are tailor-made by and for Google.
Google had to build everything from scratch because no company on earth could handle things at their scale.
That alone is an impressive fact.
The note that surprised me the most is that its cloud is 100% carbon neutral since 2007

The GCP (Google Cloud Platform) is actually flexible enough to let the user choose how much of the infrastructure they are comfortable managing.

Fun fact: everything is running inside a container, even virtual machines!

For pricing, the policy is in line the of a discount for sustained use.
It means that if a service is used for more than 15 days per months, there is a high chance that the service
will keep on running for the next month.
With that prediction, Google is able to give a discount because the service is used more.

About security. there is a "trust nothing" policy.
The analogy given is a castle that might be difficult to break into but once you are in, you can go wherever you please.
On the other hand, having guards on every door that check your credentials makes it very hard to travel inside the castle.
Every request is authenticate using Oauth2. There is also the option to bring your own encryption keys.

Because the security at Google is quite advanced, employees often discover security holes.
When such an event occurs, it is first patched internally then the information, with the patch, is sent to the vendor.
The vendor has now a time bomb of 6 month before the news is made public in which time, the breach has to be fixed by the vendor.

You can say whatever but the interface uses Material UI (insert link) and seems very clean and nice.

The overall feeling is that GCP seems really open to other cloud provider probably in order to attract more people.

## Getting Started

So the first thing we got started with is "projects".
A project is linked to a credit card and can contain roles (predefined or custom) with various credentials and rights on cloud resources.
This is for bureaucratic company that are crazy about stiff processes and waterfall model.
The project organization in GCP can also be really bureaucratic but extremely fine grained!
Fun fact: when the owner of a project is deleted (employees do quit or get fired sometimes), the project is deleted as well (but the bill is still there, no worry on that side).

When using other GCP product, we gain a lower latency because it's using Google own infrastructure. If we stay in the same VPC, the latency is quite small (around 88ms from London to New York).

Fun fact: in order to avoid creating one more variable while measuring network latency, the packets are actually throttled to provide a consistent latency. It's mainly to be able to narrow down where to find bottleneck in the communication of applications and not having people complain about the infrastructure that's not fast enough.

The way Google handles the network is the main difference with other cloud provider because they use their own infrastructure until the last moment, then the ISP of the customer takes over.

It can be quite time consuming to setup VMs and configure the disk and so forth, so we can use template to create those resources. It's called Google Cloud Launcher, it's predefined product setup. Once setup, it's up to the user to manage those instances.

---

Google has been doing orchestration for many years since the initial Borg paper. (insert link)


Nobody knows how AI is being used at google because everything is confidential

Can import VMware seamlessly nothing to configure

Transparent about the legacy hardware in data center

Everything runs in container even the vm

Super fine tune of resources example 5 cores or 11...

Recommend when over provision

Ubuntu works best.. extensive benchmarking improved perf

Sub licence for Windows

Use the UI to get the command line to execute

Disk size is correlated to bandwidth

Autoscaler based on your own metrics (# users in game on a vm)

Preemptive machine has to go back after 24h . To game the system just create 5 every 5 min.

On different vpc it goes in the internet

Peering DB

100% sla on cloud dns

Cloud harmony website for perf

New term ubernetes: kubernetes cluster around the world that choose the closest to user.

Monzo is a bank everything is cloud native

Compute density vs resiliency

Peter svensson leader of developer group

App engine supports AB&C testing and split traffic

Google cloud in china:
3 things required by gov:
* keys to building
* Company’s encryption keys
* Customers encryption keys

Read SRE book first 100 pages


Google cloud solutions
