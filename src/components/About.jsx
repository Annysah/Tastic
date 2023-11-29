import React from "react";
import aboutImage from "../assets/about.avif";

const About = () => {
  return (
    <div className="about">
      <div className="about-history">
        <h2>Our History</h2>
        <p>
          Founded with a passion for culinary excellence, Tastic
          has been a beacon of taste and innovation since 2005. Our story begins with a commitment to delivering
          exceptional dining experiences to our patrons.
          <br /><br />
          Over the years, we've evolved and grown, expanding our menu to reflect
          the diverse and dynamic world of flavors. Each dish is a testament to
          the craftsmanship of our chefs and the quality of ingredients we use.
          <br /><br />
          Tastic has become a beloved destination for food
          enthusiasts, families, and friends. We take pride in our rich history,
          marked by milestones, awards, and, most importantly, the smiles of
          satisfied customers.
          <br /><br />
          As we continue our journey, we remain dedicated to providing memorable
          dining experiences, innovative cuisine, and a welcoming atmosphere.
          Join us in celebrating the moments that have shaped us, and let's
          create many more together.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
