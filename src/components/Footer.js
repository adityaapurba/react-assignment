import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer p-5 text-center  text-white bg-black">
        <div className="footer-content">
          <p className="mb-1">Made by Meow Meow Cat | &copy;2025</p>
          <p className="mb-1">
            Contact: 21je0043@iitism.ac.in | Phone: 9869570265
          </p>
          <div className="footer-links d-flex justify-content-center">
            <a href="/about" className="footer-link mx-2">
              About Us
            </a>
            <a href="/privacy" className="footer-link mx-2">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-link mx-2">
              Terms of Service
            </a>
          </div>
          <p className="mb-1">Follow us on:</p>
          <div className="footer-social-icons d-flex justify-content-center">
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
