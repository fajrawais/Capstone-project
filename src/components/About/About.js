import React from "react";
import restaurant from "../../images/restaurant.jpg";
import "./About.css";

function About() {
    return (
      <div className="container">
        <div id="about" className="about">
          <div className="about-grid">
            <div className="about-left">
              <h2>About Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
              Nestled in the heart of the city, Little Lemon is a family-owned Mediterranean restaurant
               that brings the vibrant flavors and rich culinary traditions of the Mediterranean to your 
               table. Our passion for fresh ingredients and authentic recipes is reflected in every dish 
               we serve. From our crisp, refreshing salads to our hearty, flavor-packed entrees, we offer
               a diverse menu that caters to all tastes and preferences.{" "}
              </p>
            </div>
            <div className="about-right">
              <img src={restaurant} alt="Little Lemon Restaurant" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default About;