import './styles.scss';
import React from 'react';
export default function MainFooter() {
  return (
    <div id="marvel-widget-footer">
      <div className="mvl-main-footer">
        <footer className="main-footer">
          <div className="main-footer-content">
            <div className="main-footer-links">
              <a className="main-footer-logo" href="#">
                <span></span>
              </a>
              <nav className="main-footer-first-links" aria-label="Primary footer navigation">
                <ul>
                  <li className="main-footer-link">
                    <a href="#">ABOUT MARVEL</a>
                  </li>
                  <li className="main-footer-link">
                    <a href="#">HELP/FAQS</a>
                  </li>
                  <li className="main-footer-link">
                    <a href="#">CAREERS</a>
                  </li>
                  <li className="main-footer-link">
                    <a href="#">INTERNSHIPS</a>
                  </li>
                </ul>
              </nav>
              <nav className="main-footer-second-links" aria-label="Primary footer navigation">
                <ul>
                  <li className="main-footer-link">
                    <a href="#">ADVERTISING</a>
                  </li>
                  <li className="main-footer-link">
                    <a href="#">DISNEY+</a>
                  </li>
                  <li className="main-footer-link">
                    <a href="#">MARVELHQ.COM</a>
                  </li>
                  <li className="main-footer-link">
                    <a href="#">REDEEM DIGITAL COMICS</a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav className="main-footer-promo">
              <div className="main-footer-promotions">
                <a className="main-footer-promotions-link" href="#">
                  <div className="main-footer-promotions-image-wrapper">
                    <figure className="main-footer-image-wrapper">
                      <img className="main-footer-promotions-image" src="" alt="Marvel Insider" />
                    </figure>
                  </div>
                  <div className="main-footer-promotions-info">
                    <h4 className="main-footer-promotions-title">MARVEL INSIDER</h4>
                    <p className="main-footer-promotions-description">
                      Get Rewarded for Being a Marvel Fan
                    </p>
                  </div>
                </a>
              </div>
              <div className="main-footer-promotions">
                <a className="main-footer-promotions-link" href="#">
                  <div className="main-footer-promotions-image-wrapper">
                    <figure className="main-footer-image-wrapper">
                      <img className="main-footer-promotions-image" src="" alt="Marvel Insider" />
                    </figure>
                  </div>
                  <div className="main-footer-promotions-info">
                    <h4 className="main-footer-promotions-title">MARVEL UNLIMITED</h4>
                    <p className="main-footer-promotions-description">
                      Acces Over 30,000+ Digital Comics
                    </p>
                  </div>
                </a>
              </div>
            </nav>
            <nav className="main-footer-follow" aria-label="Social footer navigtion">
              <h4 className="main-footer-title">FOLLOW MARVEL</h4>
              <ul className="main-footer-social-links footer-social">
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
                <li className="main-footer-social-img">
                  <a href="">
                    <span></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
