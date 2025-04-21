# IMP Commands
```

 npm init react-app customizing-example # to create customizing-example react app  
 npm start # to run react app  
``` 

# Why use the className attribute in the JSX syntax?

- with JSX, it looks like HTML so much that it's easy to forget that it's actually JavaScript code - not HTML.
-  While regular HTML does indeed have a class attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. 
- The reason is that JSX is a special kind of JavaScript syntax, and the word class is a reserved keyword in JSX. That's why the React team had to make a compromise and so className is used in JSX to list one or more CSS classes to be used on a given element or component.

# transpiler 
to break JSX code to plain JavaScript, making its purpose more understandable.

# React.createElement("h1", null, "Hello there"); 
- This means that the createElement function receives three arguments:
The wrapping element to render. 
- A null value (which is there to show an absence of an expected JavaScript object value). 
The inner content that will go inside the wrapping element. 
- Interestingly, the inner content that will go inside the wrapping element can also be a call to the createElement function.

#  arrow functions 
- is the implicit return.
```
const Nav = () => <ul><li>Home</li></ul>
[10, 20, 30].forEach(item => item * 10)
```
- The arrow function has a single parameter, so you do not need to add parentheses around the item parameter (to the left of the arrow) 
- Since the arrow function fits on one line of code, you don’t need to use curly braces around the function body, or the return keyword; it's implicit 
- Arrow functions are used extensively in JSX in React, and getting used to their syntax and being able to "mentally parse" it as you read it is an important skill to have and helps you get better at writing React apps.

# function declaration, or as a function expression.
```
arrow Function:
const getRandomNum = () => Math.floor(Math.random() * 10) + 1

Function expression:
const getRandomNum = function() {
    return Math.floor(Math.random() * 10) + 1
} ;

Function declaration:
function getRandomNum() {
    return Math.floor(Math.random() *10) + 1
};
```