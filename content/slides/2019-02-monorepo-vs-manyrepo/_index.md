+++
title = "Monorepo -vs- Multirepo (Stockholm Meetup)"
outputs = ["Reveal"]
date = "18 Feb 2019"

[reveal_hugo]
#theme = "simple"
highlight_theme = "zenburn"
+++

<section data-transition="zoom" data-state="blackout">
    <h2>Monorepo -vs- Multirepo</h2>
    <br />
    <h3>the local dev env should die!</h3>
</section>

---


<section data-transition="zoom">
    <h4>A.K.A.</h4>
    <h3>
    Tradeoffs and tooling of having all the code base in one place
    </h3>
</section>

---

<section data-transition="fade" id="inquiry">
    <h3>
    How do you know how to
    </h3>
    <h2>
    build, test, run, debug, deploy
    </h2>

    <h3>a project ?</h3>
</section>

---

<section data-transition="zoom">
    <h4>Julien Bisconti</h4>
    <p>Software engineer / DevOps / GDE</p>
    <div>
    <h4>Worked at</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <div>
        <svg
            height="100"
            viewBox="0 0 275 100"
            width="275"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="m82.775 79.842-17.875-30.067 17.875-30.067 8.617 30.067zm-39.783-2.934-22.459-22.275h35.75l17.875 30.067zm0-54.358 31.075-7.792-17.875 30.067h-35.75zm45.65-22.55-40.609 10.542-6.05 10.358-12.191-.092-29.792 28.967 29.792 28.967 12.191-.092 6.05 10.358 40.609 10.634 10.908-39.509-6.142-10.266 6.142-10.267zm92.216 29.242c-5.408 0-9.075 2.291-11.825 6.508h-.183v-5.408h-9.533v39.783h9.716v-22.55c0-5.408 3.392-9.167 8.067-9.167 4.4 0 7.7 2.659 7.7 7.334v24.475h9.717v-26.034c.091-8.708-5.409-14.941-13.659-14.941zm-36.3 24.108c0 5.317-3.025 8.983-7.975 8.983-4.491 0-7.333-2.566-7.333-7.241v-24.75h-9.717v26.583c0 8.708 4.95 14.392 13.842 14.392 5.592 0 8.708-2.109 11.367-5.775h.275v4.675h9.35v-39.875h-9.717v23.008zm55.184-23.008h9.716v39.783h-9.716zm0-12.375h9.716v7.975h-9.716zm64.808 12.375-5.775 17.966c-1.283 3.667-2.292 8.709-2.292 8.709h-.275s-1.283-5.042-2.566-8.709l-6.509-17.966h-10.45l10.725 28.325c2.292 6.05 3.025 8.616 3.025 10.816 0 3.3-1.741 5.409-5.866 5.409h-3.759v8.341h6.234c8.066 0 10.908-3.208 13.933-12.008l14.025-40.792h-10.45zm-36.942 28.141v-21.083h6.234v-6.967h-6.234v-12.466h-9.716v12.375h-5.5v6.966h5.5v23.375c0 7.517 5.683 9.534 10.816 9.534 4.217 0 5.317-.184 5.317-.184v-7.7h-2.475c-2.292.092-3.942-.916-3.942-3.85z"
            fill="#fff"
            />
        </svg>
        </div>
        <div>
        <img
            src="https://corporate.discovery.com/wp-content/themes/discovery-corporate/images/discovery-logo-explore-flat-2018.png"
            alt="Discovery Logo"
        />
        </div>
    </div>
    </div>
    <h4>contact</h4>
    <p>
    <small>
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="http://github.com/veggiemonk"
        >Github: @veggiemonk</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://twitter.com/veggiemonk"
        >Twitter: @veggiemonk</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://www.linkedin.com/in/julienbisconti/"
        >LinkedIn: julienbisconti</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://veggiemonk.github.io/"
        >blog: https://veggiemonk.github.io/</a
        >
    </small>
    </p>
</section>

---


<section>
    <img
    style="height:100%;"
    src="https://i.imgflip.com/2hrq4d.jpg"
    title="made at imgflip.com"
    />
