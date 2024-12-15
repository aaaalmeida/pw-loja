import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FrontPage from "./components/FrontPage"
import FAQ from "./components/FAQ"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App