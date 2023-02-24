import Header from "./header";
import Homepage from "./homepage-content/homepage";
import ProductPage from "./productPage/productpage";
import { Routes, Route} from 'react-router-dom';
import Footer from "./footer";
import './cssfiles/landingPage.css';
// import ProductDetailPage from "./productDetailPage/productDetailPage";
import AuctionPage from "./auctionPage/auctionPage";
import LiveStreamPage from "./auctionLivePage/liveStreamPage";
import DropPage from "./drops/dropPage";


export default function LandingPage() {
  return (
    <article className="landingPage">
     <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Marketplace' element={<ProductPage />} />
        <Route path='/auction' element={<AuctionPage />} />
        <Route path='/auction/livestream' element={<LiveStreamPage />} />
        <Route path='/drop' element={<DropPage />} />
      </Routes> 
      {/* <ProductDetailPage /> */}
      
      
      <Footer />
      
    </article>
  );
}
