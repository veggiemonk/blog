+++
title = "Deep Dive: Chaos Engineering"
outputs = ["Reveal"]
date = "2018-12-13"
event_name = "KubeCon 18, Seattle"
event_url = "https://sched.co/Gren"
video_id = "ukc5mvZkxDI"
tags = [ "kubecon", "cloud", "kubernetes", "presentation", "chaos", "chaos engineering", "service mesh", "istio"]

[reveal_hugo]
theme = "moon"
transition = "slide"
highlight_theme = "zenburn"
+++

# Automating

# Chaos Engineering

# with a service mesh

---

## PLAN

- [  ] from code to service (mesh)
- [  ] chaos engineering
- [  ] automation with chaostoolkit

---

### Sylvain ( ChaosIQ )

<img height="500" src="/slides/images/chaostoolkit.png" style="border: none" alt="Chaos toolkit">

https://chaostoolkit.org/

---

### Julien ( 56k.cloud )

<img height="500" src="/slides/images/alps.jpg" alt="docker pull alps">

---

### How long

### from monolith to microservices ?

---
# TODO: FIX
### 8 fallacies of distributed computing

1. The network is reliable. <!-- .element: class="fragment grow highlight-blue" -->
1. Latency is zero.
1. Bandwidth is infinite.
1. The network is secure.
1. Topology doesn't change.
1. There is one administrator.
1. Transport cost is zero.
1. The network is homogeneous.

[source link](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)

[RFC 1925](https://tools.ietf.org/html/rfc1925) ( 12 Networking Truths )

---
# TODO: FIX
## containers concerns

- Scaling up and down
- Redundancy
- Scheduling
- Service Discovery


- Resiliency
- Rolling out and back
- Health checks
- Secret and config

<br>

<h3 class="fragment"> 👉  &nbsp;&nbsp; kubernetes <h4 class="fragment">but ... </h4></h3>

---
# TODO: FIX
## Kubernetes concerns

- Logging
- Tracing
- Metrics
- Canary release
- Service identity and Auth


- Circuit breaking
- Traffic flow and policies
- Failover
- Fault injection
- ...

<br>

### 👉 &nbsp;&nbsp; use code?    <!-- .element: class="fragment fade-up" -->

---

## Code drawbacks

- combination language>framework>version>feature
- maintain, patch, upgrade, migrate, retire
- language / framework / version lock-in
- code pollution and complexity (+ testing)
- deployment / rolling update
- debugging

---

## Extract code
# TODO: FIX
### remove concerns from the application

### 👉 &nbsp;&nbsp; move it the infra  <!-- .element: class="fragment fade-up" -->

---

## Sidecar proxy

<img style="filter: invert(.9) brightness(1.4);width:60vh;" alt="The overall architecture of an Istio-based application." src="/slides/images/side-car-proxy.png" title="Istio Architecture">

---

<img width="50%" src="/slides/images/envoyproxy.png" alt="envoy proxy">

> The network should be transparent to applications. <br>
>When network and application problems do occur, it should be easy to determine the source of the problem.

---

### How to manage a fleet of proxy

## 👉 service mesh <!-- .element: class="fragment fade-up" -->

---

### What is a service mesh

( What problems does it solve ) <!-- .element: class="fragment" -->

<br/>

### Communication between services <!-- .element: class="fragment" -->

<br/>

<h3 class="fragment" style="font-style: italic">A network for services, not bytes</h3>

---

# demo

---

<img src="/slides/images/qa.png" alt="use case" style="border: none">

---

<img src="/slides/images/Ytho.gif" alt="use case">

<!-- https://imgur.com/gallery/A1SeJ8d -->

---

<img height="300" src="/slides/images/define_sli_slo.jpg" alt="define SLI and SLO">

[source: new relic blog](https://blog.newrelic.com/engineering/best-practices-for-setting-slos-and-slis-for-modern-complex-systems/)

---

# Thank you