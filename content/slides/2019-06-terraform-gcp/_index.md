+++
title = "Infrastructure as Code - Terraform on GCP (Stockholm Meetup)"
outputs = ["Reveal"]
date = "18 May 2019"

[reveal_hugo]
#theme = "simple"
highlight_theme = "zenburn"
+++

<section>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 60.15" class="logo" height="120">
		<path class="text" fill="#fff"
			d="M77.35 7.86V4.63h-3v3.23h-1.46V.11h1.51v3.25h3V.11h1.51v7.75zm7 0h-1.2l-.11-.38a3.28 3.28 0 0 1-1.7.52c-1.06 0-1.52-.7-1.52-1.66 0-1.14.51-1.57 1.7-1.57h1.4v-.62c0-.62-.18-.84-1.11-.84a8.46 8.46 0 0 0-1.61.17L80 2.42a7.89 7.89 0 0 1 2-.26c1.83 0 2.37.62 2.37 2zm-1.43-2.11h-1.08c-.48 0-.61.13-.61.55s.13.56.59.56a2.37 2.37 0 0 0 1.1-.29zM87.43 8a7.12 7.12 0 0 1-2-.32l.2-1.07a6.77 6.77 0 0 0 1.73.24c.65 0 .74-.14.74-.56s-.07-.52-1-.73c-1.42-.33-1.59-.68-1.59-1.76s.49-1.65 2.16-1.65a8 8 0 0 1 1.75.2l-.14 1.11a10.66 10.66 0 0 0-1.6-.16c-.63 0-.74.14-.74.48s0 .48.82.68c1.63.41 1.78.62 1.78 1.77S89.19 8 87.43 8zm6.68-.11V4c0-.3-.13-.45-.47-.45a4.14 4.14 0 0 0-1.52.45v3.86h-1.46V0l1.46.22v2.47a5.31 5.31 0 0 1 2.13-.54c1 0 1.32.65 1.32 1.65v4.06zm2.68-6.38V.11h1.46v1.37zm0 6.38V2.27h1.46v5.59zm2.62-5.54c0-1.4.85-2.22 2.83-2.22a9.37 9.37 0 0 1 2.16.25l-.17 1.25a12.21 12.21 0 0 0-1.95-.2c-1 0-1.37.34-1.37 1.16V5.5c0 .81.33 1.16 1.37 1.16a12.21 12.21 0 0 0 1.95-.2l.17 1.25a9.37 9.37 0 0 1-2.16.25c-2 0-2.83-.81-2.83-2.22zM107.63 8c-2 0-2.53-1.06-2.53-2.2V4.36c0-1.15.54-2.2 2.53-2.2s2.53 1.06 2.53 2.2v1.41c.01 1.15-.53 2.23-2.53 2.23zm0-4.63c-.78 0-1.08.33-1.08 1v1.5c0 .63.3 1 1.08 1s1.08-.33 1.08-1V4.31c0-.63-.3-.96-1.08-.96zm6.64.09a11.57 11.57 0 0 0-1.54.81v3.6h-1.46v-5.6h1.23l.1.62a6.63 6.63 0 0 1 1.53-.73zM120.1 6a1.73 1.73 0 0 1-1.92 2 8.36 8.36 0 0 1-1.55-.16v2.26l-1.46.22v-8h1.16l.14.47a3.15 3.15 0 0 1 1.84-.59c1.17 0 1.79.67 1.79 1.94zm-3.48.63a6.72 6.72 0 0 0 1.29.15c.53 0 .73-.24.73-.75v-2c0-.46-.18-.71-.72-.71a2.11 2.11 0 0 0-1.3.51zM81.78 19.54h-8.89v-5.31H96.7v5.31h-8.9v26.53h-6z">
		</path>
		<path class="text" fill="#fff"
			d="M102.19 41.77a24.39 24.39 0 0 0 7.12-1.1l.91 4.4a25 25 0 0 1-8.56 1.48c-7.31 0-9.85-3.39-9.85-9V31.4c0-4.92 2.2-9.08 9.66-9.08s9.13 4.35 9.13 9.37v5h-13v1.2c.05 2.78 1.05 3.88 4.59 3.88zM97.65 32h7.41v-1.18c0-2.2-.67-3.73-3.54-3.73s-3.87 1.53-3.87 3.73zm28.54-4.33a45.65 45.65 0 0 0-6.19 3.39v15h-5.83V22.79h4.92l.38 2.58a26.09 26.09 0 0 1 6.12-3.06zm14.24 0a45.65 45.65 0 0 0-6.17 3.39v15h-5.83V22.79h4.92l.38 2.58a26.09 26.09 0 0 1 6.12-3.06zm19.51 18.4h-4.78l-.43-1.58a12.73 12.73 0 0 1-6.93 2.06c-4.25 0-6.07-2.92-6.07-6.93 0-4.73 2.06-6.55 6.79-6.55h5.59v-2.44c0-2.58-.72-3.49-4.45-3.49a32.53 32.53 0 0 0-6.45.72l-.72-4.45a30.38 30.38 0 0 1 8-1.1c7.31 0 9.47 2.58 9.47 8.41zm-5.83-8.8h-4.3c-1.91 0-2.44.53-2.44 2.29s.53 2.34 2.34 2.34a9.18 9.18 0 0 0 4.4-1.2zm23.75-19.79a17.11 17.11 0 0 0-3.35-.38c-2.29 0-2.63 1-2.63 2.77v2.92h5.93l-.33 4.64h-5.59v18.64h-5.83V27.43h-3.73v-4.64h3.73v-3.25c0-4.83 2.25-7.22 7.41-7.22a18.47 18.47 0 0 1 5 .67zm11.38 29.07c-8 0-10.13-4.4-10.13-9.18v-5.88c0-4.78 2.15-9.18 10.13-9.18s10.13 4.4 10.13 9.18v5.88c.01 4.78-2.15 9.18-10.13 9.18zm0-19.27c-3.11 0-4.3 1.39-4.3 4v6.26c0 2.63 1.2 4 4.3 4s4.3-1.39 4.3-4V31.3c0-2.63-1.19-4.02-4.3-4.02zm25.14.39a45.65 45.65 0 0 0-6.17 3.39v15h-5.83V22.79h4.92l.38 2.58a26.08 26.08 0 0 1 6.12-3.06zm16.02 18.4V29.82c0-1.24-.53-1.86-1.86-1.86a16.08 16.08 0 0 0-6.07 2v16.11h-5.83V22.79h4.45l.57 2a23.32 23.32 0 0 1 9.34-2.48 4.42 4.42 0 0 1 4.4 2.49 22.83 22.83 0 0 1 9.37-2.49c3.87 0 5.26 2.72 5.26 6.88v16.88h-5.83V29.82c0-1.24-.53-1.86-1.86-1.86a15.43 15.43 0 0 0-6.07 2v16.11z">
		</path>
		<path class="rect-dark" fill="#4040B2" d="M36.4 20.2v18.93l16.4-9.46V10.72L36.4 20.2z"></path>
		<path class="rect-light" fill="#5C4EE5" d="M18.2 10.72l16.4 9.48v18.93l-16.4-9.47V10.72z"></path>
		<path class="rect-light" fill="#5C4EE5"
			d="M0 .15v18.94l16.4 9.47V9.62L0 .15zm18.2 50.53l16.4 9.47V41.21l-16.4-9.47v18.94z"></path>
	</svg>
	<br>
	<h2>+</h2>
	<img style="border: 0; background: none;"
		src="https://cloud.google.com/_static/e4e95039f4/images/cloud/cloud-logo.svg"
		class="devsite-site-logo" alt="Google Cloud">
