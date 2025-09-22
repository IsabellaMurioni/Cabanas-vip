import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cabanas from '../pages/Cabanas'
import Reserva from '../pages/Reserva'
import Servicios from '../pages/Servicios'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Cabanas" element={<Cabanas />} />
      <Route path="/Reserva" element={<Reserva />} />
      <Route path="/Servicios" element={<Servicios />} />
    </Routes>
  )
}

export default App






