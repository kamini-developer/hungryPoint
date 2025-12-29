function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>ABOUT</h4>
          <p>
            Hungry Point is your favourite food delivery app bringing
            delicious meals to your doorstep.
          </p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT</h4>
          <p>Email: support@hungrypoint.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Hungry Point. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
