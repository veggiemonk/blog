---
title: "☁️ Google Cloud Training Day"
date: 2018-05-23T17:10:48+02:00
tags: ["google", "cloud", "kubernetes", "container", "automation"]
draft: false
---
# 1 day free event workshop in Stockholm

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

## Why attend

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

I will only write about the fun facts and little less known facts because they changed my views of Google as a company.

## Introducing Google as a company

In the presentation, we see the Google infrastructure which is something I didn't suspect to be that big.
People might guess it's big but they don't how big. In short, it's massive!
Google had to build everything from scratch because no company on earth could handle things at their scale.
From the hardware to databases, even the subsea cables are tailor-made by and for Google.
That alone is an impressive fact.
But in case you wonder the magnitude of data Google can handle, it keeps its own offline backup of the internet (usage of that backup hasn't been disclosed).
It also has a 100% SLA on its cloud DNS, the famous 8.8.8.8
It's true that when some check the internet connectivity, the first thing they do is to `ping www.google.com`.
Hence, the service must be running all the time.

The note that surprised me the most is that Google Cloud is 100% carbon neutral since 2007

### Google and Artificial Intelligence

One question that was raised during the workshop was "how is AI used at Google and for what?".
Truth is nobody knows how AI is being used at google because everything is confidential.

### GCP (Google Cloud Platform)

The GCP is actually flexible enough to let the user choose how much of the infrastructure they are comfortable managing.
Regarding pricing, the policy is in line the of a discount for sustained use.
It means that if a service is used for more than 15 days per months, there is a high chance that the service will keep on running for the next month.
With that prediction, Google is able to give a discount because the service is used more.
You can say whatever but the interface uses Material UI and seems very clean and nice.

Fun fact: everything is running inside a container, even virtual machines!

### Security

About security. there is a "trust nothing" policy.
The analogy given is a castle that might be difficult to break into but once you are in, you can go wherever you please.
On the other hand, having guards on every door that check your credentials makes it very hard to travel inside the castle.
Every request is authenticate using Oauth2. There is also the option to bring your own encryption keys.

Because the security at Google is quite advanced, employees often discover security holes.
When such an event occurs, it is first patched internally then the information, with the patch, is sent to the vendor.
The vendor has now a time bomb of 6 month before the news is made public in which time, the breach has to be fixed by the vendor.

The overall feeling is that GCP seems really open to other cloud provider probably in order to attract more people.

### Google in China

One question that was raised during the workshop is "When is Google Cloud opening up in China?"
The answer was very straight.

You need to give 3 things to the Chinese Government to get a license in China:

* the keys to the building
* the encryption keys of the servers
* the encryption keys of the customers' data.

The Google representative there didn't forget to mention that "If you wonder what is Amazon and Microsoft doing in China, just ask them!".

Enough said...

## Getting Started

So the first thing we got started with are the "projects".
In GCP, a project is linked to a credit card and can contain roles (predefined or custom) with various access rights on cloud resources.
This is for bureaucratic company that are crazy about stiff processes and waterfall model as well as budgeting everything.
The project organization in GCP can also be really bureaucratic but extremely fine grained!

Fun fact: when the owner of a project is deleted (employees do quit or get fired sometimes), the project is deleted as well (but the bill is still there, no worry on that side).

### Network Infrastructure

When using other GCP product, we gain a lower latency because it's using Google own infrastructure. If we stay in the same VPC, the latency is quite small (around 88ms from London to New York).

Fun fact: in order to avoid creating one more variable while measuring network latency, the packets are actually throttled to provide a consistent latency. It's mainly to be able to narrow down where to find bottleneck in the communication of applications and not having people complain about the infrastructure that's not fast enough.

The way Google handles the network is the main difference with other cloud providers because they use their own infrastructure until the last moment, then the ISP of the customer takes over.

### Cloud resource templates

It can be quite time consuming to setup VMs and configure the disk and so forth, so we can use template to create those resources. It's called Google Cloud Launcher, it's predefined product setup. Once setup, it's up to the user to manage those instances.

### Cloud Tuning

As said previously, there is the policy of discounted sustained usage.
That allows for a lot of optimization and the UI makes recommendation
when a machine is under utilized  (over provisioned) based on your usage to save the user money.
The second useful feature is the fine grained selection of resources.
For example, the number of CPU cores can be any number from 1 to 64 as well as the RAM can be fine tuned to the user's will.
There is also an effort put on the transparency about the legacy hardware in the data center.
Not all data center use the latest CPU.

In order to save money, the preemptive machine can be selected.
The machine has to released after 24h but in order to game the system, someone could just create a box every 5 min so that the fleet doesn't vanish all at once. Note that when signaled, the application has 30 seconds to terminate its work before being killed.

### Scaling

Google has been doing container orchestration for many years since the initial [Borg paper](https://ai.google/research/pubs/pub43438).
So it offers a kubernetes cluster with more features than the open source version of it.
There is also the autoscaler that can be based on the user specific metrics such as the number of player in a game hosted on GCP.
Not to mention the number of companies, such as SnapChat, that used GCP and didn't even to change anything in their code when they hit the tipping point of users.

### Linux or Windows

Ubuntu has been extensively tested and benchmarked to work best with GCP.
Alternatively, you can buy licenses for Windows directly from the interface and it's pay-for-what-you-use type of service.

### Compute density

When renting a machine, the disk size is correlated to bandwidth allowed.
It makes sense that if the disk space is only 10GB, having a 1GB bandwidth is a bit of an overkill.
The question asked by the presenter is: "if you have 10 machines of 2 GB or 2 machines of 5 GB, which one will you choose?"
In order to have a machine the OS has to be installed on it. Let's say that the OS take up to 500 MB.
Having 10 machines means having 10 x 500 MB = 5 GB not usable space.
Having 2 machines means having 2 x 500 MB = 1 GB not usable space.
The compute density of 2 big machines is higher than 10 small machines.
This concept is useful in capacity planning, sometimes scaling vertically (bigger machines) is more cost efficient than scaling horizontally (more machines)

The tradeoff is the resiliency.
There is 2 machines that runs a service and they share the load evenly, if one of them goes down, that 50% of the traffic that get lost.
If there is 10 machines and only one goes down, it's only 10% of the traffic that get lost.

Therefore it's always a tradeoff between compute density and resiliency.

## The future of GCP

The one hit that I got out of this is a new term called `ubernetes`.
It's a federated kubernetes cluster spread around the world in various data center and every request reach the closest cluster to user.
Which is quite an engineering achievement.

## Conclusion

I was impress by the polished interfaces and all the features that this cloud provider offers.
I would love to have a similar on boarding with Azure so that these 2 can be compared.
I think AWS is becoming less the default choice and I would love to see more cloud vendor neutral and standardization around the API used.
More openness is better for the end user and would prevent any cloud provider to become the overlord and gatekeeper that everyone must use or roll their own infrastructure.
