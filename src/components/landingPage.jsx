import Header from "./header";
import Banner1 from "./homepage-content/introductorySection";
import FeaturedProduct from "./homepage-content/featuredProductSection";
import MonalisaStyle from "./homepage-content/monalisaDefinedStyle";
import Explore from "./homepage-content/exploreandauction";
import Footer from "./homepage-content/footer";
import './cssfiles/landingPage.css';

export default function LandingPage() {
  return (
    <article>
      <Header />
      <Banner1 />
      <FeaturedProduct />
      <MonalisaStyle />
      <Explore />
      <Footer />
    </article>
  );
}
