import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ImagePage from "./pages/ImagePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anime-jerseys-web/" element={<Home />} />
        <Route path="/anime-jerseys-web/:id" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  )
}
