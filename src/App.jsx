import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home             from './Home.jsx'
import Booking          from './Booking.jsx'
import BookingConfirmed from './BookingConfirmed.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/booking"           element={<Booking />} />
        <Route path="/booking-confirmed" element={<BookingConfirmed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App