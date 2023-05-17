import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import picture from "../../assets/profileImage.jpeg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src={picture} alt="Fachrur Rizhky" />
            <h1>Let's work together!</h1>
          </div>
          <div className="footer__button">
            <Link to="/me">Get in touch</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:fachrurrizhkyalfadillah@gmail.com">
              zulaaa931@gmail.com
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6282112140/?text=lo%20Fachr"
            >
              xxxxxxxxxxxxxxx
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/zsull__/"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://youtu"
            >
              Nothing
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/zSull09"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/SuLNoCounter"
            >
              Twitter
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@ytaak1"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
