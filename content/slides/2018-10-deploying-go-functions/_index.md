+++
title = "Deploying Go Functions"
outputs = ["Reveal"]
date = "18 Oct 2018"
event_name = "Go Conference 2018, Stockholm @ Google"

[reveal_hugo]
theme = "moon"
highlight_theme = "zenburn"
+++

<section data-transition='concave' data-state='blackout'>
<h1>DEPLOYING GO FUNCTIONS</h1>
</section>

---


<section>
  <h2>Why deploying go functions ?</h2>
</section>

---


<section>
  <h2>Mental limitations</h2>
  <br>
  <ul>
    <li># decisions / day </li>
    <li># things to remember</li>
  </ul>
</section>

---

<section>
  <h2>Demo</h2>
  <p>
    <a rel="noopener" href="https://www.openfaas.com/">
      <img width="50%" src="/slides/images/openfaas.png" alt="openfaas logo">
    </a>
  </p>
  <pre><code class="hljs bash">docker swarm init
git clone https://github.com/openfaas/faas
cd faas
./deploy_stack.sh
open http://127.0.0.1:8080</code></pre>
</section>

---


<section>
  <section>
    <h2>How does it work</h2>
    <ul>
      <li>OpenFaas API Gateway routes into functions</li>
      <li>Runs inside a container</li>
      <li>Uses a watchdog process (web server)</li>
      <li>Process STDIN and returns to STDOUT</li>
      <li>Collects metrics in Prometheus</li>
    </ul>
  </section>

---

  <section>
    <h4>templates</h4>
    <pre><code class="hljs golang">import (
  "fmt"
  "io/ioutil"
  "log"
  "os"

  "handler/function"
)
func main() {
  input, err := ioutil.ReadAll(os.Stdin)
  if err != nil {
    log.Fatalf("Unable to read standard input: %s", err.Error())
  }
  fmt.Println(function.Handle(input))
}</code></pre>
<p><a rel="noopener" href="https://github.com/openfaas/templates">See all templates</a></p>
  </section>

---


  <section>
    <h4>functions</h4>
    <pre><code  class="hljs golang">
// Handle a serverless request
func Handle(req []byte) string {
  return fmt.Sprintf("Hello, Go. You said: %s", string(req))
}
    </code></pre>
    <p><a rel="noopener" href="https://github.com/esimov/pigo-openfaas/blob/master/pigo-openfaas/handler.go">face detection handler</a></p>
  </section>

---


  <section>
    <pre><code class="hljs dockerfile"># Populate example here - i.e. "cat", "sha512sum" or "node index.js"
ENV fprocess="./handler"
# Set to true to see request in function logs
ENV write_debug="false"

EXPOSE 8080

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1
CMD [ "fwatchdog" ]
        </code></pre>
  </section>

---


</section>

---


<!-- <section>
  Each container has a watchdog process that hosts a web server allowing a post request
  to be forwarded to a desired process via STDIN.
  The response is sent back to the caller via STDOUT.

The API Gateway provides an external route into your functions and collects metrics in Prometheus.
The gateway will scale functions according to demand by mangaging Docker Swarm replicas as throughput increases.
A UI is baked in allowing you to invoke functions in your browser and create new ones as needed.
</section>

---
 -->

<section>
<h2>Why deploying go functions ?</h2>
</section>

---

<section>
<img src="/slides/images/The_Art_of_Unix_Programming.jpg" alt="The Art of UNIX programming">
<!-- <p><a rel="noopener" href="https://www.youtube.com/watch?v=rFejpH_tAHM">dotGo 2015 - Rob Pike - Simplicity is Complicated</a></p> -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/rFejpH_tAHM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</section>

---


<section>
<h2>From serverless to Service Full</h2>
<h4> by Patrick Debois </h4>
<iframe width="560" height="315" src="https://www.youtube.com/embed/bYCPbKHivMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<!-- https://www.youtube.com/watch?v=bYCPbKHivMA -->
</section>

---


