import { useState, useEffect } from "react";
import arrow from "../img/Vector (11).png";
import filter from "../img/Vector (13).png";
import "./cssfile/filter.css";

export default function Filter() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    window.innerWidth > 999 ? setHover(true) : setHover(null);
  }, []);

  function openFilter() {
    setHover(!hover);
  }

  return (
    <div className="filter">
      {window.innerWidth > 999 ? (
        ""
      ) : (
        <div onClick={openFilter}>
          <p>Filter</p>
          {!hover ? (
            <img src={arrow} alt="dropdown arrow" />
          ) : (
            <img src={arrow} alt="dropdown arrow" className="uparrow" />
          )}{" "}
        </div>
      )}

      {hover ? (
        <aside>
          <header>
            <img src={filter} alt="filter icon" className="" />
            <h4>Filter</h4>
          </header>
          <ul className="first">
            <div>
              <h5>By catetory</h5>
              <img src={arrow} alt="dropdown arrow" className="uparrow" />
            </div>
            <li>
              <input type="checkbox" /> <label>Editorials</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Fashion</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Optics</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Art & Museum</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Nature</label>
            </li>
          </ul>
          {/* <ul className="second">
                    <div>
                        <h5>By price</h5>
                        <img src={arrow} alt="dropdown arrow" />
                    </div>
                    <div className="price-progress-bar-container">
                        <div className="price-indicator"></div>
                    </div>
                </ul> */}
          <ul>
            <div>
              <h5>By price</h5>
              <img src={arrow} alt="dropdown arrow" className="uparrow" />
            </div>
            <li>
              <input type="Radio" /> <label>Below $100.00</label>
            </li>
            <li>
              <input type="radio" /> <label>$100.00 - $150.00</label>
            </li>
            <li>
              <input type="radio" /> <label>$150.00 - $200.00</label>
            </li>
            <li>
              <input type="radio" /> <label>Above $200.00</label>
            </li>
          </ul>
        </aside>
      ) : (
        ""
      )}
    </div>
  );
}
