
import {useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(15)
 

   const addValue = () => {
    console.log("clicked  counter + 1")
    setCounter( counter + 1  )
   }
  const removeValue = () => {
    setCounter(counter -1)
  }
   
  return (
    <>
    
     <h2> Counter Value:{counter}</h2>
     <button onClick={addValue}>UpdateMe {counter}</button>
     <br />
      <button onClick={removeValue}>RemoveValue</button>
     <p>{counter}</p>
    </>
     
  )
}

export default App