</section>

---

<section>
    <h3>❌ Monorepo ≠ monolithic app 🧐</h3>
    <p>
    It’s about the development workflow 👩‍💻
    <br />
    And sharing
    <span style="color: #eee8d5">surrounding code</span> with colleagues
    <br />
    (build scripts, e2e tests, dependencies, docs, config,…)
    </p>
    <p>Multiple languages ?</p>
    <p>Multiple projects ?</p>
    <p>What size ?</p>
</section>

---

<section>
    <h3>Everybody should do monorepo?</h3>
    <img
    src="mono-all-the-things.jpg"
    alt="mono all the things"
    srcset=""
    />
</section>

---

<section>
    <ul>
    <li>mono cloud provider account</li>
    <li>mono k8s cluster</li>
    <li>mono VPC</li>
    <li>mono slack channel</li>
    <li>mono computer (mainframe)</li>
    <li>mono office space (open office)</li>
    <li>mono chair (bench)</li>
    <li>mono coffee machine</li>
    <li>mononucleosis</li>
    </ul>
</section>

---

<section>
    <h2>Monorepo: please don't</h2>
    <p>
    <a
        href="https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b"
    >
        @mattklein123/monorepos-please-dont-e9a279be011b
    </a>
    </p>
    <ul>
    <li>✅ Easier collaboration and code sharing</li>
    <li>✅ Single build / no dependency management</li>
    <li>✅ Code refactors are easy / atomic commits</li>
    <hr />
    <li>❌ tight coupling and OSS</li>
    <h4><li>❌ scalability</li></h4>
    </ul>
</section>

---

<section>
    <h4>Demo: babel (js)</h4>
    <img src="babel.png" alt="babel" srcset="" />
</section>

---

<section>
    <h3>Inside a monorepo</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <ul>
        <li>core + plugins?</li>
        <li>libraries?</li>
        <li>frameworks?</li>
        <li>infrastructure?</li>
        <li>every microservices?</li>
    </ul>
    <ul>
        <li>all backend projects?</li>
        <li>all frontend projects?</li>
        <li>each fullstack projects?</li>
        <li>each departments code?</li>
        <li>whole company code ?</li>
    </ul>
    </div>
    <br />
    <h2 class="fragment">👉 different levels of abstraction</h2>
</section>

---

<section>
    <h1>different levels of abstraction</h1>
    <h4 class="fragment">different levels of abstraction</h4>
</section>

---

<section>
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
    <h4>gitlab: from idea to production</h4>
    <img
    src="gitlab.png"
    alt="gitlab from idea to production"
    srcset=""
    style="background-color: #eee8d5;"
    />
</section>

---

<section>
    <h2>Multirepo</h2>
    <h3>1 microservice = 1 repository</h3>
    <h2 class="fragment">Why microservices ?</h2>
    <h4 class="fragment">👉 to ship your organization</h4>
</section>

---

<section>
    <img src="conways-law.jpg" alt="conway's law" srcset="" />
    <br />
    <a href="https://thefourthrevolution.org/wordpress/archives/5512"
    >source</a
    >
</section>

---


<section style="font-size:large">
    <p>Jeff Bezos 2002:</p>
    <ul>
    <li>
        All teams will henceforth expose their data and functionality
        through service interfaces.
    </li>
    <li>
        Teams must communicate with each other through these interfaces.
    </li>
    <li>
        There will be no other form of inter-process communication
        allowed: no direct linking, no direct reads of another team’s data
        store, no shared-memory model, no back-doors whatsoever. The only
        communication allowed is via service interface calls over the
        network.
    </li>
    <li>It doesn’t matter what technology they use.</li>
    <li>
        All service interfaces, without exception, must be designed from
        the ground up to be externalizable. That is to say, the team must
        plan and design to be able to expose the interface to developers
        in the outside world. No exceptions.
    </li>
    <li>Anyone who doesn’t do this will be fired.</li>
    <li>Thank you; have a nice day!</li>
    </ul>
    <!-- <a href="https://homepages.dcc.ufmg.br/~mtov/pmcc/modularization.pdf"
    >source</a
    > -->
    <br />
    <a href="https://plus.google.com/+RipRowan/posts/eVeouesvaVX">
    https://plus.google.com/+RipRowan/posts/eVeouesvaVX</a
    >
