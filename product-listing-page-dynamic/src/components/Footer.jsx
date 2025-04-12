import language from "../assets/images/Language.png"
import Insta from "../assets/images/Insta.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import Gpay from "../assets/images/Gpay.png";
import VisaCard from "../assets/images/VisaCard.png";
import PayTm from "../assets/images/PayTm.png";
import Amex from "../assets/images/Amex.png";
import ApplePay from "../assets/images/ApplePay.png";
import OPay from "../assets/images/OPay.png";


const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="Footer_contact_us">
        <div className="Footer_contact_1">
          <p className="First_to_know">BE THE FIRST TO KNOW</p>
          <p className="Sign_up_updates">Sign up for updates from mettā muse.</p>
          <div className="Subscribe_container">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="Footer_contact_2">
          <p className="Contact_us">CONTACT US</p>
          <div className="Footer_contact_group">
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <p className="Currency_container">CURRENCY</p>
          <div className="Contact_us_language">
            <img src={language} alt="language" />
          </div>
          <p className="contact_us_data">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr className="footer_divider" />

      <div className="Footer_quick_links">
        <div className="Footer_links_section">
          <p className="footer_title">mettā muse</p>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="Footer_links_section">
          <p className="footer_title">QUICK LINKS</p>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="Footer_links_section">
          <p className="footer_title">FOLLOW US</p>
          <div className="social_icons">
            <img src={Insta} alt="instagram" />
            <img src={LinkedIn} alt="linkedin" />
          </div>
          <p className="footer_title">mettā muse ACCEPTS</p>
          <div className="payment_icons">
            <img src={Gpay} alt="gpay" />
            <img src={VisaCard} alt="mastercard" />
            <img src={PayTm} alt="paypal" />
            <img src={Amex} alt="amex" />
            <img src={ApplePay} alt="applepay" />
            <img src={OPay} alt="pay" />
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;