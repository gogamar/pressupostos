import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import ServiceCalculator from "./components/ServiceCalculator";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mx-auto py-6 mb-8">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/calculadora" element={<ServiceCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
