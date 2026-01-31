import React from "react";
import "/src/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="subscribe-input-wrapper">
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <address>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </address>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li>
              <a href="/login">Login / Register</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/wishlist">Wishlist</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms Of Use</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Download App</h3>
          <p className="app-promo">Save $3 with App New User Only</p>
          <div className="download-section">
            <div className="qr-code">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=example"
                alt="QR Code"
              />
            </div>
            <div className="app-stores">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
              />
            </div>
          </div>
          <div className="social-icons">{/*Dodać ikony!*/}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
