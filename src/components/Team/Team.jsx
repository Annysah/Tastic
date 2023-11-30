import React from "react";
import chef from "../../assets/chef.avif";

import './Team.css'

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="team-banner">
          <img src={chef} alt="Chef" className="team-image" />
        </div>

        <div className="team-content">
          <div className="container">
            <h2>Our Mantra</h2>

            <div className="chef-content">
              <div className="chef-quote">
                <p>
                  Our team is dedicated to crafting culinary masterpieces with
                  passion and precision. From the kitchen to the dining room, we
                  strive for excellence in every detail. We embrace diversity,
                  celebrate creativity, and cherish the moments that make dining
                  with us an unforgettable journey.
                </p>
                <p>
                  Together, we create a welcoming haven where culinary artistry
                  meets heartfelt service. Join us in savoring the essence of
                  good food, good company, and the shared love for the
                  extraordinary. This is more than a restaurant; it's a
                  celebration of the art of dining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
