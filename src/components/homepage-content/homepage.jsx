import Banner1 from "./introductorySection";
import FeaturedProduct from "./featuredProductSection";
import MonalisaStyle from "./monalisaDefinedStyle";
import Explore from "./exploreandauction";
import TopCreators from "./topCreators";

export default function Homepage() {

  return (
    <article>
      <Banner1 />
      <FeaturedProduct />
      <MonalisaStyle />
      <Explore />
      <TopCreators />
    </article>
  );
}
