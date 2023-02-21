import More from "../moreArrowBlack";
import Filter from "./filter";
import "./cssfile/products.css";

export default function Products({ products, next, done, prev }) {
  const width = window.innerWidth;

  return (
    <section className="products-container">
      {width > 999 ? (
        <section className="products-container2">
          <Filter />
          <section className="products">
            <aside>{products}</aside>

            <div className={done ? "arrows-container" : "arrows"}>
              {done ? (
                <div className="red rotate">
                  <p>
                    <More next={prev} />
                  </p>
                  <p>Back</p>
                </div>
              ) : (
                ""
              )}
              <div className="red">
                <p>Load more</p>
                <p>
                  <More next={next} />
                </p>
              </div>
            </div>
          </section>
        </section>
      ) : (
          <section className="products">
            <aside>{products}</aside>

            <div className={done ? "arrows-container" : "arrows"}>
              {done ? (
                <div className="red rotate">
                  <p>
                    <More next={prev} />
                  </p>
                  <p>Back</p>
                </div>
              ) : (
                ""
              )}
              <div className="red">
                <p>Load more</p>
                <p>
                  <More next={next} />
                </p>
              </div>
            </div>
          </section>
      )}
    </section>
  );
}