</section>

---

<section>
	<h3>Collaborate &amp; share</h3>
	<p>version control, shared, and collaborated on</p>
	<h3>Evolve infrastructure</h3>
	<p>history of infrastructure changes</p>
	<h3>Automation friendly</h3>
	<p>CODE = AUTOMATION</p>
</section>

---

<section data-transition="fade">
	<h2>Example</h2>
	<pre><code class="hljs" data-trim data-line-numbers="1-3">
provider "google" {
	region =  "europe-west1"
	credentials = "${file("~/path/to/creds.json")}"
}
		</code></pre>
	<a href="https://www.terraform.io/docs/providers/index.html">List of Terraform providers</a>
</section>

---

<section data-transition="fade">
	<pre><code class="hljs" data-trim data-line-numbers="5-10">
provider "google" {
	region      = "europe-west1"
	credentials = "${file("~/path/to/creds.json")}"
}
resource "google_project" "demo" {
	project_id      = "terraform-${var.user}"
	name            = "Terraform workshop"
	org_id          = "${var.organization_id}"
	billing_account = "${var.billing_account}"
}
</code></pre>
	<a href="https://www.terraform.io/docs/providers/google/index.html">Resources for Google provider</a>
</section>

---

<section data-transition="fade">
	<pre><code class="hljs" data-trim data-line-numbers="11-15">
