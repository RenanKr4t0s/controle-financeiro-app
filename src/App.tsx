import { useState } from "react"

//react router dom
import { BrowserRouter, Routes, Route} from "react-router-dom"

//template components
import Footer from "./components/templateComponents/Footer"
import Header from "./components/templateComponents/Header"
import Sidebar from "./components/templateComponents/Sidebar"

//pages
import Home from "./pages/Home"

function App() {
  const [dark, setDark] = useState(true)


  return (
    <BrowserRouter>
      <div className={`${dark&&"dark"} flex flex-col h-screen`} >
        <div className="bg-white dark:bg-zinc-900 flex flex-col flex-1 px-36 pt-1">
          <Header state={dark} setState={setDark} />
          <div className="flex-1 flex">
            <Sidebar />
            <div className="flex-1 bg-white dark:bg-zinc-800 rounded-3xl">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
              </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App