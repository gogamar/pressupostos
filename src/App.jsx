import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ModalProvider } from './contexts/ModalContext.jsx'

import Welcome from './pages/Welcome.jsx'
import ServiceCalculator from './pages/ServiceCalculator.jsx'
import Header from './components/Header'

import './App.css'

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="container mx-auto py-6 mb-8">
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/calculadora" element={<ServiceCalculator />} />
          </Routes>
        </div>
      </ModalProvider>
    </Router>
  )
}

export default App
