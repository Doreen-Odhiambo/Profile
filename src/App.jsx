import { useState } from 'react'
import About from "./components/About"
import Footer from "./components/Footer"
import Infosection from "./components/Infosection"
import Interest from './components/Interest'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Infosection />
      <About/>
      <Interest />
      <Footer />
      
    </div>
  )
}

export default App
