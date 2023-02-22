import Header from "./header";
import Homepage from "./homepage-content/homepage";
import ProductPage from "./productPage/productpage";
import { Routes, Route} from 'react-router-dom';
import Footer from "./footer";
import './cssfiles/landingPage.css';
import ProductDetailPage from "./productDetailPage/productDetailPage";

export default function LandingPage() {
  return (
    <article>
      <Header />
      {/* <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Marketplace' element={<ProductPage />} />
        <Route path='/:marketId' element={<ProductDetailPage />} />
      </Routes>  */}
      <ProductDetailPage />
      <Footer />
      
    </article>
  );
}
