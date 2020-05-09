+++
title = "Infrastructure as Code - Terraform on GCP"
outputs = ["Reveal"]
date = "18 May 2019"
event_name = "Meetup, Stockholm @ NetEnt"

[reveal_hugo]
theme = "moon"
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
	<div style="border: 0; background: none;"
		class="devsite-site-logo" alt="Google Cloud">
<svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Art" x="0px" y="0px" viewBox="0 0 8986.8 1407.9" style="enable-background:new 0 0 8986.8 1407.9;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#EA4335;}
	.st1{fill:#4285F4;}
	.st2{fill:#34A853;}
	.st3{fill:#FBBC05;}
	.st4{fill:#5F6368;}
</style>
<metadata>
	<sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/">
		<slices/>
		<sliceSourceBounds bottomLeftOrigin="true" height="1407.9" width="8986.8" x="-4403.9" y="-689.9"/>
	</sfw>
</metadata>
<title>Cloud_Logo_Nav</title>
<g>
	<g>
		<path class="st0" d="M1057.1,369.2h50.8l144.8-144.8l7.1-61.5C990.3-75,579-49.3,341.1,220.2C275,295,227.1,384.1,200.9,480.5    c16.1-6.6,34-7.7,50.8-3l289.6-47.8c0,0,14.7-24.4,22.4-22.9c128.8-141.5,345.6-158,494.4-37.6L1057.1,369.2z"/>
		<path class="st1" d="M1459,480.5c-33.3-122.6-101.6-232.8-196.6-317l-203.2,203.2c85.8,70.1,134.7,175.8,132.6,286.6v36.1    c99.9,0,180.9,81,180.9,180.9s-81,180.9-180.9,180.9H830l-36.1,36.6v217l36.1,36.1h361.8c259.8,2,472.1-207,474.1-466.8    C1667.1,716.3,1589.4,568.7,1459,480.5z"/>
		<path class="st2" d="M467.7,1338.6h361.8V1049H467.7c-25.8,0-51.2-5.6-74.7-16.3l-50.8,15.8l-145.8,144.8l-12.7,50.8    C265.4,1305.9,365.2,1339.1,467.7,1338.6z"/>
		<path class="st3" d="M467.7,399.2C207.8,400.7-1.5,612.6,0,872.5c0.9,145.1,68.6,281.7,183.7,370.1l209.8-209.8    c-91-41.1-131.5-148.3-90.4-239.3s148.3-131.5,239.3-90.4c40.1,18.1,72.2,50.3,90.4,90.4l209.8-209.8    C753.4,466.9,614.6,398.6,467.7,399.2z"/>
	</g>
	<g>
		<g>
			<path class="st4" d="M2629.1,1136.4c-125.9,1.6-246.9-48.1-335.3-137.7c-91.3-85.8-142.3-206-140.7-331.3     c-1.5-125.3,49.5-245.4,140.7-331.3c88-90.5,209.1-141.2,335.3-140.2c120.2-1.6,236.1,45.1,321.6,129.6l-90.4,92     c-61.9-59.9-145.1-92.7-231.2-91.5c-90.3-1.1-177,35.8-238.8,101.6c-64.2,63.7-99.6,150.9-98.1,241.3     c-0.8,89.4,34.6,175.3,98.1,238.3c130.8,130.4,341.7,132.9,475.6,5.6c39.9-43.6,64.3-99.2,69.6-158h-304.9V624.8H3062     c4.2,26.2,5.9,52.7,5.1,79.3c5.4,110.9-34.8,219.2-111.3,299.8C2870.7,1092.4,2751.9,1140.6,2629.1,1136.4z M3632.1,1050     c-120.3,115.3-310.1,115.3-430.4,0c-58.3-56.5-90.1-134.8-87.9-215.9c-2.2-81.1,29.7-159.4,87.9-215.9c120.4-115,310-115,430.4,0     c58.2,56.5,90.1,134.8,87.9,215.9c2.1,81.2-30,159.5-88.4,215.9H3632.1z M3296.7,965.2c62.1,66.4,166.3,69.8,232.7,7.6     c2.6-2.5,5.2-5,7.6-7.6c33.9-35.1,52.2-82.3,50.8-131.1c1.5-48.9-16.8-96.4-50.8-131.6c-63.9-66.6-169.7-68.9-236.4-5     c-1.7,1.6-3.4,3.3-5,5c-34,35.2-52.3,82.7-50.8,131.6c-1.3,48.8,17.2,96.1,51.3,131.1H3296.7z M4293.6,1050     c-120.3,115.3-310.1,115.3-430.4,0c-58.3-56.5-90.1-134.8-87.9-215.9c-2.2-81.1,29.7-159.4,87.9-215.9     c120.3-115.3,310.1-115.3,430.4,0c58.2,56.5,90.1,134.8,87.9,215.9C4383.8,915.2,4351.9,993.5,4293.6,1050z M3958.3,965.2     c62.1,66.4,166.3,69.8,232.7,7.6c2.6-2.5,5.2-5,7.6-7.6c33.9-35.1,52.2-82.3,50.8-131.1c1.5-48.9-16.8-96.4-50.8-131.6     c-63.9-66.6-169.7-68.9-236.3-5c-1.7,1.6-3.4,3.3-5,5c-34,35.2-52.3,82.7-50.8,131.6c-1.3,48.8,17.2,96.1,51.3,131.1H3958.3z      M4728.5,1407.7c-60.9,1.9-120.6-17.1-169.2-53.9c-43.1-32.4-77.1-75.5-98.6-125l115.8-48.3c12.6,29.6,32.3,55.6,57.4,75.7     c26.8,21.6,60.5,33,95,32c44.2,2.7,87.4-14,118.4-45.7c30.6-36.9,45.7-84.3,42.2-132.1v-43.7h-4.6c-39.3,46.6-98.2,72-159,68.6     c-77.1,0.2-150.8-31.8-203.2-88.4c-56.8-56.1-88.2-133-86.9-212.9c-1.4-80.3,30-157.7,86.9-214.4c52.3-56.8,126-89.1,203.2-88.9     c32.3-0.1,64.3,7.1,93.5,20.8c25.3,11,47.8,27.5,66.1,48.3h4.6v-48.3h126v541.1c6.7,86.5-22.5,172-80.8,236.3     C4879.8,1382,4805.3,1410.4,4728.5,1407.7z M4737.7,1017.5c43.9,1,86-17.7,114.8-50.8c31.3-35.9,47.9-82.4,46.2-130.1     c1.9-48.5-14.6-95.8-46.2-132.6c-28.8-33.2-70.9-51.8-114.8-50.8c-45.1-0.9-88.4,17.6-118.9,50.8     c-33.6,35.5-51.9,82.8-50.8,131.6c-1,48.4,17.2,95.2,50.8,130.1C4649.1,999.2,4692.4,1018.1,4737.7,1017.5z M5240.2,230v888.1     h-132.6V230L5240.2,230z M5604,1136.4c-80.3,2.1-157.8-29.4-213.9-86.9c-56.9-57-88-134.9-85.9-215.4     c-3-80.7,26.9-159.2,82.8-217.5c52.8-55.6,126.6-86.4,203.2-84.9c34.9-0.4,69.4,6.4,101.6,19.8c29,11.7,55.4,29,77.7,50.8     c19.2,18.5,36.2,39.1,50.8,61.5c11.8,18.9,21.8,38.8,30,59.4l13.7,34.6L5457.6,925c25.2,57.8,83.3,94.2,146.3,91.5     c60.9,0.2,117.4-31.7,148.9-83.8l101.6,68.6c-25.9,37.1-59.1,68.6-97.6,92.5C5711.2,1122.6,5658,1137.4,5604,1136.4z      M5434.3,824.9l270.3-112.3c-8.3-19.8-23.2-36.1-42.2-46.2c-21.2-12-45.2-18.1-69.6-17.8c-41.3,1.1-80.6,18.4-109.2,48.3     C5448.9,730.1,5430.8,777,5434.3,824.9z"/>
		</g>
		<g>
			<path class="st4" d="M6558.7,1136.4c-231.2,4-421.8-180.2-425.8-411.4c-0.1-5.6-0.1-11.3,0.1-16.9     c-5.4-231.2,177.7-422.9,408.8-428.3c5.6-0.1,11.3-0.1,16.9-0.1c115.6-3.6,226.6,45.8,301.3,134.1l-73.2,71.1     c-54.9-69.1-139.5-107.8-227.6-104.2c-84.5-1.9-166.2,30.8-226.1,90.4c-62.3,62.7-95.6,148.5-92,236.8     c-3.7,88.3,29.7,174.1,92,236.8c59.9,59.7,141.6,92.3,226.1,90.4c98.4,1.1,191.9-42.7,254-118.9l73.2,73.2     c-38.3,45.8-86.4,82.4-140.7,107.2C6687.1,1123.8,6623.2,1137.4,6558.7,1136.4z"/>
			<path class="st4" d="M7083,1118.1h-105.2V297.5H7083V1118.1z"/>
			<path class="st4" d="M7254.8,624.2c114.7-113.9,299.9-113.9,414.6,0c54.4,57.5,83.7,134.3,81.3,213.4     c2.4,79.1-26.9,155.9-81.3,213.4c-114.7,113.9-299.9,113.9-414.6,0c-54.4-57.5-83.7-134.3-81.3-213.4     C7171.1,758.5,7200.3,681.7,7254.8,624.2z M7333,985c67.3,71.1,179.5,74.2,250.7,6.9c2.4-2.2,4.7-4.6,6.9-6.9     c37.1-39.8,56.7-92.9,54.4-147.3c2.4-54.4-17.2-107.5-54.4-147.3c-67.3-71.1-179.5-74.2-250.7-6.9c-2.4,2.2-4.7,4.6-6.9,6.9     c-37.1,39.8-56.7,92.9-54.4,147.3c-2.1,54.3,17.7,107.2,54.9,146.8L7333,985z"/>
			<path class="st4" d="M8333.4,1118.1h-101.6v-77.7h-3c-18.1,29.5-43.7,53.7-74.2,70.1c-31.6,18.3-67.6,28-104.2,27.9     c-60.2,4.1-118.9-19.5-159.5-64c-38.5-48.7-57.8-109.8-54.4-171.7V557.2h105.2v326.2c0,104.7,46.2,157,138.7,157     c41.7,1.3,81.4-17.6,106.7-50.8c27.3-34.5,41.8-77.4,41.2-121.4v-311h105.2V1118.1z"/>
			<path class="st4" d="M8690.6,1136.4c-72.2,0.2-140.9-31.1-188-85.9c-52.7-58.2-80.9-134.4-78.8-212.9     c-2.1-78.5,26.1-154.7,78.8-212.9c47.1-54.7,115.8-86.1,188-85.9c40-0.6,79.5,8.8,114.8,27.4c31.1,15.6,57.4,39.3,76.2,68.6h4.6     l-4.6-77.7V297.5h105.2v820.6h-101.6v-77.7h-4.6c-18.8,29.3-45.1,53-76.2,68.6C8769.4,1127.4,8730.3,1136.9,8690.6,1136.4z      M8707.9,1040.4c48.1,0.7,94.2-19.3,126.5-54.9c35.7-40.7,54-93.8,50.8-147.9c3.2-54-15.1-107.2-50.8-147.9     c-63.8-70.2-172.4-75.3-242.6-11.4c-4,3.6-7.8,7.5-11.4,11.4c-35.8,40.4-54.1,93.4-50.8,147.3c-3.3,53.9,15,106.9,50.8,147.3     C8612.8,1020.7,8659.3,1041.1,8707.9,1040.4z"/>
		</g>
	</g>
</g>
</svg>
		</div>
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
	<a rel="noopener" href="https://www.terraform.io/docs/providers/index.html">List of Terraform providers</a>
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
	<a rel="noopener" href="https://www.terraform.io/docs/providers/google/index.html">Resources for Google provider</a>
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

<a rel="noopener" href="https://www.terraform.io/docs/providers/google/r/compute_instance.html">compute instance reference	</a>
</section>

---

<section>
	<h2>graph dependency</h2>
	<pre><code data-trim>terraform graph | dot -Tpng > tf_dep_graph.png</code></pre>
	<!-- # Install graphviz: 
	# brew install graphviz # OSX
	# sudo apt install graphviz # Ubuntu -->
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
		<li><a rel="noopener" href="https://gist.github.com/veggiemonk/097890ff101a995f3c31f4d25b69665e">gists</a></li>
		<li><a rel="noopener" href="https://github.com/terraform-google-modules?type=source">github: terraform-google-modules</a></li>
		<li><a rel="noopener" href="https://www.oreilly.com/library/view/terraform-up-and/9781491977071/ch04.html">Chapter: Terraform modules</a></li>
		<li><a rel="noopener" href="https://github.com/shuaibiyy/awesome-terraform">Awesome Terraform</a></li>
		<li><a rel="noopener" href="https://blog.gruntwork.io/why-we-use-terraform-and-not-chef-puppet-ansible-saltstack-or-cloudformation-7989dad2865c">Terraform vs config mgmt</a></li>
	</ul>
</section>

---

### Extra 

* https://google.qwiklabs.com/focuses/1208?parent=catalog READ THIS FIRST!!!!!
* https://google.qwiklabs.com/focuses/1204?parent=catalog DEVELOP  A PROVIDER (ADVANCED)
* https://www.openpolicyagent.org/docs/latest/terraform/ (OPA for terraform)
* https://learn.hashicorp.com/terraform/development/running-terraform-in-automation
* https://blog.gruntwork.io/terraform-tips-tricks-loops-if-statements-and-gotchas-f739bbae55f9

