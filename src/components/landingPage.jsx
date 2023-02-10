import Header from "./header";
import Banner1 from "./homepage-content/introductorySection";
import FeaturedProduct from "./homepage-content/featuredProductSection";

export default function LandingPage() {
  return (
    <article>
      <Header />
      <Banner1 />
      <FeaturedProduct />
    </article>
  );
}
