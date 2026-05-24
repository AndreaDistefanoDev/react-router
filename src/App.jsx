import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import About from "./pages/AboutUs"
import Layout from "./layout/Layout"
import SingleProduct from "./pages/SingleProduct"

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
