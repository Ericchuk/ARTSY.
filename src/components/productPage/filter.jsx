import arrow from "../img/Vector (11).png";

export default function Filter(){
    return(
        <div className="filter">
            <div>
                <p>Filter</p>
            <img src={arrow} alt="dropdown arrow" />
            </div>
            <aside>
                <header>
                    <img />
                    <h4>Filter</h4>
                </header>
                <ul>
                    <div>
                        <h5>By catetory</h5>
                        <img src={arrow} alt="dropdown arrow" />
                    </div>
                    <li><input type="checkbox" /> <label>Editorials</label></li>
                    <li><input type="checkbox" /> <label>Fashion</label></li>
                    <li><input type="checkbox" /> <label>Optics</label></li>
                    <li><input type="checkbox" /> <label>Art & Museum</label></li>
                    <li><input type="checkbox" /> <label>Nature</label></li>
                </ul>
                <ul>
                    <div>
                        <h5>By price</h5>
                        <img src={arrow} alt="dropdown arrow" />
                    </div>
                    <div className="price-progress-bar-container">
                        <div className="price-indicator"></div>
                    </div>
                </ul>
                <ul>
                    <div>
                        <h5>By artist</h5>
                        <img src={arrow} alt="dropdown arrow" />
                    </div>
                    <li><input type="Radio" /> <label>Below $100.00</label></li>
                    <li><input type="radio" /> <label>$100.00 - $150.00</label></li>
                    <li><input type="radio" /> <label>$150.00 - $200.00</label></li>
                    <li><input type="radio" /> <label>Above $200.00</label></li>
                </ul>
            </aside>
        </div>
    )
}