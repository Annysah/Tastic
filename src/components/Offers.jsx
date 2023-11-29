import React from "react";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";

const Offers = () => {
  return (
    <>
      <section className="section offers text-center">
        <div className="container">
          <h2>What We Offer</h2>

          <ul className="grid">
            <li className="offer-item">
              <div className="offer-card">
                <div className="card-icon">
                  <img src={offer1} alt="icon" />
                </div>

                <h3 className="card-title">Personalized Dining</h3>

                <p className="card-text">
                  Indulge in a personalized dining experience.
                </p>
              </div>
            </li>

            <li className="offer-item">
              <div className="offer-card">
                <div className="card-icon">
                  <img src={offer2} alt="icon" />
                </div>

                <h3 className="card-title">Private Events</h3>

                <p className="card-text">
                  Host memorable private events with us.
                </p>
              </div>
            </li>

            <li className="offer-item">
              <div className="offer-card">
                <div className="card-icon">
                  <img src={offer3} alt="icon" />
                </div>

                <h3 className="card-title">Catering Excellence</h3>

                <p className="card-text">
                  Bring the flavors of Tastic to your special occasions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Offers;
