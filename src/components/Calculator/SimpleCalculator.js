import { useState , useRef } from 'react'; 

export default function SimpleCalculator() { 
const inputRef = useRef(null)
const resultRef = useRef(null)

let [result,setResult] = useState(0);

function handelAdd(e){
    e.preventDefault()
    // result = result+userInput
    setResult((result) => result + Number(inputRef.current.value))
}

function handelSubtract(e){
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
   
}
function handelMultiply(e){
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
   
}
function handelDevide(e){
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
}
function handelResetInput(e){
    e.preventDefault()
    inputRef.current.value = 0
}
function handelResetResult(e){
    e.preventDefault()
    setResult((result) => result * 0)
}


return ( 
    <> 
    <h1>Simple Calculator</h1>
    <p ref={resultRef}>{result}</p>
    <input type="text" ref={inputRef}/>
    <input type="button" value='add' name='add' onClick={handelAdd}/>
    <input type="button" value='subtract' name='subtract' onClick={handelSubtract}/>
    <input type="button" value='multiply' name='multiply' onClick={handelMultiply}/>
    <input type="button" value='devide' name='devide' onClick={handelDevide}/>
    <input type="button" value='reset input' name='reset_input' onClick={handelResetInput}/>
    <input type="button" value='reset result' name='reset_result' onClick={handelResetResult}/>

    </>
)
}