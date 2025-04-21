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