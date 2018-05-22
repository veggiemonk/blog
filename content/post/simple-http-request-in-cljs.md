---
title: "🔗 ClojureScript HTTP data fetching"
date: 2016-12-06T19:54:04+07:00
draft: false
tags: ["clojure", "clojurescript", "data", "web", "fetching"]
---

In ClojureScript, there is a very helpful library that is a wrapper around XHR. It is called [cljs-http](https://github.com/r0man/cljs-http).

In order to use it, we have to use the `core.async` library. `core.async` was design to work on the JVM to handle concurrent threads. JavaScript is single threaded but the concept is the same: passing message.

## Simple HTTP request

It is  helpful to know how to get data from a server when building a website or an app. It is a simple use case so here is an example of a `GET` request:

```clojure
;; require core.async and cljs-http
(ns example.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

;; request
(go (let [response (<! (http/get "https://api.github.com/users"
                                ;; parameters
                                 {:with-credentials? false
                                  :query-params {"since" 135}}))]
      (prn  (:body response)))) ;; print the response's body in the console
```

By the way, if the server returns data as JSON, the response will be automatically converted to EDN. So there is no extra work than the piece of code outlined above.
Now that you have your data, you have to extract what you need. There is a good tutorial that talks about
[destructuring](http://xahlee.info/clojure/clojure_binding_forms.html).

## Core.async

The `go` macro is part of `core.async` library as well as `<!` function which is use to extract message from the channel.
You can read all about [concurrent process and channels here](http://www.braveclojure.com/core-async/).

All HTTP functions in `cljs-http` return a `core.async channel`.
When a request has completed or failed it is written on that channel.
The response can be extracted with the `<!` function inside a `go` block. I am not completely sure why but I know it has something to do with the fact that `go` is a macro. (If you know why, please leave a comment below).

## Custom Headers

Sometimes you need to add a header such as "Authorization" (Github requires it).

```clojure
(go
  (let [response (<! (http/post "https://api.github.com/graphql"
                                {:with-credentials? false
                                 :headers {"Authorization" "SuperSecretToken1234"}
                                 :json-params {:query "query { viewer { login }}"}}))]
      (prn (:data (:body response)))))
```

With that you can go and start testing ClojureScript to your heart's delight and with data coming from a server.

Happy prototyping...