</section>

---

<section>
    <img src="org_amazon.png" alt="amazon org" srcset="" />
    <br />
    <p style="font-size: x-large">
    credit: <a href="https://twitter.com/lmanul">Manu Cornet</a>
    </p>
</section>

---

<section>
    <img src="org_google.png" alt="google org" srcset="" />
    <br />
    <p style="font-size: x-large">
    credit: <a href="https://twitter.com/lmanul">Manu Cornet</a>
    </p>
</section>

---

<section>
    <img src="org_facebook.png" alt="facebook org" srcset="" />
    <br />
    <p style="font-size: x-large">
    credit: <a href="https://twitter.com/lmanul">Manu Cornet</a>
    </p>
</section>

---

<section>
    <img src="org_microsoft.png" alt="microsoft org" srcset="" />
    <br />
    <p style="font-size: x-large">
    credit: <a href="https://twitter.com/lmanul">Manu Cornet</a>
    </p>
</section>

---

<section>
    <img src="org_apple.png" alt="apple org" srcset="" />
    <br />
    <p style="font-size: x-large">
    credit: <a href="https://twitter.com/lmanul">Manu Cornet</a>
    </p>
</section>

---

<section>
    <img src="org_oracle.png" alt="oracle org" srcset="" />
    <br />
    <p style="font-size: x-large">
    credit: <a href="https://twitter.com/lmanul">Manu Cornet</a>
    </p>
</section>

---

<!-- <section>
    <h4>Pull request</h4>
    <div style="display:grid; grid-template-columns: 1fr 1fr;">
    <img src="firat_note.jpg" alt="Firat's note" srcset="" />
    <blockquote class="fragment">
        Have social anxiety.
        <br />
        <br />
        Decide to get a job with little human interaction.
        <br />
        <br />
        End up having to talk to everyone to get product shipped.
    </blockquote>
    </div>
</section>

---
 -->

<section>
    <h1>tooling</h1>
</section>

---

<section>
    <h2>GIT</h2>
    <img width="70%" src="git.png" alt="git" />
    <br />
    <a href="https://www.youtube.com/watch?v=dBSHLb1B8sw"
    >GOTO 2015 • Deep Dive into Git • Edward Thomson</a
    >
</section>

---


<section>
    <h3>monorepo with git</h3>
    <ul>
    <li>plain git</li>
    <li>git subtree (folder)</li>
    <li>git submodules (black box)</li>
    <li>custom scripts</li>
    </ul>
</section>

---

<section>
    <img src="branches.png" alt="git branches" />
</section>

---


<section>
    <h3>code storage ≠ deployment</h3>

    <img style="width:150%" src="tooling.png" alt="Toolling diagram" />
</section>

---

<section>
    <h3>tooling</h3>

    <ul>
    <li>
        <a href="https://github.com/splitsh/lite">
        splitsh/lite
        </a>
        (split monorepo)
    </li>
    <li>
        <a href="https://bazel.build/">bazel.build</a> (build monorepo)
    </li>
    <li>
        <a href="https://lernajs.io/">lernajs.io</a> (build js monorepo)
    </li>
    <li>
        <a href="https://github.com/unravelin/tomono">unravelin/tomono</a>
        (migration)
    </li>
    <li>
        <a href="https://github.com/korfuri/awesome-monorepo"
        >korfuri/awesome-monorepo</a
        >
        (list of resources)
    </li>
    </ul>
</section>

---

