import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import{format} from 'date-fns' 
import './App.css'
import'./clock.css' // import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(0)
//displaying the current date and time using the date-fns
  return (
    <>  
    <p className="date">{format(new Date(), 'dd/MM/yyyy HH:mm:ss')}</p> 
    </>
  )
}

export default App
