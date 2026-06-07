import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './booking.css'

const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December']

const TIMES = ['9:00 AM','9:30 AM','10:30 AM','11:00 AM','11:30 AM','2:00 PM','3:30 PM','4:00 PM']

const SERVICES = [
  { cls: 'cut-and-style', name: 'Cut & style', duration: '60 min', price: '$85'  },
  { cls: 'colour',        name: 'Colour',       duration: '90 min', price: '$140' },
  { cls: 'balayage',      name: 'Balayage',     duration: '150 min', price: '$210' },
  { cls: 'treatment',     name: 'Treatment',    duration: '90 min', price: '$120' },
]

function buildCalendarDays(currentMonth, currentYear, selectedDay) {
  const today = new Date()
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const daysInPrev  = new Date(currentYear, currentMonth, 0).getDate()
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push({ num: daysInPrev - firstDay + 1 + i, type: 'other' })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday    = d === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
    const isSelected = d === selectedDay
    days.push({ num: d, type: 'current', isToday, isSelected })
  }
  const trailing = (firstDay + daysInMonth) % 7
  if (trailing > 0) {
    for (let i = 1; i <= 7 - trailing; i++) {
      days.push({ num: i, type: 'other' })
    }
  }
  return days
}

function Booking() {
  const navigate = useNavigate()
  
  // 1. Added State to track the selected service (Defaults to 'cut-and-style')
  const [selectedService, setSelectedService] = useState('cut-and-style')
  const [currentMonth, setCurrentMonth] = useState(8)
  const [currentYear,  setCurrentYear]  = useState(2025)
  const [selectedDay,  setSelectedDay]  = useState(10)
  const [selectedTime, setSelectedTime] = useState('11:30 AM')

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1) }
    else setCurrentMonth(m => m - 1)
    setSelectedDay(1)
  }

  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1) }
    else setCurrentMonth(m => m + 1)
    setSelectedDay(1)
  }

  const days = buildCalendarDays(currentMonth, currentYear, selectedDay)

  return (
    <>
      <header className="page-header">
        <p className="top">PRIVATE APPOINTMENT</p>
        <h1>Reserve Your Visit</h1>
        <p>Select a service, choose your time, and leave the rest to us</p>
      </header>

      <main className="booking-wrap">
        <section className="left-side">

          <div className="select-service"><span>SELECT A SERVICE</span></div>

          <div className="services-list">
            {SERVICES.map(svc => {
              // 2. Compute dynamic class names to inject the 'selected' modifier
              const isSelected = selectedService === svc.cls
              const itemClassName = `${svc.cls}${isSelected ? ' selected' : ''}`

              return (
                <div 
                  key={svc.cls} 
                  className={itemClassName}
                  onClick={() => setSelectedService(svc.cls)} // 3. Update active item state on click
                >
                  <div className="service-details">
                    <h2 className={`${svc.cls}-name`}>{svc.name}</h2>
                    <span className={`${svc.cls}-meta`}>{svc.duration}</span>
                  </div>
                  <div className={`${svc.cls}-price`}>{svc.price}</div>
                </div>
              )
            })}
          </div>

          <div className="pick-date"><span>PICK A TIME AND DATE</span></div>

          <div className="datetime-picker-layout">
            <div className="calendar-container">
              <div className="cal-head">
                <button className="cal-nav" onClick={prevMonth}>&#8249;</button>
                <div className="cal-month-year">{MONTHS[currentMonth]} {currentYear}</div>
                <button className="cal-nav" onClick={nextMonth}>&#8250;</button>
              </div>
              <div className="cal-grid">
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                  <div key={d} className="cal-dow">{d}</div>
                ))}
                {days.map((day, i) => {
                  let cls = 'cal-day'
                  if (day.type === 'other') cls += ' other'
                  if (day.isSelected)       cls += ' selected'
                  else if (day.isToday)     cls += ' today'
                  return (
                    <div
                      key={i}
                      className={cls}
                      onClick={() => day.type === 'current' && setSelectedDay(day.num)}
                    >
                      {day.num}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="time-slots-container">
              <div className="time-headline">Available times</div>
              <div className="time-list">
                {TIMES.map(t => (
                  <div
                    key={t}
                    className={`time-slot${selectedTime === t ? ' selected' : ''}`}
                    onClick={() => setSelectedTime(t)}
                  >
                    <span>{t}</span>
                    <span className="avail">Available</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="right-side">
          <div className="enter-details"><span>ENTER YOUR DETAILS</span></div>

          <form className="details-form" onSubmit={e => { e.preventDefault(); navigate('/booking-confirmed') }}>
            <div className="field-row">
              <div className="first-name">
                <label>FIRST NAME</label>
                <input type="text" required />
              </div>
              <div className="last-name">
                <label>LAST NAME</label>
                <input type="text" required />
              </div>
            </div>
            <div className="email">
              <label>EMAIL</label>
              <input type="email" required />
            </div>
            <div className="phone-number">
              <label>PHONE NUMBER</label>
              <input type="tel" required />
            </div>
            <div className="notes">
              <label>NOTES FOR STYLIST</label>
              <textarea></textarea>
            </div>
            <button type="submit" className="submit-button">REQUEST APPOINTMENT</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Booking