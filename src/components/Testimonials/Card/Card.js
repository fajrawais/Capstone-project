import React from "react";
import "./Card.css";


function Card({ name, comment, photo }) {
    return (
      <div className="testimonials-card">
        <div>
        <img src={photo} alt="Testimonial person" />
        </div>
        <div className="testimonials-comment">
          <p>{comment}</p>
        </div>
        <div className="testimonials-name">
          <p>{name}</p>
        </div>
      </div>
    );
  };

  export default Card;