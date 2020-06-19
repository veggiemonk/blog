+++
title = "Résumé"
layout = "resume"
description = "Julien Bisconti, Freelance Software Engineer Specialized in Google Cloud, slides presentations and conference talks about kubernetes, serverless, data engineering, logging, monitoring, software architecture"
+++
<!-- markdownlint-disable -->

## Summary

Google developer expert (GDE) for GCP, conference speaker, certified Kubernetes CKA/CKAD, university guest lecturer.
Master in Computer Science (graduated 2007).
Serverless first mindset, data operation and data engineering.
Used many programming languages: JavaScript (Node.js + browser), Go, Java, Python, Bash, Clojure, ClojureScript, OCaml, Rust and Haskell. Fast learner.
Like building scalable distributed systems.
Design, architect, develop, deploy, operate and maintain software.
Achievements: KubeCon 18' Seattle speaker, University guest lecturer, open source contributor.
Work remotely (good writing communication skill).

## Work

### KTH Royal Institute of Technology | Guest lecturer

__Apr 2019 – Present (1 yr 3 months) | Stockholm, Sweden__

Topics:

- containers (Docker, CRI)
- orchestration (Kubernetes, swarm)
- serverless & FaaS

### NetEnt | Site Reliability Engineer

__Apr 2019 – May 2020 (1 yr 2 months) | Stockholm, Sweden__

Cloud migration from OpenShift to Kubernetes on Google Cloud Platform (GCP). <br/>
Complete CI/CD pipeline migration from Bitbucket/Jenkins to GitHub/CloudBuild and 
deployment to Kubernetes for Java (Maven), JavaScript (npm), Python (pip) and Go.<br/>
Infrastructure visibility and security with Forseti and Cloud Functions (JavaScript).<br/>
Infrastructure as code management with Terraform, Terragrunt and Atlantis.<br/>
Containerization of legacy python applications.<br/>
Automation of dependency upgrades with GitHub Actions.<br/>
Securely rotating secrets and credentials used in application code with KMS and Berglas.<br/>
Using binary authorisation in Kubernetes to certify deployment in highly regulated environment.<br/>
Security and regulation: complete traceability with audit logs 
from code (GitHub) to production (GKE) using serverless architecture.<br/>
Using Cloud Functions to query GitHub using GraphQL API, 
storing the data in BigQuery and displaying the results in Data Studio.<br/>
Data cleaning and data lifecycle using Cloud Functions, 
PubSub and BigQuery scheduled query for costs management and monitoring data.<br/>
Data mining GitHub organisation to provide relevant KPI in order to make data driven decisions.<br/>
Frontend development for backoffice API in Typescript/Angular9<br/>
Presentations and workshop dedicated to Terraform, 
Kubernetes, Go, serverless, service mesh and site reliability engineering.

### 56K.Cloud | Site Reliability Engineer

__Nov 2018 – Mar 2019 (5 months) | Zurich, Switzerland__ (Remote)

Building infrastructure in the cloud and on premise with Terraform, Terragrunt, Bash, Go and Python<br/>
Main cloud providers: AWS, GCP, Azure.<br/>
Architecting cloud migration from on premises to cloud providers.<br/>
Containerizing application<br/>
Setting up kubernetes clusters<br/>
Giving workshops<br/>
Presenting and teaching DevOps and Chaos Engineering.

### Discovery Inc | Software Engineer

__Mar 2018 – Nov 2018 (9 mos) | Stockholm, Sweden__

cloud native, containerized environment.

Dev Tools: Bash scripting, containerization w/ Docker(-compose). Setting npm cache for build pipeline on Jenkins.

CMS-UI:
Single Page App for editors to manage content for the website of https://www.dplay.se/
Built with React + Redux, react-router v4, lodash, Immutable.js, SaSS, testing with Jest, enzyme, mocha, chai, sinon.

CMS: 
Implementing new features on performance critical microservice written in Java 8 using Redis cluster with Sentinel which was migrated to PostgreSQL. ElasticSearch for indexing and full text search, using VertX for service to service communication, migrating to gRPC.
Testing with Rest-assured and JUnit.
Using Agile and TDD with code review via pull request on Github.
Using containers, testing & deploying with Jenkins to Kubernetes cluster running on AWS
Logs gather with ELK stack. Metrics with Prometheus.

### Unity Technologies Finland | Software Engineer

__2017 – Mar 2018 (1 yr 3 months) | Helsinki Area, Finland__

cloud native, containerized environment

