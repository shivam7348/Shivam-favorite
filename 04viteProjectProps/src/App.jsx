import Card from './component/card'
import './App.css'

function App() {
 
  return (
    <> 
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="Chaiaurcode" buttonname="Read Now" />
    <Card username="Arvind Singh tutorial"  buttonname="ClickMe" />
    <Card username="Vanshika Singh" buttonname="Hello Sir"/>
    </>
   
  )
  }

export default App
