import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/imgi_19_Green-logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Branding & Logo Column */}
        <div className="footer-col branding">
          <div className="footer-logo">
            <img src={logo} alt="HFA Approved Logo" />
          </div>
          <p className="footer-tagline">
            Accredited Halal Certification Ensuring Worldwide Trust And Compliance
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Important Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Important Links</h4>
          <ul className="footer-links">
            <li><a href="/apply">Apply For Certification</a></li>
            <li><a href="/events">Our Events</a></li>
            <li><a href="/fee-policy">Fee Policy</a></li>
            <li><a href="/quality-policy">HFA Quality Policy</a></li>
            <li><a href="/procedure">Certification Procedure</a></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-info">
            <p>Unit 15, Linen House, 253 Kilburn Lane, Queen's Park London, W10 4BQ United Kingdom</p>
            <p className="contact-item">Phone: +44(0)2084467127</p>
            <p className="contact-item">Email: Info@Halalfoodauthority.Com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <div className="copyright">
            © {currentYear} Copyright Halal Food Authority. All Rights Reserved
          </div>
          <div className="legal-links">
            <a href="/terms">Terms And Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}