Developer Environment compose:
DevOps tool used by developers to reproduce production environment locally. Generate dynamically services configuration file. Based on docker and docker-compose, written in Python 3 and rewritten in Javascript (Node.js).

CI pipeline with Gitlab for Go project:
Build & test Go projects in container. Provide template for other projects.

Ads delivery cross promotion:
Performance critical scalable microservices in Go. Using Redis as a cache. Using Nats to receive data from other microservices, Kafka to store all events related to the ads to a data pipeline and gRPC for request-reply to other services. These events are processed from Kafka and then stored on S3 for analytics and data mining. Service is used to select the best potential advertisement campaign for every ad request. Handling tens of thousands of events per seconds. Deployed in Docker container with HELM on a kubernetes cluster running on AWS. Highly tested microservices with code coverage > 90% and code review on everything.

Coordinator:
Library written in Go implementing the Bully algorithm to elect leader among instances over Nats.

Advertiser campaigns:
Microservices written in Node.js. Using event driven architecture with Nats as message broker for distributed system. Uploading video / pictures to S3. Using MongoDB (NoSQL) and express. ES6+ with > 90% test coverage with Mocha, Chai, Sinon. Continuous delivery (github + jenkins CI). Deployed in Docker container with HELM on a kubernetes cluster running on AWS.

Advertiser self-serve
Single Page Application using React.js + Redux, React router, ES6+, Sass with BAM, Material UI, webpack. Component based architecture. Server side rendered. With > 90% test coverage with Mocha, Chai, Sinon. Continuous delivery (github + jenkins CI).

Technical recruiter: Part of the recruitment process, review technical tests, conduct interview.

Give presentations to teams

### Freelance | Software Engineer

__2016 – Dec 2016 (5 mos) | Chiand Mai, Thailand__ (Remote)

Full stack web development in Clojure and ClojureScript using PostgreSQL as database. Part of the project can be found on my github account https://github.com/veggiemonk/guestbook.

### Group S | Software Engineer

__May 2014 – Aug 2016 (2 yrs 4 months) | Brussels Area, Belgium__

Transfer:
Analysis, development, maintenance, support of Single Page Application (Redux + React, ES6+, JSX, SaSS, Mocha, Chai, Sinon, Localization: EN, FR, NL) and backend (Java 8, Tomcat 8, JAX-RS, Hibernate, JUNIT) connecting to Oracle 11g, MySQL, cache (Redis) and a secure FTP server (proprietary) containing sensitive documents (accounting, payroll, salary, ...). In front of load balancing running on RHEL 7. +1000 downloads/day for 3000 customers in Belgium and France.

Portal:
Analysis, development, maintenance, support of Single Page Application (vanilla JS, CSS, Sass, HTML, Mobile website, Localization: EN, FR, NL) acting as Single Sign On web app for 20+ web apps with users in 8 different Oracle, Active Directory, MySQL and a FTP server (see: Transfer) in Belgium and in France. Backend written with Java 8, Tomcat 8, JAX-RS, Hibernate, JUNIT. In front of load balancing running on RHEL 7. https://online.groups.be/

2FA:
Single Page App (JavaScript (jQuery), CSS, HTML, Mobile) and a backend (Java 8, JAX-RS, Hibernate, Swagger, Apache, RHEL).
Implemented 2 factor Authentication to secure user accounts by adding extra security measure to customers with higher access credentials (sensitive data, salary, accounting, ...). Users must provide a login/password + 6 digits code (changing every 30 seconds) to connect to Portal (see project Portal above). The code is generated on their smartphones (iOS, Android, Microsoft) by a mobile application.

Translation:
Analysis, development, maintenance, support of Single Page Application (Redux + React, ES6+, JSX, SaSS, Mocha, Chai, Sinon, Localization: EN, FR, NL) and backend (Java 8, Tomcat 8, JAX-RS, Hibernate, JUNIT).
Internal project meant to be the intersection application between documentation and the internationalization (i18n) of all customer facing application.

CI/CD pipeline:
Migration from gitosis to gitolite to GitLab in 2 years time with 100+ repository. Running Gitlab and Gitlab CI inside Docker containers (multi servers). Configuring Jenkins (for Java) and Gitlab CI (for Node.js, JavaScript). Preaching the benefits of writing tests made this possible.

Buildman:
Node.js server allowing every team members (technical or not) to build and deploy any applications (web app or java server, version or branch) in one click. This tool also has self­-update and can update other internal tools. The challenge was to configure user access on RedHat Linux with SELinux. Technology Stack: Node.js, Express, git, grunt, terminal.js, SonarQube, RedHat Linux, SSH, BASH.

