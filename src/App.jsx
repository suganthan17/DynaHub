import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home          from "./pages/Home"
import Games         from "./pages/Games"
import Software      from "./pages/Software"
import Streaming     from "./pages/Streaming"
import Tools         from "./pages/Tools"



export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/games"         element={<Games />} />
          <Route path="/software"      element={<Software />} />
          <Route path="/streaming"     element={<Streaming />} />
          <Route path="/tools"         element={<Tools />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}