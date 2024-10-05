import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import EmpezarExamen from "./EmpezarExamen";
import FormularioExamen from "./FormularioExamen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmpezarExamen />} />
        <Route path="/formulario" element={<FormularioExamen />} />
      </Routes>
    </Router>
  );
}

export default App;
