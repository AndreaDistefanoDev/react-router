import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import About from "./pages/AboutUs"
import Layout from "./layout/Layout"
import SingleProduct from "./pages/SingleProduct"
import NotFound from "./pages/NotFound"
import BudgetContext from "./context/BudgetContext"
import { useState } from "react"

function App() {

  const [budgetMode, setBudgetMode] = useState(false)

  function toggleBudgetMode() {
    setBudgetMode(!budgetMode)
  }


  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode, toggleBudgetMode }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>

    </>
  )
}

export default App
