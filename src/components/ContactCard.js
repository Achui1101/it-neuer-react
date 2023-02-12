import React, { useRef, useEffect } from "react";
import "./ContactCard.css";

const ContactCard = (props) => {

  return (
    <div className="main-div">
      <div class="cardBC">
        <div class="card-side front">
          <div className="flex">
            <div>
              <h1>Christian Eiteneuer</h1>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div class="card-side back">
          <div className="flex-row">
            <div className="flex">
              <p>Bentheimerstraße 10, 45145 Essen</p>
              <a href="tel:0152 086 496 66">0152 086 496 66</a>
              <a href="mailto:christian@it-neuer.de">christian@it-neuer.de</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;