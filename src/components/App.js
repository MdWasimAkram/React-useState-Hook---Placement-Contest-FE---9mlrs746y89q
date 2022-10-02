

import '../styles/App.css';
import React, { useState } from 'react';
export default function App() {
  
  


  const [text, settext]= useState("");
  const [inputValue, setInputValue]= useState("");
  const buttononClick=(e)=>{  
  settext(text.concat.inputValue);
    setInputValue("");
  }
  const changeInput=(e)=> {
    setInputValue(e.target.value)
  }
  
  
    return(
    <div>
    <input id= "input" type="text" value= {inputValue} onChange= {handleChange}/>
      < p id='intro'>Concated String</p>
<p id='text'>{text}</p>

   <button id= "button" onClick{buttonClick}>
     Click me
       </button>
 </div>
 );
}
 export default App;
            
       