provider "google" {
	region      = "europe-west1"
	credentials = "${file("~/path/to/creds.json")}"
}
resource "google_project" "demo" {
	project_id      = "terraform-${var.user}"
	name            = "Terraform workshop"
	org_id          = "${var.organization_id}"
	billing_account = "${var.billing_account}"
}
resource "google_project_services" "apis" {
	project  = "${google_project.demo.project_id}"
	services = ["compute-component.googleapis.com"]
}
</code></pre>
</section>

---

<section data-transition="slide">
	<pre><code class="hljs" style="word-wrap: break-word; max-height: 70vh;" data-trim data-line-numbers>
resource "google_compute_instance" "vm" {
	project      = "${google_project.demo.project_id}"
	name         = "user-${var.user}-first-vm"
	machine-type = "f1-micro"
	zone         = "europe-west1-b"
  
	boot_disk {
	  initialize_params {
		image = "debian-cloud/debian-9"
	  }
	}
  
	network_interface {
	  network = "default"
  
	  access_config {} # Ephemeral IP
	}
  
	metadata_startup_script = "echo hi > /terraform_workshop.txt"
  
	service_account {
	  scopes = ["https://www.googleapis.com/auth/cloud-platform"]
	}

	depends_on = ["google_project_services.apis"]
}

</code></pre>

<a href="https://www.terraform.io/docs/providers/google/r/compute_instance.html">compute instance reference	</a>
</section>

---

<section>
	<!-- # Install graphviz: 
	# brew install graphviz # OSX
	# sudo apt install graphviz # Ubuntu -->
	<h2>graph dependency</h2>
	<pre><code data-trim>terraform graph | dot -Tpng > tf_dep_graph.png</code></pre>

</section>

---

<!-- <section>
	#Set variables in *.tfvars 
	#or use the CLI with  -var="myvar=xxx" 
</section>

---
 -->
<!-- <section>
	resource creation might fail.

	TF might not have registered the half created resources in the state.
	We will try to recreate them on the next "apply"
	We get an error saying that the resources already exist. 
	We might have to delete something manually from the console or import it if possible.
</section>

---
 -->
<section>
	<h2>Resources</h2>
	<ul>
		<li><a href="https://gist.github.com/veggiemonk/097890ff101a995f3c31f4d25b69665e">gists</a></li>
		<li><a href="https://github.com/terraform-google-modules?type=source">github: terraform-google-modules</a></li>
		<li><a href="https://www.oreilly.com/library/view/terraform-up-and/9781491977071/ch04.html">Chapter: Terraform modules</a></li>
		<li><a href="https://github.com/shuaibiyy/awesome-terraform">Awesome Terraform</a></li>
		<li><a href="https://blog.gruntwork.io/why-we-use-terraform-and-not-chef-puppet-ansible-saltstack-or-cloudformation-7989dad2865c">Terraform vs config mgmt</a></li>
	</ul>
</section>

---

### Extra 

* https://google.qwiklabs.com/focuses/1208?parent=catalog READ THIS FIRST!!!!!
* https://google.qwiklabs.com/focuses/1204?parent=catalog DEVELOP  A PROVIDER (ADVANCED)
* https://www.openpolicyagent.org/docs/latest/terraform/ (OPA for terraform)
* https://learn.hashicorp.com/terraform/development/running-terraform-in-automation
* https://blog.gruntwork.io/terraform-tips-tricks-loops-if-statements-and-gotchas-f739bbae55f9
