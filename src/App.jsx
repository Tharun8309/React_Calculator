import { useState } from "react"
import "./index.css"
import Numberpad from "./components/Numberpad";
import Heading from "./components/Heading";

function App() {
 const [count, setCount] = useState("0");

  return ( 
    <>
    
   <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    
   <div className="bg-white rounded-2xl shadow-2xl p-6 w-80">
    <Heading/>
   <Numberpad count={count} setCount={setCount} />

   </div>
   </div>

  
    
    
    </>
  )
}

export default App
