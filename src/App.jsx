import ServiceCalculator from "./components/ServiceCalculator";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="container mx-auto py-6 mb-8">
      <Header />
      <ServiceCalculator />
    </div>
  );
}

export default App;
