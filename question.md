# 1. What is React?
React (aka React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces based on components. It's used for handling the view layer in web and mobile applications, and allows developers to create reusable UI components and manage the state of those components efficiently.

React was created by Jordan Walke, a software engineer at Facebook (now Meta). 

# 2.What is JSX?
JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax.

In the example below, the text inside <h1> tag is returned as JavaScript function to the render function.
```
export default function App() {
  return <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>;
}
```
## Why React uses className over class attribute?
The attribute names written in JSX turned into keys of JavaScript objects and the JavaScript names cannot contain dashes or reserved words, it is recommended to use camelCase wherever applicable in JSX code. The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principle reason why React uses className instead of class. Pass a string as the className prop.
```
render() {
  return <span className="menu navigation-menu">{'Menu'}</span>
}
```
# 3.How to create components in React?
Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.

Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the one and only one parameter and return React elements to render the output:

```
function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}
```
Class Components: You can also use ES6 class to define a component. The above function component can be written as a class component:
```
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
} 
```

# 4. When to use a Class Component over a Function Component?
- After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components in React.
- Because you could use state, lifecycle methods and other features that were only available in class component present in function component too.

But even there are two reasons to use Class components over Function components.

1. If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.
In older versions, 
2. If the component needs state or lifecycle methods then you need to use class component.
So the summary to this question is as follows:

Use Function Components:

If you don't need state or lifecycle methods, and your component is purely presentational.
For simplicity, readability, and modern code practices, especially with the use of React Hooks for state and side effects.
Use Class Components:

If you need to manage state or use lifecycle methods.
In scenarios where backward compatibility or integration with older code is necessary.
Note: You can also use reusable react error boundary third-party component without writing any class. i.e, No need to use class components for Error boundaries.

The usage of Error boundaries from the above library is quite straight forward.

Note when using react-error-boundary: ErrorBoundary is a client component. You can only pass props to it that are serializable or use it in files that have a "use client"; directive.
```
"use client";

import { ErrorBoundary } from "react-error-boundary";

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <ExampleApplication />
</ErrorBoundary>;
⬆ Back to Top

```

# 5 What are Pure Components?
Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo() API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.

But at the same time, it won't compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.

The syntactic representation of memoized components looks like below,

const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
In class components, the components extending React.PureComponent instead of React.Component become the pure components. When props or state changes, PureComponent will do a shallow comparison on both props and state by invoking shouldComponentUpdate() lifecycle method.
React.memo() is a higher-order component.

# 6 What is state in React?
State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.
Let's take an example of User component with message state. Here, useState hook has been used to add state to the User component and it returns an array with current state and function to update it.
```
import { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```
# 7 What are props in React?
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

Pass custom data to your component.
Trigger state changes.
Use via this.props.reactProp inside component's render() method.
```
import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" gender="male" />
      <ChildComponent name="Mary" age="25" geneder="female" />
    </div>
  );
};
```


# 8 state vs props 
State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

In React, both state and props are plain JavaScript objects, but they serve different purposes and have distinct behaviors:

|Definition | State | props| 
|-----------|--------|-------|
| Definition | State is a data structure that is managed within a component. It represents information that can change over the lifetime of the component.|Props (short for “properties”) are inputs to a component, provided by its parent component.|
|Mutability:|State is mutable, meaning it can be changed using the setter function (setState in class components or the updater function from useState in functional components).|Props are read-only. A component cannot modify its own props; they are immutable from the component’s perspective.|
|Scope:|State is local to the component where it is defined. Only that component can modify its own state.|Props are used to pass data and event handlers down the component tree, enabling parent components to configure or communicate with their children.|
|Usage:|State is typically used for data that needs to change in response to user actions, network responses, or other dynamic events.|Props are commonly used to make components reusable and configurable. They allow the same component to be rendered with different data or behavior.|
|Re-rendering:|Updating the state triggers a re-render of the component and its descendants.||
|Analogy:||Think of props as arguments to a function, whereas | state is like variables declared inside the function.|

Summary Table
|Feature	|State	|Props |
|-----------|-------|------|
|Managed by |The component itself|	Parent component |
|Mutable	|Yes	|No (read-only)|
| Scope	|Local to the component	|Passed from parent to child |
| Usage	| Manage dynamic data and UI changes	| Configure and customize component |
| Update |	Using setState/useState |	Cannot be updated by the component |

# 8 What is the difference between HTML and React event handling?
Below are some of the main differences between HTML and React event handling,

In HTML, the event name usually represents in lowercase as a convention:
```
<button onclick="activateLasers()"></button>
Whereas in React it follows camelCase convention:

<button onClick={activateLasers}>
```
In HTML, you can return false to prevent default behavior:
```
<a
  href="#"
  onclick='console.log("The link was clicked."); return false;'
/>
```
Whereas in React you must call preventDefault() explicitly:
```
function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}
```
In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. (refer "activateLasers" function in the first point for example)


# 9 What are inline conditional expressions?
You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.
```
<h1>Hello!</h1>;
{
  messages.length > 0 && !isLogin ? (
    <h2>You have {messages.length} unread messages.</h2>
  ) : (
    <h2>You don't have unread messages.</h2>
  );
}
```
# 10 What is "key" prop and what is the benefit of using it in arrays of elements?
A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.

Keys should be unique among its siblings. Most often we use ID from our data as key:

const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
));
Note:

Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.
If you extract list item as separate component then apply keys on list component instead of li tag.
There will be a warning message in the console if the key prop is not present on list items.
The key attribute accepts either string or number and internally convert it as string type.
Don't generate the key on the fly something like key={Math.random()}. Because the keys will never match up between re-renders and DOM created everytime.

