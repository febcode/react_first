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