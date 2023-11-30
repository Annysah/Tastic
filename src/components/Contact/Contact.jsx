import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-container">
             <div className="form-column">
            <h2>Reserve a Table</h2>
            <form>
              <label>Full Name</label>
              <input type="text" id="name" name="name" required />

              <label>Email</label>
              <input type="email" id="email" name="email" required />

              <label>Phone</label>
              <input type="tel" id="phone" name="phone" required />

              <label>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button className="btn btn-secondary" type="submit">
                Submit Reservation
              </button>
            </form>
          </div>
          <div className="hours-column">
            <div>
              <h2>Opening Hours</h2>
              <p>Monday - Friday: <br />9:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: <br />11:00 AM - 8:00 PM</p>
            </div>

            <div>
              <h3>Locate us at</h3>
              <p>500 N Food Ave, Suite 15, Pot State, UFA</p>
            </div>

            <div>
              <h3>Telephone</h3>
              <p>+1 234 567 8910</p>
            </div>

            <div>
              <h3>Follow us on our social media platforms</h3>
              <div className="socials">
                <MdOutlineFacebook className="social-icons" />
                <FaInstagram className="social-icons" />
                <BsTwitterX className="social-icons" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
