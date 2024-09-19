import { Link } from 'react-router-dom';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import X from '@mui/icons-material/X';
import GitHub from '@mui/icons-material/GitHub';

import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* First column */}
        <div className="footer-container__footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="">Our Story</Link>
            </li>
            <li>
              <Link to="">Meet the Team</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Second column */}
        <div className="footer-container__footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <Link to="">FAQ</Link>
            </li>
            <li>
              <Link to="">Returns & Replacements</Link>
            </li>
            <li>
              <Link to="">Shipping Information</Link>
            </li>
            <li>
              <Link to="">Support</Link>
            </li>
          </ul>
        </div>

        {/* Third column */}
        <div className="footer-container__footer-column">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="">Terms of Service</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Cookie Policy</Link>
            </li>
            <li>
              <Link to="">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer-container__icons-holder">
        {/* Left-bottom column */}
        <div className="footer-container__icons-holder__footer-left">
          <p>Created by</p>
          <Link
            aria-label="Link to Github"
            target="_blank"
            to="https://github.com/RobVerplanke"
          >
            <GitHub data-testid="github-icon" />
          </Link>
        </div>

        {/* Center-bottom column */}
        <div className="footer-container__icons-holder__footer-center">
          <p>© 2024 MultiShopee All Rights are Reseverd</p>
        </div>

        {/* Right-bottom column */}
        <div className="footer-container__icons-holder__footer-right">
          {/* Facebook link */}
          <Link aria-label="Link to Facebook" to="" data-testid="facebook-link">
            <Facebook />
          </Link>

          {/* Instagram link */}
          <Link
            aria-label="Link to Instagram"
            to=""
            data-testid="instagram-link"
          >
            <Instagram />
          </Link>

          {/* X link */}
          <Link aria-label="Link to X" to="" data-testid="x-link">
            <X />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
