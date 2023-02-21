import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import User from "./pages/User";

function App() {
  return (
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Landing />} />
         <Route path=":username" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
