+++
title = "Serverless & FaaS"
outputs = ["Reveal"]
date = "21 Apr 2020"
event_name = "DevOps Course, Stockholm @ KTH University"

[reveal_hugo]
theme = "moon"
highlight_theme = "zenburn"
+++

<section>
  <h1>SERVERLESS</h1>
  <h4>&</h4>
  <h2 style="text-transform: none;">FaaS</h2>
</section>

---

<section data-transition="zoom">  <!-- TODO REPLACE WITH TEMPLATE SLIDES-->
  <h4>Julien Bisconti</h4>
  <p>Software Engineer / SRE / GDE</p>
  <h4>contact</h4>
  <p>
    <small>
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="http://github.com/veggiemonk"
        >Github: @veggiemonk</a
      >
      <br />
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="https://twitter.com/julienBisconti"
        >Twitter: @julienBisconti</a
      >
      <br />
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="https://www.linkedin.com/in/julienbisconti/"
        >LinkedIn: julienbisconti</a
      >
      <br />
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="https://bisconti.cloud/"
        >blog: https://bisconti.cloud/</a
      >
    </small>
  </p>
</section>

---

<section>
  <h2>Content</h2>
  <ul>
    <li>Serverless in the context of DevOps</li>
    <li>Function-as-a-Service</li>
    <li>Tradeoffs</li>
    <li>Demo</li>
  </ul>
</section>

---

<section>
  <h4>at the beginning there was an</h4>
  <h2>APP</h2>
  <p class="fragment">and the app was code</p>
  <p class="fragment">that needed to run somewhere</p>
  <p class="fragment">and maybe scale</p>
</section>

---

<section>
  <h2>Deployment</h2>
  <p>Containers: lightweight VMs</p>
  <ul>
    <li>12 factor app</li>
    <li>easier deploy</li>
    <li>reproducible build</li>
  </ul>
  <br />
  <br />
  <h4 class="fragment">but ...</h4>
</section>

---

<section>
  <ul>
    <li>Scaling up and down</li>
    <li>Redundancy</li>
    <li>Scheduling / Orchestration</li>
    <li>Service Discovery</li>
    <li>Resiliency</li>
    <li>Rolling out and back</li>
    <li>Health checks</li>
    <li>Secret and config</li>
  </ul>
  <br />
  <p class="fragment">
    ➡️ kubernetes
  </p>
  <h4 class="fragment">but ...</h4>
</section>

---

<section>
  <ul>
    <li>Logging</li>
    <li>Tracing</li>
    <li>Metrics</li>
    <li>Dependency visualisation</li>
    <li>Service identity and Auth</li>
    <li>Circuit breaking</li>
    <li>Traffic flow and policies</li>
    <li>Failover</li>
    <li>Fault injection</li>
    <li>...</li>
  </ul>
  <br />
  <br />
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
  <br />
  <br />
  <h4 class="fragment">➡️ ️ Service Mesh</h4>
</section>

---

<section>
  <img src="./meme_cncf_landscape.jpeg" alt="Meme CNCF landscape" />
</section>

---

<section>
  <img
    src="production_grade_infra.png"
    alt="production grade infrastructure"
  />
  <a href=""
    >Yevgeniy Brikman - Lessons from 300k+ Lines of Infrastructure
    Code</a
  >
</section>

---

<section>
  <h2>overwhelmed yet ?</h2>
  <h2 class="fragment">it's normal</h2>
  <h1 class="fragment">Questions ?</h1>
</section>

---

<section>
  <h2>SERVERLESS</h2>
  <h3>Abstraction layer</h3>
  <ul>
    <li>serverless 👉 less servers</li>
    <li>DevOps - Ops = Dev</li>
    <li>Deploy functions 👉 FaaS</li>
  </ul>
</section>

---

<section>
  <blockquote>
    <p lang="en" dir="ltr">
      It is serverless the same way WiFi is wireless. At some point, it
      will hit a wire.
    </p>
    &mdash;
    <a href="https://gojko.net/2016/08/27/serverless.html"
      >Gojko Adzic</a
    >
  </blockquote>
</section>

---

<section>
  <img src="./components-of-iaas-caas-paas-faas.png" alt="XaaS" />
  <p class="fragment">I don't understand this abstraction</p>
  <a
    href="https://dzone.com/articles/a-quick-guide-to-serverless-computing-world"
    >source</a
  >
</section>

---

