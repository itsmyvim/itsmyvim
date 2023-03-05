import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Landing from "./pages/Landing";
import User from "./pages/User";

function App() {
  return (
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/about" element={<About />} />
         <Route path="/docs" element={<Docs />} />
         <Route path=":username" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
