import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyBooks from "./components/MyBooks"

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1 container mt-4">
          <MyBooks />
        </main>
        <MyFooter />
      </div>
    </>
  )
}

export default App