# 11 What is Virtual DOM?

The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

## How Virtual DOM works?
The Virtual DOM works in three simple steps.

- Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
- Then the difference between the previous DOM representation and the new one is calculated.
- Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

## difference between Shadow DOM and Virtual DOM?
- The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. 
- The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

# 12 type of component 
## controlled components?
A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.

The controlled components will be implemented using the below steps,

Initialize the state using useState hooks in function components or inside constructor for class components.
Set the value of the form element to the respective state variable.
Create an event handler to handle the user input changes through useState updater function or setState from class component.
Attach the above event handler to form elements change or click events
For example, the name input field updates the user name using handleChange event handler as below,
```
import React, { useState } from "react";

function UserProfile() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </form>
  );
}
```

## uncontrolled components?
The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

The uncontrolled components will be implemented using the below steps,

Create a ref using useRef react hook in function component or React.createRef() in class based component.
Attach this ref to the form element.
The form element value can be accessed directly through ref in event handlers or componentDidMount for class components
In the below UserProfile component, the username input is accessed using ref.

import React, { useRef } from "react";

function UserProfile() {
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The submitted username is: " + usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

## stateless components?
If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.


## stateful components?
If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.

Let's take an example of function stateful component which update the state based on click event,

import React, {useState} from 'react';

const App = (props) => {
const [count, setCount] = useState(0);
handleIncrement() {
  setCount(count+1);
}

return (
  <>
    <button onClick={handleIncrement}>Increment</button>
    <span>Counter: {count}</span>
  </>
  )
}


# 13 What is Lifting State Up in React?
When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

# 14 How to write comments in React?
The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.
```
Single-line comments:

<div>
  {/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */}
  {`Welcome ${user}, let's play React`}
</div>
Multi-line comments:

<div>
  {/* Multi-line comments for more than
   one line */}
  {`Welcome ${user}, let's play React`}
</div>
```

# 15 What is reconciliation?
Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by Diffing Algorithm. Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

# 16 What are fragments?
It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. You need to use either <Fragment> or a shorter syntax having empty tag (<></>).

Below is the example of how to use fragment inside Story component.

function Story({ title, description, date }) {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </Fragment>
  );
}
It is also possible to render list of fragments inside a loop with the mandatory key attribute supplied.

function StoryBook() {
  return stories.map((story) => (
    <Fragment key={story.id}>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <p>{story.date}</p>
    </Fragment>
  ));
}
Usually, you don't need to use <Fragment> until there is a need of key attribute. The usage of shorter syntax looks like below.

function Story({ title, description, date }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </>
  );
}

## Why fragments are better than container divs?
Below are the list of reasons to prefer fragments over container DOM elements,

Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
The DOM Inspector is less cluttered.




-----------------------------------------------------------
Need to Learn 

# 13 What is the difference between createElement and cloneElement?
JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.


# 11 What is React Fiber?
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

## What is the main goal of React Fiber?
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

from documentation

### Its main goals are:

- Ability to split interruptible work in chunks.
- Ability to prioritize, rebase and reuse work in progress.
- Ability to yield back and forth between parents and children to support layout in React.
- Ability to return multiple elements from render().
- Better support for error boundaries.

# What are Higher-Order Components?
A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.
```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
HOC can be used for many use cases:

- Code reuse, logic and bootstrap abstraction.
- Render hijacking.
- State abstraction and manipulation.
- Props manipulation.

# What is children prop?
Children is a prop that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.

A simple usage of children prop looks as below,

function MyDiv({ children }){
    return (
      <div>
        {children}
      </div>;
    );
}

export default function Greeting() {
  return (
    <MyDiv>
      <span>{"Hello"}</span>
      <span>{"World"}</span>
    </MyDiv>
  );
}
Note: There are several methods available in the legacy React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.

# What are portals in React?
Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up.

ReactDOM.createPortal(child, container);
The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.


