import { BrowserRouter, useSearchParams } from "react-router-dom"
import Home from "./pages/Home"
import ImagePage from "./pages/ImagePage"

function AppContent() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")

  if (id) {
    return <ImagePage id={id} />
  }

  return <Home />
}

export default function App() {
  return (
    <BrowserRouter basename="/anime-jerseys-web">
      <AppContent />
    </BrowserRouter>
  )
}