<section>
  <h2>FaaS</h2>
  <pre><code class="js hljs" style="word-wrap: break-word;" data-trim>
exports.helloGET = (req, res) => {
  res.send('Hello World!');
};
  </code></pre>
  <a href="https://cloud.google.com/functions/docs/first-nodejs">
    source documentation
  </a>
</section>

---

<section>
  <h1>demo</h1>
  <h2>Short example</h2>
</section>

---

<section>
  <h1>Questions ?</h1>
</section>

---

<section>
  <h2>Mental limitations</h2>
  <br />
  <ul>
    <li># decisions / day</li>
    <li># things to remember</li>
    <li>speed of memory / reflexes</li>
  </ul>
</section>

---

<section>
  <h2>Consistency is key</h2>
  <a
    href="http://collections.uakron.edu/utils/getdownloaditem/collection/p15960coll1/id/25524/filename/25525.pdf/mapsto/pdf"
  >
    source
  </a>
  <img
    src="army_report_title.png"
    alt="Archives of the History of American Psychology, The Center for the
History of Psychology, The University of Akron"
    srcset=""
  />
  <img src="army_report.png" alt="army report uniformity" srcset="" />
</section>

---

<section>
  <h1>Questions ?</h1>
</section>

---

<section>
  <h1>We could build it</h1>
  <div class="fragment">
    <h2>BUT</h2>
    <h2>spending time on the business</h2>
    <h2>makes more sense financially</h2>
  </div>
</section>

---

<section>
  <img src="./no-code.png" alt="no code" width="80%" />
  <a target="_blank" href="https://github.com/kelseyhightower/nocode"
    >repository</a
  >
</section>

---

<section>
  <h1>Questions ?</h1>
</section>

---

<section>
  <h2>tradeoffs</h2>
  <p>
    Developer time (build)
    <br />
    Use a product (buy)
  </p>

  <p>
    On premise: fixed price and capacity
    <br />
    Cloud: pay for what you use
  </p>

  <p>
    latency versus throughput
  </p>
  <p>cold start ?</p>
  <h2 class="fragment">👉 strategy</h2>
</section>

---


<section>
  <img src="swardley_map.jpeg" alt="mapping" />
  <p>
    <a href="https://youtu.be/xlNYYy8pzB4">Simon Wardly - Mapping</a>
  </p>
</section>

---

<section>
  <h1>Questions ?</h1>
</section>

---

<section>
  <h1>Mindset</h1>
  <h2>connect services</h2>
  <a href="https://www.youtube.com/watch?v=bYCPbKHivMA"
    >Patrick Debois - From serverless to Service Full</a
  >
</section>

---

<section>
  <h1>Demo</h1>

  <h3>In the ☁️</h3>
  <a
    href="https://gist.github.com/veggiemonk/0f3382158d60c86536fe2e5df8c615d3"
    >Gist for the demo</a
  >
  <br />
  <a
    href="https://github.com/esimov/pigo-openfaas/blob/master/pigo-openfaas/handler.go"
    >code used
  </a>
</section>

---

<section>
  <h1>Questions ?</h1>
</section>

---

<section>
  <h1>Why deploying functions ?</h1>
</section>

---

<section>
  <h2>Focus on code</h2>
  <h2 class="fragment">OR?</h2>
</section>

---

<section>
  <h2>Focus on:</h2>
  <ul>
    <li>code</li>
    <li>business features</li>
    <li>security</li>
    <li>monitoring</li>
    <li>performance</li>
    <li>productivity</li>
    <li>SLI/SLO/SLA</li>
    <li>cost/resource optimization</li>
  </ul>
</section>

---

<section>
  <h4>conclusion</h4>
  <h2>I'm sorry 🙏</h2>
  <h4>If you had to maintain my code</h4>
  <h4>I hope you learned more by maintaining it</h4>
  <h4>than me by writing it</h4>
  <br />
  <p>
    <small>
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="http://github.com/veggiemonk"
        >Github: @veggiemonk</a
      >
      <br />
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="https://twitter.com/julienBisconti"
        >Twitter: @julienBisconti</a
      >
      <br />
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="https://www.linkedin.com/in/julienbisconti/"
        >LinkedIn: julienbisconti</a
      >
      <br />
      <a
        style="font-weight: bold; color: deepskyblue;"
        href="https://bisconti.cloud"
        >blog: https://bisconti.cloud/</a
      >
    </small>
  </p>
</section>


