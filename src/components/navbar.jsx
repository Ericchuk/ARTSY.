import close from "./img/Vector (3).png";
import { Link } from 'react-router-dom';
import "./cssfiles/navbar.css";

export default function Navbar({ isOpen, setIsOpen }) {
  function closeNav() {
    setIsOpen(!isOpen);
  } 
  return (
    <nav className="nav">
      <header>
        <h2>ARTSY.</h2>
        <img src={close} alt="closeNav" onClick={closeNav} />
      </header>
      <ul>
        <Link to="/"  onClick={closeNav}>
          <li>Home</li>
        </Link>
        <Link to="auction"  onClick={closeNav}>
          <li>Auctions</li>
        </Link>
        <Link to="Marketplace"  onClick={closeNav}>
          <li>Marketplace</li>
        </Link>
        <Link to="drop"  onClick={closeNav}>
          <li>Drops</li>
        </Link>
      </ul>
      <div className="msg-icon" onClick={closeNav}>
        <svg
          width="86"
          height="87"
          viewBox="0 0 86 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 512">
            <g id="Ellipse 78" className="circle" filter="url(#filter0_d_510_155)">
              <circle cx="43" cy="40" r="32" fill="#3341C1" />
            </g>
            <path
              id="Vector"
              d="M28 55V28.9C28 28.1025 28.2842 27.4195 28.8526 26.8511C29.42 26.2837 30.1025 26 30.9 26H54.1C54.8975 26 55.5805 26.2837 56.1489 26.8511C56.7163 27.4195 57 28.1025 57 28.9V46.3C57 47.0975 56.7163 47.7805 56.1489 48.3489C55.5805 48.9163 54.8975 49.2 54.1 49.2H33.8L28 55Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_510_155"
              x="0.333333"
              y="0.888889"
              width="85.3333"
              height="85.3333"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3.55556" />
              <feGaussianBlur stdDeviation="5.33333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_510_155"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_510_155"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </nav>
  );
}
