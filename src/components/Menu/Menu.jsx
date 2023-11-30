import React from "react";
import './Menu.css'

const Menu = () => {
  return (
    <>
      <div className="menu" id="menu">
        <div className="menu-title">
          <h2>Our Unique Menu</h2>
        </div>

        <ul className="grid menu-grid">
          <div>
            <li>
              <div className="menu-card">
                <div>
                  <div className="title-wrapper">
                    <h3>
                      <a href="#" className="card-title">
                        Shrimp Linguine
                      </a>
                    </h3>
                    <span className="span">$75.00</span>
                  </div>

                  <p className="card-text">
                    Linguine pasta tossed in a rich garlic and
                    herb-infused olive oil, topped with shrimp and
                    fresh Parmesan cheese.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card">
                <div>
                  <div className="title-wrapper">
                    <h3>
                      <a href="#" className="card-title">
                        Grilled Chicken Pesto Panini
                      </a>
                    </h3>

                    <span className="span">$28.00</span>
                  </div>

                  <p className="card-text">
                    Grilled chicken breast, melted mozzarella, and
                    sun-dried tomato pesto pressed between golden artisanal
                    panini bread
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card">
                <div>
                  <div className="title-wrapper">
                    <h3>
                      <a href="#" className="card-title">
                        Mango Tango Salad
                      </a>
                    </h3>

                    <span className="span">$60.00</span>
                  </div>

                  <p className="card-text">
                    Salad featuring ripe mango slices, mixed greens, cherry
                    tomatoes, feta cheese, and a zesty citrus vinaigrette
                  </p>
                </div>
              </div>
            </li>
          </div>

          <div className="menu-column">
            <li>
              <div className="menu-card">
                <div>
                  <div className="title-wrapper">
                    <h3>
                      <a href="#" className="card-title">
                        Prime Ribeye Steak
                      </a>
                    </h3>
                    <span className="span">$39.00</span>
                  </div>

                  <p className="card-text">
                    Seared prime ribeye steak served with garlic mashed potatoes
                    and sautéed seasonal vegetables
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card">
                <div>
                  <div className="title-wrapper">
                    <h3>
                      <a href="#" className="card-title">
                        Vegetarian Mediterranean Pizza
                      </a>
                    </h3>

                    <span className="span">$56.00</span>
                  </div>

                  <p className="card-text">
                    Artisanal pizza topped with roasted vegetables, Kalamata
                    olives, feta cheese, and a drizzle of balsamic glaze
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card">
                <div>
                  <div className="title-wrapper">
                    <h3>
                      <a href="#" className="card-title">
                        Chocolate Tiramisu
                      </a>
                    </h3>

                    <span className="span">$40.00</span>
                  </div>

                  <p className="card-text">
                    Layers of espresso-soaked ladyfingers and velvety
                    mascarpone, generously dusted with cocoa powder
                  </p>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Menu;
