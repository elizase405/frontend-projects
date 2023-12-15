import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Forecast from "./pages/Forecast"
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App