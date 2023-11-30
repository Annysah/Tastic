import React from "react";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";

import "./Services.css";

const Offers = () => {
  return (
    <>
      <div className="services" id="services">
        <div>
          <h2>Our Services</h2>

          <ul className="grid">
            <li>
              <div className="services-card">
                <div>
                  <img className="icon" src={offer1} alt="icon" />
                </div>

                <h3>Personalized Dining</h3>

                <p>Indulge in a personalized dining experience.</p>
              </div>
            </li>

            <li>
              <div className="services-card">
                <div>
                  <img className="icon" src={offer2} alt="icon" />
                </div>

                <h3>Private Events</h3>

                <p>Host memorable private events with us.</p>
              </div>
            </li>

            <li>
              <div className="services-card">
                <div>
                  <img className="icon" src={offer3} alt="icon" />
                </div>

                <h3>Catering Excellence</h3>

                <p>Bring the flavors of Tastic to your special occasions.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offers;
