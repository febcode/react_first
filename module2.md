# different ways to embed expressions in event handlers in React:

1. With an inline anonymous ES5 function 
```
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

2. With an inline, anonymous ES6 function (an arrow function) 
```
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

3. Using a separate function declaration 
```
function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
export default App;
```

4. Using a separate function expression 
```
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
  );
};
export default App;
```

# Parent-child data flow
- In React, data flow is a one-way street. Sometimes it's said that the data flow is unidirectional. 
- Put differently, the data in React flows from a parent component to a child component. The data flow starts at the root and can flow to multiple levels of nesting, from the root component (parent component) to the child component, then the grandchild component, and further down the hierarchy.
- A React app consists of many components, organized as a component tree. The data flows from the root component to all the  components in the tree structure that require this data, using props.
- Props are immutable (cannot be changed).
- The two main benefits of this unidirectional data flow are that it allows developers to:
1. comprehend the logic of React apps more quickly and 
2. simplify the data flow. 


# hooks rules.
- key benefit of hooks is that they solve the problem of unnecessary code reuse across components
- You can only call hooks at the top level of your component or your own hooks. 
- You cannot call hooks inside loops or conditions. 
- You can only call hooks from React functions, and not regular JavaScript functions. 
- useState hook, useContext, useMemo, useRef, etc. 
- When you need to share logic and reuse the same logic across several components, you can extract the logic into a custom hook. Custom hooks offer flexibility and can be used for a wide range of use-cases such as form handling, animation, timers, and many more. 

## useState
- You can add state and use the useState hook, to hold the string.
- eg 
    ```
        const[inputText, setText] = useState('hello');

        function handleChange(e) {
        setText(e.target.value);
    };
    ```

    - The state variable inputText and the setText method are used to set the current text that is typed. The useState hook is initialized at the beginning of the component.
    
    - By default, the inputText will be set to “hello”.
    - As the user types, the handleChange function, reads the latest input value from the browser’s input DOM element, and calls the setText function, to update the local state of inputText.
    - Finally, clicking the reset button will update the inputText back to “hello”. 
    - Keep in mind that the inputText here is local state and is local to the InputComponent. This means that outside of this component, inputText is unavailable and unknown. In React, state is always referred to the local state of a component.

## useRef hook
- We use the useRef hook to access a child element directly.
- When you invoke the useRef hook, it will return a ref object. The ref object has a property named current.
Eg
```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
- Using the ref attribute on the input element, we can then access the current value and invoke the focus() method on it, thereby focusing the input field.
- There are situations where accessing the DOM directly is needed, and this is where the useRef hook comes into play.
    

## useMemo
{a: ‘hi’, b: ‘bye’} !== {a: ‘hi’, b: ‘bye’}
To understand what’s happening, you need to remember that in JavaScript, the below assertion is true:

That is because object comparison in JavaScript is done by reference. Every time a new re-render happens in the App component, a new instance of the value object is created, resulting in the provider performing a comparison against its previous value and determining that it has changed, hence informing all context consumers that they should re-render.

```
const App = () => {
const a = 'hi';
const b = 'bye';
const value = useMemo(() => ({a, b}), [a, b]);

  return (
 <AppContext.Provider value={value}>
 <ComponentA />
 </AppContext.Provider>
 );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
const contextValue = useContext(AppContext);
 return null;
};
```

it suffices to say that useMemo will memoize the returned value from the function passed as the first argument and will only re-run the computation if any of the values are passed into the array as a second argument change.

# states
- Recall the props is a feature of React that essentially allows you to hold information about the UI in the browser. In React, you also have another way to do this by using a similar concept called States, which also allows you to easily change how the component behaves in order to suit a given need.
- States is important because it allows components to stay in sync with each other and ensure that your app behaves as intended, for example, if one component updates its State, all other components that depend on that State will automatically update too.
- State is a powerful tool in Reacts that developers use to manage data that is likely to change in an application. Recall that the state data is internal to the component itself. This allows the components to re-render based on the changes in the states data and present the newest updates to the user.

# context API 
- can be used to manage state more efficiently across multiple levels of components. You'll also be able to perform basic states management using the useContext and a useReducer hooks found in context API. 
- using the context API is like teleporting to your destination instantly. It's a way to bypass the redundant passing of data through multiple levels of components. 
- To set it up, you need to add a piece of code that will be your context provider. It's also where the state will be stored. 
-  1. React.createContext function. 
    2. Next, I declare the today's meals array, 
    3. MealsContexts.Provider JSX elements. 
-  This is the usefulness of having a centralized state store. It allows me to simply reach into the states provider directly from whatever components needed without having to do prop drilling or lifting upstate.

# useReducer hook 

# The distinction between stateful and stateless components 
- is that a stateful component holds states as internal data and its state changes based on the way that the app is built; often as a result of user actions. 
- A stateless component however, doesn't store states and any changes must be inherited through props. 
    
- When deciding if a component should be stateless or stateful, you can refer to the following rules.
-  Use stateless components when your component doesn't need to maintain its own state in order to work. 
- Use stateful components when your component does need to maintain its own state in order to work. 

- have a stateful component as the parent which then sends its states down to several stateless components that then receive the state and render it on the screen. 
- The children components are stateless because they don't have their own state and only receive their parent state when passed down by using props.
-  you should never change the values of props in children components as they are immutable. 
-  a prop doesn't always have to pass state. 
- In addition to state, JavaScript values and functions can also be passed to the child component. It's still data but it's props data rather than state data. 