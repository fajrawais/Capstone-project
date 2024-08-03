import React from "react";
import "./Testimonials.css";
import Card from "./Card/Card";
import profilepic1 from "../../images/profilepic1.jpg";
import profilepics2 from "../../images/profilepics2.jpg";
import profilepic3 from "../../images/profilepic3.jpg";
import profilepic4 from "../../images/profilepic4.jpg";

function Testimonials() {
    return (
      <div id="testimonials" className="testimonials-bg">
        <div className="container">
          <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-grid">
              <Card
                name="- Emily R"
                comment={"Little Lemon is my go-to spot for a delicious Mediterranean meal. The atmosphere is cozy and inviting, and the staff always makes me feel like family. The Lemon Cake is a must-try—so moist and tangy!"}
                photo={profilepics2}
              />
              <Card
                name="- David L"
                comment={
                  " Can't get enough of the food at Little Lemon. The flavors are authentic, and everything tastes so fresh. The Bruschetta is the best I've ever had. Perfect for a light starter before diving into their amazing entrees."
                }
                photo={profilepic1}
              />
              <Card
                name="- Sarah M"
                comment={
                  "Dining at Little Lemon is always a delightful experience. The Greek Salad is my favorite—it’s fresh and bursting with flavors. The ambiance is perfect for both casual lunches and intimate dinners."
                }
                photo={profilepic3}
              />
              <Card
                name="- John P"
                comment={
                  "Little Lemon never disappoints. The staff is friendly, and the service is top-notch. I highly recommend the Lemon Cake for dessert—it's the perfect way to end a fantastic meal. Will definitely be coming back!."
                }
                photo={profilepic4}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Testimonials;