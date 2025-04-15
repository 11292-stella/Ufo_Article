import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyBooks from "./components/MyBooks"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyDetails from "./components/MyDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1 container mt-4">
          <Routes>
            <Route path="/" element={<MyBooks />} />
            <Route path="/article/:id" element={<MyDetails />} />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
