import React, { useState } from "react";
import BookingForm from "../Booking/BookingForm";
import "./MainSection.css";
import restauranfood from "../../images/restauranfood.jpg";


function Main () {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleClose = () => {
    setShowBookingForm(false);
  };

  const handleButtonClick = () => {
    setShowBookingForm(true);
  };

  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
            <button  aria-label="Reserve table" onClick={handleButtonClick}>Reserve Table</button>
        </div>
        <div className="banner-img">
          <img src={restauranfood} alt="restaurant food" />
        </div>
      </section>
      {showBookingForm && <BookingForm onClose={handleClose} />}
    </header>
  );
};

export default Main;

