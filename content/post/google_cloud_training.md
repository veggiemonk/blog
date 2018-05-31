---
title: "Google_cloud_training"
date: 2018-05-23T17:10:47+02:00
tags: ["google", "cloud", "kubernetes", "container", "automation"]
draft: true
---
# Google Cloud Onboarding Day

It's a one day even where anybody can attend for free in order to see what's available in cloud build by Google.


---

My notes

Google cloud day

Opening at 8.00 sharp many people are already waiting. By waiting I mean playing with their phone like me while writing this blog post.

Google has been doing orchestration for many years since the initial Borg paper. (insert link)

It keeps its own offline internet

Big on renewable energy

Discount for sustained use

Trust nothing is the security policy

Patch google first then 6 months time bomb


The project organization in gcp can be really bureaucratic... but extremely fine grained!!!

Gcp seems really open to other cloud provider probably in order to attract more people

Using Oauth2 to authenticate every request

Lower latency using other gcp product

Start with google cloud launcher - predefined product setup but not managed

The way it handle network is the main difference because they use their own until the last moment (customer isp)

Bring your own encryption keys

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
