import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Class6 from "./Pages/Class6";
import Class7 from "./Pages/Class7";
import Class8 from "./Pages/Class8";  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class6" element={<Class6 />} />
        <Route path="/class7" element={<Class7 />} />
        <Route path="/class8" element={<Class8 />} />
      </Routes>
    </Router>
  );
}

export default App;
