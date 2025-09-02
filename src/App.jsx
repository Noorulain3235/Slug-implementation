
import {Routes, Route } from "react-router-dom"
import Product from "./container/product/index"
import Home from "./component/home"


function App() {
 

  return (
    <>
      <div>
        
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<Product />} />
       </Routes>
      </div>
     
      
    </>
  )
}

export default App;
