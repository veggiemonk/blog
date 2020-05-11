+++
title = "Frontend crash course for Backstage"
date = "2020-05-07"
outputs = ["Reveal"]
event_name = "presentation @ NetEnt"

[reveal_hugo]
theme = "moon"
highlight_theme = "zenburn"

+++

# Frontend 

# crash course

## for backstage

---

<section data-noprocess>
<h2> Before we start</h2>

<ul>
<li class="fragment">Async is hard</li>
<li class="fragment">State is hard</li>
<li class="fragment">We're stupid</li>
<li class="fragment">Plan accordingly</li>
</ul>

<blockquote class="fragment">
quote from <a rel="noopener" href="https://twitter.com/dan_abramov">Dan Abramov</a>
</blockquote>

<p class="fragment">
I would also add: </br>
<a rel="noopener" href="https://www.netmeister.org/blog/ops-lessons.html">
(A few) Ops Lessons We All Learn The Hard Way
</a>
</p>

</section>

---

## Content

1. Browsers
1. Javascript
1. React
1. Typescript
1. Backstage

---

# Browsers

* HTTP (see [curl](https://curl.haxx.se/))
* HTML (see [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML))
* DOM
* dynamic DOM with JS
* javascript

[MDN demo example](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html)

---

# Javascript

{{< figure src="/slides/images/javascript_good_parts.jpeg" title="the good part" >}}

---

### Compilers and interpreters

source code => compiler => machine code => output

source code => interpreter => output

---

### First class function

{{< highlight javascript  >}}
var give_me_one = () => 1;

// closure
function delay_add_four() {
    var a = 4;
    return function(arg) {
        return arg + a;
    }
}
var now_add_four_func = delay_add_four()

now_add_four_func(give_me_one()) // returns 5

{{< / highlight >}}

---

### Currying

{{< highlight javascript  >}}
var add = (a,b) => a + b;

add(10,20); // returns 30
{{< / highlight >}}

{{< highlight javascript  >}}
var curry_add = a => b => a + b;

curry_add(10)(20); // returns 30

var add_15 = curry_add(15);

// Do something

add_15(5); // returns 20;

{{< / highlight >}}

---

### Callbacks

{{< highlight javascript  >}}

function callback(event) {
    console.log('event:', event)
}

document
    .querySelector('#callbacks')
    .addEventListener('click', callback);

{{< / highlight >}}

---

### Delayed execution

{{< highlight javascript  >}}

function make_callback(prefix) {
    var old_time = (new Date()).toISOString();
    return function(event) {
        var new_time = (new Date()).toISOString();
        console.log(prefix, event)
        console.log({old_time, new_time})
    }
}

document
    .querySelector('#delayed-execution')
    .addEventListener('click', make_callback('printing event:'));

{{< / highlight >}}

---

## Async JS

[Modern Asynchronous Javascript](https://www.dotconferences.com/2015/12/christophe-porteneuve-modern-asynchronous-javascript)

by Christophe Porteneuve

[ExploreJS - Promise](https://exploringjs.com/impatient-js/ch_promises.html#the-basics-of-using-promises)


by Dr. Axel Rauschmayer

---

### Async/Await + Promise

{{< highlight javascript  >}}
async function github_graphql() {
  const query = { query: "query { viewer { login } }" };
  const body = { 
      method: 'post',
      headers: {
        Authorization: `bearer ${token}`
      }
      body: JSON.stringify(query)
  };
  try{
    const result = await fetch(
                    'https://api.github.com/graphql', body)
                      .then( x => x.json())
                      .catch(err => console.log({ err }));
    return result;
  } catch(err) {
    console.log({ err, from_try_catch: true })
  }
}
{{< / highlight >}}

---

## Async is hard

## State is hard

Keeping track of all the changes in the DOM is hard

### {{< frag c=" 👉 IMMUTABILITY" >}}

---

# Immutability

## means things don't change 

{{< highlight javascript  >}}
var laptop = {
    ram: 16,
    cores: 8
}
var laptop2 = laptop;
laptop.ram = 2; // not immutable

console.log('laptop', laptop);
console.log('laptop2', laptop2);
console.log(laptop === laptop2) //true comparison is by reference
{{< / highlight >}}

---

# REACT

## VDOM

> It’s a pure Javascript, in-memory representation of the DOM

idea: batching changes to the DOM 

---

## JSX

{{< highlight jsx  >}}

// React.createElement(component, props, ...children)
const element = React.createElement('h1', null, 'Hello, world!')
// or in JSX
const element2 = <h1>Hello, world!</h1>;

{{< / highlight  >}}

[Abstract Syntax Tree](https://astexplorer.net/)

---

## Component

{{< highlight jsx  >}}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// same with javascript class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="A Name" />;

// NOTE: 
// Always start component names with a capital letter.

{{< / highlight  >}}

---

## Composing Components

{{< highlight jsx  >}}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
{{< / highlight  >}}

[Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)

---

## Components lifecycle

* Initialization
* Mounting
* Update
* Unmounting

It is the state of the component

---

# Redux

## State is hard

Let's make it immutable

---

## One way data flow

Action => Reducer => Store => View (React)

* **View** dispatches **Actions**
* **Reducer**(state, action) => new state
* the **View** subscribes to **Store**

[Example](https://redux.js.org/introduction/getting-started#basic-example)

---

## React hooks

{{< highlight jsx  >}}
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

{{< / highlight >}}

Replace Redux these days

[React Hooks overview](https://reactjs.org/docs/hooks-overview.html)

---

* Immutability for DOM: React
* Immutability for app state: Redux/Hooks
* what about the shape of data ?

---

# Typescript

> typed superset of JavaScript, transpiled to JavaScript

[Typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

Imagine Javascript but with more Java

---

## Type checking

{{< highlight javascript  >}}
// Javascript
function search(name, age) {
  ...
}
{{< / highlight >}}


{{< highlight typescript  >}}
//Typescript
interface Person {
    name: string;
    age: number;
}
function search(name: string, age?: number): Person[] {
  ...
}
{{< / highlight >}}

---

### Typescript + react + hooks

{{< highlight typescript  >}}
interface Props {
  path: Routes
}

const TodoList: React.FC<Props> = ({ path }) => {
  const [appState, setAppState] = useAppState<AppState>()

  function toggleAllCheckbox(
      e: React.ChangeEvent<HTMLInputElement>
    ): void {
    setAppState({ 
        todoList: appState.todoList.map(
            (t: Todo): Todo => ({ ...t, completed: e.target.checked })
        ) 
    })
  }

  return (
      ...
  )
}
{{< / highlight >}}

---

# Build steps

transpile, optimise, bundle,...

[webpack](https://webpack.js.org/)

---

# CORS

[Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

I'm sure the fullstack role was invented to avoid explaining CORS to backend developers.

---

# Styling

CSS is worth learning.

{{< highlight css  >}}
:root {
  --color-text: #ffffff;
}
p {
  color: var(--color-text);
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
{{< / highlight >}}

---

# Backstage

{{< highlight shell  >}}
git clone https://github.com/spotify/backstage
cd backstage
yarn install
yarn start
yarn create-plugin
{{< / highlight >}}

[Backstage website](https://backstage.io/)

---

## plugins

{{< highlight tsx  >}}
const ExampleFetchComponent: FC<{}> = () => {
  const { value, loading, error } = 
            useAsync(async (): Promise<User[]> => {
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();
    return data.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable users={value || []} />;
};
{{< / highlight >}}
