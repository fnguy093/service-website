import { useNavigate } from 'react-router-dom'
import './booking-confirmed.css'

function BookingConfirmed() {
  const navigate = useNavigate()

  return (
    <div className="confirmation">
      <span className="material-symbols-outlined icon-success">check_circle</span>
      <h1>YOUR APPOINTMENT HAS BEEN CONFIRMED</h1>
      <button className="home-button" onClick={() => navigate('/')}>HOME</button>
    </div>
  )
}

export default BookingConfirmed