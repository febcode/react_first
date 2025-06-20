# component composition
There are two main features that enable component composition; 
1. containment : Containment refers to the fact that some components don't know their children ahead of time. This is especially common for components like a sidebar or a dialog, where they delimit a specific area in your UI to contain other elements. You can think of them also as generic boxes.
2. specialization. 
Let's break down these two main features now starting with containment. Containment refers to the fact that some components don't know their children ahead of time. This is especially common for components like a sidebar or a dialog, where they delimit a specific area in your UI to contain other elements. You can think of them also as generic boxes. In case you don't know, a dialog is a type of modal window where the rest of the UI is disabled until the modal is addressed and interacted with. For these component boxes, the recommended approach is to use the children prop to pass children elements directly as their content.

# Types of Children
In JSX expressions, the content between an opening and closing tag is passed as a unique prop called children. There are several ways to pass children, such as rendering string literals or using JSX elements and JavaScript expressions. It is also essential to understand the types of JavaScript values that are ignored as children and don’t render anything. Let’s explore these in a bit more detail:

String literals
String literals refer to simple JavaScript strings. They can be put between the opening and closing tags, and the children prop will be that string.

<MyComponent>Little Lemon</MyComponent>

In the above example, the children prop in MyComponent will be simply the string “Little Lemon”. 

There are also some rules JSX follows regarding whitespaces and blank lines you need to bear in mind, so that you understand what to expect on your screen when those edge cases occur.

1. JSX removes whitespaces at the beginning and end of a line, as well as blank lines:
2. New lines adjacent to tags are removed:
3. JSX condenses new lines that happen in the middle of string literals into a single space:
4. You can provide JSX elements as children to display nested components:

## React Fragments 
A React component can also return a bunch of elements without wrapping them in an extra tag. For that, you can use React Fragments either using the explicit component imported from React or empty tags, which is a shorter syntax for a fragment. A React Fragment component lets you group a list of children without adding extra nodes to the DOM. You can learn more about fragments in the additional resources unit from this lesson.

The two code examples below are equivalent, and it’s up to your personal preference what to choose, depending on whether you prefer explicitness or a shorter syntax:

```
return (
  <React.Fragment>
    <li>Pizza margarita</li>
    <li>Pizza diavola</li>
  </React.Fragment>
);

return (
  <>
    <li>Pizza margarita</li>
    <li>Pizza diavola</li>
  </>
);
```

# Higher-order components
In a previous lesson, you learned about higher-order components (HOC) as a pattern to abstract shared behavior, and a basic example of an implementation.

Let's investigate some of the best practices and caveats when it comes to this construct.

These include:

Never mutating a component inside a HOC

Always passing unrelated props to your wrapped component

Maximizing composability by leveraging the Component => Component signature.

Don’t mutate the original component

One of the possible temptations is to modify the component that is provided as an argument, or in other words, mutate it. That's because JavaScript allows you to perform such operations, and in some cases, it seems the most straightforward and quickest path. Remember that React promotes immutability in all scenarios. So, instead, use composition and turn the HOC into a pure function that does not alter the argument it receives, always returning a new component.

```
const HOC = (WrappedComponent) => {
  // Don't do this and mutate the original component
  WrappedComponent = () => {
    
  }; 
 …
}
```
Pass unrelated props through to the Wrapped Component

HOC adds features to a component. In other words, it enhances it. That's why they shouldn't drastically alter their original contract. Instead, the component returned from an HOC is expected to have an interface similar to that of the wrapped component.

HOCs should spread and pass through all the props that are unrelated to their specific concern, helping ensure that HOCs are as flexible and reusable as possible, as demonstrated in the example below:

```
const withMousePosition = (WrappedComponent) => {
  const injectedProp = {mousePosition: {x: 10, y: 10}};

  return (originalProps) => {
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```
Maximize composability

So far, you have learned that the primary signature of a HOC is a function that accepts a React component and returns a new component.

Sometimes, HOCs can accept additional arguments that act as extra configuration determining the type of enhancement the component receives.

1
const EnhancedComponent = HOC(WrappedComponent, config)
The most common signature for HOCs uses a functional programming pattern called "currying" to maximize function composition. This signature is used extensively in React libraries, such as 
React Redux
, a popular library for managing state in React applications. 

1
const EnhancedComponent = connect(selector, actions)(WrappedComponent);
This syntax may seem strange initially, but it would be easier to understand if you broke down what's happening separately.

12
const HOC = connect(selector, actions);
const EnhancedComponent = HOC(WrappedComponent);
connect is a function that returns a higher-order component, presenting a valuable property for composing several HOCs together.

Single-argument HOCs like the ones you have explored so far, or the one returned by the connect function, have the signature Component => Component. Functions whose output type is the same as their input type are really easy to compose together.

123456789
const enhance = compose(
  // These are both single-argument HOCs
  withMousePosition,
  withURLLocation,
  connect(selector)
);

// Enhance is a HOC
const EnhancedComponent = enhance(WrappedComponent);
Many third-party libraries already provide an implementation of the compose utility function, like 
lodash
, 
Redux
, and 
Ramda
. Its signature is as follows:

compose(f, g, h) is the same as (...args) => f(g(h(...args)))

Caveats

Higher-order components come with a few caveats that aren’t immediately obvious.

Don't use HOCs inside other components: always create your enhanced components outside any component scope. Otherwise, if you do so inside the body of other components and a re-render occurs, the enhanced component will be different. That forces React to remount it instead of just updating it, causing the component and its children to lose their previous state. 

1234567891011
const Component = (props) => {
  // This is wrong. Never do this
  const EnhancedComponent = HOC(WrappedComponent);
  return <EnhancedComponent />;
};

// This is the correct way
const EnhancedComponent = HOC(WrappedComponent);
const Component = (props) => {
  return <EnhancedComponent />;

Refs aren’t passed through: since React refs are not props, they are handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component. To solve this, you can use the 
React.forwardRef API
. You can learn more about this API and its use cases in the additional resources section of this lesson.

Conclusion

In summary, you have examined higher-order components in more detail. The main takeaways are never mutating a component inside a HOC and passing unrelated props to your wrapped component. 

You also learned how to maximize composability by leveraging the Component => Component signature and addressed some caveats about HOC.