<section>
  <h3> Name a service for :</h3>
  <ul>
    <li>mails</li>
    <li>chat</li>
    <li>pictures</li>
    <li>files</li>
    <li>code</li>
    <li>dns</li>
    <li>payment</li>
  </ul>
</section>

---


<section>
  <h2>Why deploying go functions ?</h2>
</section>

---

<section>
  <h1>We could build it</h1>
  <h2>BUT</h2>
  <h4>spending time on the business makes more sense financially.</h4>
</section>

---

<section>
  <ul>
      <li>Logging</li>
      <li>Tracing</li>
      <li>Metrics</li>
      <li>Service identity and Auth</li>
      <li>Circuit breaking</li>
      <li>Traffic flow and policies</li>
      <li>Failover</li>
      <li>A/B testing</li>
      <li>Fault injection</li>
      <li>...</li>
  </ul>
<br>
<br>
<h4 class="fragment">➡️ ️ use code?</h4>
</section>

---

<section>
  <h3>drawbacks</h3>
  <ul>
    <li>combination language/framework/version/feature</li>
    <li>maintain, upgrade, migrate, retire</li>
    <li>code pollution and complexity (+ testing)</li>
    <li>deployment / rolling update</li>
    <li>language/framework/version lock-in</li>
    <li>debugging</li>
  </ul>
  <br>
  <br>
  <h4 class="fragment">➡️ ️ move it to the infrastructure</h4>
</section>

---

<section>
  <img src="/slides/images/no-code.png" alt="no code" width="80%">
  <a target="_blank" href="https://github.com/kelseyhightower/nocode">repository</a>
</section>

---


<section>
  <img src="/slides/images/swardley_map.jpeg" alt="mapping">
  <p><a rel="noopener" href="https://youtu.be/xlNYYy8pzB4">Simon Wardly - Mapping</a></p>
</section>

---

<section>
  <h2>CODE</h2>
  👇
  <h2>INFRA</h2>
  👇
  <H2>SERVICE</H2>
</section>

---

<!-- <section>
  <blockquote>
    <p lang="en" dir="ltr">Chaos Engineering is exploratory testing of non-functional requirements
        where ‘non-functional requirements’ are the requirements that if not met render a service non-functional.
    </p>
    &mdash; <a rel="noopener" href="https://twitter.com/littleidea/status/1030304684991369216">@littleidea</a>
  </blockquote>
</section>

---
 -->

<!-- <section>
  <h2>Nothing is a problem </h2>
  <h2>until it becomes one</h2>
   <p>  cloud bills, performance, scaling</p>
</section>

---
 -->

<!-- <section>
  Even though we could build it,
  spending my time on the business makes more sense financially.


  Service are limited

  No maintenance  but services are out of your control sometimes

  Dependency!

  Promise theory
  Chaos Engineering

</section>

---
 -->


<section>
  <h2>THANK YOU</h2>
  <p>
    <img src="/slides/images/56k.cloud.png" alt="56k.cloud" style="vertical-align:middle; background-color: white;" width="10%">
    <a rel="noopener" href="http://56k.cloud">56k.cloud</a> is hiring DevOps/SRE</p>
  <br>
  <p>
    <small>
      <a style='font-weight:bold;color:deepskyblue;' href='http://github.com/veggiemonk'>Github: @veggiemonk</a>
      <br/>
      <a style='font-weight:bold;color:deepskyblue;' href='https://twitter.com/veggiemonk'>Twitter: @veggiemonk</a>
      <br/>
      <a style='font-weight:bold;color:deepskyblue;' href='https://www.linkedin.com/in/julienbisconti/'>LinkedIn: julienbisconti</a>
      <br />
      <a style='font-weight:bold;color:deepskyblue;' href="https://veggiemonk.github.io/">blog: https://veggiemonk.github.io/</a>
      <br />
      <a style='font-weight:bold;color:deepskyblue;' href="https://www.slideshare.net/julienbisconti">slides: https://www.slideshare.net/julienbisconti</a>
    </small>
  </p>
</section>
