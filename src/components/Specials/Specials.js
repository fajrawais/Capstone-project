import React from "react";
import SpecialsCard from "./Specials Card/SpecialCard";
import "./Specials.css";
import lemoncake from "../../images/lemoncake.jpg";
import greekSalad from "../../images/greekSalad.jpg";
import bruschetta from "../../images/bruschetta.jpg";

function Specials() {
  return (
    <div id="specials" className="specials-bg">
      <div className="container">
        <div className="specials">
          <h2> This week's specials:</h2>
          <div className="specials-grid">
            <SpecialsCard
              photo={lemoncake}
              food="Lemon Cake"
              price="$5.99"
              description="A moist and tangy dessert made with fresh lemons, topped with a sweet lemon glaze. Perfectly balanced for a refreshing end to your meal."
            />
            <SpecialsCard
              photo={greekSalad}
              food="Greek Salad"
              price="$8.99"
              description="Our Greek Salad is a refreshing and flavorful mix of crisp lettuce, ripe tomatoes, cucumbers, red onions, and Kalamata olives, all tossed in a tangy vinaigrette. Topped with creamy feta cheese!"
            />
            <SpecialsCard
              photo={bruschetta}
              food="Bruschetta"
              price="$9.99"
              description="A classic Italian appetizer featuring toasted bread topped with a flavorful mixture of ripe tomatoes, fresh basil, garlic, and a drizzle of balsamic reduction. A delightful start to any meal."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Specials;

