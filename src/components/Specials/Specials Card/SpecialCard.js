import React from "react";
import "./SpecialsCard.css";


function SpecialsCard({ description, price, photo,food}) {
    return (
      <div className="specials-card">
        <div className="card-img">
        <img src={photo} alt="food picture" />
        </div>
        <div className="specials-name-price">
            <h3>{food}</h3>
            <h4 className="price">{price}</h4>
        </div>
        <div className="specials-description">
          <p>{description}</p>
        </div>
      </div>
    );
  };

  export default SpecialsCard;