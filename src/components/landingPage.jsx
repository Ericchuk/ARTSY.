import Header from "./header";
import Homepage from "./homepage-content/homepage";
import ProductPage from "./productPage/productpage";
import { Routes, Route} from 'react-router-dom';
import Footer from "./footer";
import './cssfiles/landingPage.css';

export default function LandingPage() {
  return (
    <article>
      <Header />
      <Routes>
        <Route path='/' element={Homepage} />
        <Route path='/product' element={ProductPage} />
      </Routes>
      <ProductPage />
      {/* <Homepage /> */}
      <Footer />
    </article>
  );
}
