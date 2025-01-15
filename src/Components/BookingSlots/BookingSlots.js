import React, { useState, useEffect } from "react";
import "./BookingSlots.css"; // Add your styles here
import { Container } from "react-bootstrap";

const BookingSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const dates = [
    { day: "MON", date: 20 },
    { day: "TUE", date: 21 },
    { day: "WED", date: 23 },
    { day: "THU", date: 24 },
    { day: "FRI", date: 25 },
    { day: "SAT", date: 26 },
  ];

  const timeSlots = [
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
  ];

  // Detect small devices
  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {isSmallDevice ? (
        /* Part 2: Dropdown form for small devices */
        <div className="container my-5">
          <h2 className="text-center mb-4">Booking Slots</h2>

          <div className="mb-3">
            <label htmlFor="date-select" className="form-label">
              Select Date
            </label>
            <select
              id="date-select"
              className="form-select"
              value={selectedDate || ""}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="" disabled>
                Choose a date
              </option>
              {dates.map(({ day, date }) => (
                <option key={date} value={date}>
                  {day}, {date}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="time-select" className="form-label">
              Select Time
            </label>
            <select
              id="time-select"
              className="form-select"
              value={selectedTime || ""}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="" disabled>
                Choose a time
              </option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary px-4 py-2"
              disabled={!selectedDate || !selectedTime}
            
            >
              Book an Appointment
            </button>
          </div>
        </div>
      ) : (
        /* Part 1: Button-based layout for larger devices */
        <div className="booking-slots">
          <h4 style={{ marginTop: "50px" }}>Booking Slots</h4>
          {/* Dates */}
          <div className="dates">
            {dates.map(({ day, date }) => (
              <button
                key={date}
                className={`date ${selectedDate === date ? "selected" : ""}`}
                onClick={() => setSelectedDate(date)}
              >
                <span>{day}</span> <br />
                <span>{date}</span>
              </button>
            ))}
          </div>
          {/* Time Slots */}
          <div className="time-slots">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`time ${selectedTime === time ? "selected" : ""}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          {/* Submit Button */}
          <button
            className="book-appointment"
            disabled={!selectedDate || !selectedTime}
            onClick={() =>
              alert(`Appointment booked on ${selectedDate} at ${selectedTime}`)
            }
          >
            Book an Appointment
          </button>
        </div>
      )}
    </Container>
  );
};

export default BookingSlots;