Analytics:
Setup monitoring/alerting ELK. ElasticSearch (search), Logstash (gather logs), Kibana (visualization), Golang (mail client). Gather logs and statistics from web applications and servers + alerting developers (email only) when a customer has an error.

Presentation:
Teaching web technologies, agile methodology, unit testing, integration tests and e2e tests to others developers.
Presentation to team leaders of git based workflow, merge requests (GitLab), dependency management (Nexus), continuous integration (Jenkins, GitLab CI + Docker), issue tracker (Redmine, GitLab), wiki (MediaWiki, GitLab).

Code quality check:
Install and configure SonarQube (running inside Docker containers) for code quality and technical debt tracking.

Writing reports:
Conferences, meetings, projects requirements analysis. Example of conference report: https://docs.google.com/document/d/1ahblUs2BaIyEdtQamSX7O9XwRi1GiOZQ4W-G48CooIo/edit?usp=sharing

### Share2Grow | Partner | Software Engineer

__Feb 2014 – Jul 2016 (2 yrs 6 months) | Brussels, Belgium__

Remote work with developers.
Developing web and mobile solutions cross platform with phonegap and GWT.

Server operations and maintenance Windows & Ubuntu. Setup Git server management
Full stack developer Java/JavaScript.

Web Development, Technology Assessment, Technical Business Analysis, SEO, Python programming, mobile application development, GoogleWebToolkit GWT, Node.js/Express, GIT server on Windows.

### Freelance | Software Engineer

__2010 – May 2014 (4 yrs) | World__ (Remote)

Web Development, Technology Assessment, Technical Business Analysis, SEO, Python programming, mobile application development, GoogleWebToolkit GWT, Node.js/Express, MongoDB, Django, Plone, ...

### Piton Lux S.A. | Software Engineer

__Apr 2008 – Oct 2009 (1 yr 7 months) | Luxembourg__

Development of custom/tailor-made solutions with CRM Software “eLink” at University of Luxembourg.

- Javascript: jquery, mootools
- HTML and CSS
- SQL (Oracle with PL/SQL, Microsoft SQL Server)
- Virtualization: VirtualBox
- Software Versioning: Subversion (svn)
- IIS, COM+

### Callataÿ & Wouters | Release Engineer

__Oct 2007 – Mar 2008 (6 months) | Brussels, Belgium__

Worked in team for the release of Banking Software “Thales”. Now called “Sopra Banking Software”.

### Universitat Politècnica de Catalunya | Researcher

__Sep 2006 – Feb 2007 (6 months) | Barcelona Area, Spain__

Research over the MPLS protocol:
Multiprotocol Label Switching (MPLS) is a type of data-carrying technique for high-performance telecommunications networks. MPLS is a scalable, protocol-independent transport. In an MPLS network, data packets are assigned labels. Packet-forwarding decisions are made solely on the contents of this label, without the need to examine the packet itself. This allows one to create end-to-end circuits across any type of transport medium, using any protocol. The primary benefit is to eliminate dependence on a particular OSI model data link layer (layer 2) technology,

Thesis "Dynamic Configuration of Label Switched Path" under the supervision of M. F. Casadevall.

- Linux Kernel Module development in C with mpls-linux (https://sourceforge.net/projects/mpls-linux/‎)
- Advanced Bash scripting
- Advanced Networking in Linux Kernel with QoS and various queue model (such as Weighted Fair Queuing)
- Network load testing with tc (traffic control command), iptables, quagga, tcpdump.
- Virtualization of Network with Linux Containers (Netkit http://wiki.netkit.org)


## Education

### Master in Computer Science - 2004-07

University of Namur, Belgium - https://www.unamur.be/

### Bachelor in Cmoputer Science - 2002-05

University of Namur, Belgium - https://www.unamur.be/

## Certifications

### Google Developer Expert

For Google Cloud Platform - [Credentials](https://developers.google.com/community/experts/directory/profile/profile-julien_bisconti)

### Certified Kubernetes Administrator (CKA)

Issued by the Linux Foundation - [Credentials](https://www.youracclaim.com/badges/af8fcf6a-444d-458d-9cab-618c92e4a813)

### Certified Kubernetes Application Developer (CKAD)

Issued by the Linux Foundation - [Credentials](https://www.youracclaim.com/badges/025df104-a24d-4462-8bbf-150e533d2a54)





