import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Class6 from "./Class6";
import Success from "./success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class6" element={<Class6 />} />
        <Route path="/success" element={<Success />} />  {/* <-- add this */}
      </Routes>
    </Router>
  );
}

export default App;
