import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import X from '@mui/icons-material/X';

import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
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

        <div className="footer-column">
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

        <div className="footer-column">
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
      <div className="icons-holder">
        <div className="footer-left"></div>
        <div className="footer-center">
          <p>© 2024 MultiShopee All Rights are Reseverd</p>
        </div>
        <div className="footer-right">
          <Link to="">
            <Badge>
              <Facebook />
            </Badge>
          </Link>
          <Link to="">
            <Badge>
              <Instagram />
            </Badge>
          </Link>
          <Link to="">
            <Badge>
              <X />
            </Badge>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
