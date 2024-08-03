import React, { useState } from "react";
import "./Bookingform.css"

function BookingForm ( {onClose} ){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [error, setError] = useState("");


    const handleReservation = () => {
        if (firstName && lastName && date && time && guests && occasion) {
          alert("Your reservation has been confirmed!!.Thank you");
          onClose();
        } else {
          setError("Please fill up all the required fields.");
        }
      };

      const handleClick = (e) => {
        e.preventDefault();
        handleReservation(e);
        // navigate("/")
      };

    return(
        <form>
            <div>
                <label htmlFor="first-name">First name:</label>
                <input
                type="text"
                required
                id="first-name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="last-name">Last name:</label>
                <input
                type="text"
                required
                id="last-name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="book-date">Choose a date:</label>
                <input
                type="date"
                id="book-date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="book-time">Choose a time:</label>
                <select
                id="book-time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                >
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                </select>
            </div>

            <div>
            <label htmlFor="book-guests">Number of guests:</label>
            <input
            id="book-guests"
            type="number"
            required
            min="1"
            max="10"
            placeholder="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}/>

            <label htmlFor="book-occasion">Choose an occasion:</label>
            <select
            id="book-occasion"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Buisness</option>
                    <option>Other</option>
            </select>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="submit"
          id="submit"
          value="Reserve your table"
          onClick={handleClick}
        />
        </form>
    );
};

export default BookingForm;