<section>
    <h3>tooling (cont'd)</h3>

    <h4>Archive git history</h4>
    <pre><code>
git clone file:///Users/$USER/Projects/myProject myClonedProject \
--shallow-since=2016-09-02
    </code></pre>
    <br />
    <a
    href="https://stackoverflow.com/questions/4515580/how-do-i-remove-the-old-history-from-a-git-repository"
    >source</a
    >
</section>

---


<section>
    <h2>getting good at monorepo means</h2>
    <ol>
    <li>
        getting <span style="color: #eee8d5">good at git</span> and its
        internals
    </li>
    <li>
        <span style="color: #eee8d5">being disciplined</span> about code
        reuse and dependencies
    </li>
    <li>
        <span style="color: #eee8d5">being disciplined</span> for
        branches, PR size and documentation
    </li>
    <li>implementing features toggle and A/B testing</li>
    <li>
        having the <span style="color: #eee8d5">whole picture</span> ie.
        the whole code base on your hard drive (Linux kernel repo is
        ~20GB)
    </li>
    <li>understanding versioning</li>
    <li>immutable build (uniformity)</li>
    </ol>
</section>

---

<section>
    <h3>Being disciplined relates to engineering culture</h3>
</section>

---

<!-- ===================================================================================== -->
<section>
    <h2>
    What about the developer environment ?
    </h2>
</section>

---

<section>
    <h3>Developer environment</h3>
    <ul>
    <li>what's an environment ?</li>
    <li>how to reproduce ?</li>
    <li>how to make changes ?</li>
    <li>code << project code</li>
    </ul>
</section>

---

<section>
    <h3>Dev Env with Git submodules</h3>
    <ul>
    <li>opt-in ✌️</li>
    <li>lightweight 🥗</li>
    <li>focus on developers 👩‍💻</li>
    <li>faster onboarding 🙋‍♂️</li>
    </ul>
    <p>
    <a href="https://github.blog/2016-02-01-working-with-submodules/"
        >github blog - submodules</a
    >
    </p>
    <p>
    <span style="color:#eee8d5; font-weight: 900;">+</span>
    <a href="https://github.com/github/scripts-to-rule-them-all"
        >github/scripts-to-rule-them-all</a
    >
    </p>
</section>

---

<section>
    <h1>demo</h1>
</section>

---

<!-- <section>
    <h2>summary</h2>
    <ul>
    <li>Different levels of abstraction</li>
    <li>Uniformity is related to error rate (productivity)</li>
    <li>
        Executing a script is faster than copy pasting commands from
        documentation
    </li>
    <li>Opt-in is less disruptive than opt-out</li>
    </ul>
</section>

---
 -->

<section>
    <h2>IDEA</h2>
    <p>instead of trying to reproduce locally / mock:</p>
    <ul>
    <li>all the microservices</li>
    <li>all DBs (cluster?)</li>
    </ul>
    <p>on your 16GB laptop, why not a</p>
    <ul style="color: #eee8d5">
    <li>cloned</li>
    <li>on-demand</li>
    <li>pre-setup</li>
    </ul>
    <p>environment ?</p>
</section>

---

<section>
    <h2>Efficient -vs- Effective</h2>
</section>

---

<section>
    <h3># minimalist</h3>
    <p><a href="https://gitpod.io/workspaces/">gitpod.io</a></p>
    <p><a href="https://codesandbox.io">codesandbox.io</a></p>
    <p>in browser editor:</p>
    <ul>
    <li><a href="https://github.com/eclipse/che/">eclipse/che</a></li>
    <li>
        <a href="https://github.com/theia-ide/theia">theia-ide/theia</a>
    </li>
    </ul>
</section>

---

<section>
    <h2>THANK YOU</h2>
    <p>
    <small>
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="http://github.com/veggiemonk"
        >Github: @veggiemonk</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://twitter.com/veggiemonk"
        >Twitter: @veggiemonk</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://www.linkedin.com/in/julienbisconti/"
        >LinkedIn: julienbisconti</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://veggiemonk.github.io/"
        >blog: https://veggiemonk.github.io/</a
        >
        <br />
        <a
        style="font-weight:bold;color:deepskyblue;"
        href="https://www.slideshare.net/julienbisconti"
        >slides: https://www.slideshare.net/julienbisconti</a
        >
    </small>
    </p>
    <br />
    <h4>Slides made with Revealjs</h4>
</section>
