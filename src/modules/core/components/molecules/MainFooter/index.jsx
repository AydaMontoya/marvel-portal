import './styles.scss';
import React from 'react';
export default function MainFooter() {
  return (
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
          <nav>
            <div className="main-footer-promotions"></div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
