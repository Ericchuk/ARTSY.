import { ProductProvider } from "./productContectApi";
import Header from "./header";
import Homepage from "./homepage-content/homepage";
import ProductPage from "./productPage/productpage";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer";
import "./cssfiles/landingPage.css";
import ProductDetailPage from "./productDetailPage/productDetailPage";
import AuctionPage from "./auctionPage/auctionPage";
import LiveStreamPage from "./auctionLivePage/liveStreamPage";
import DropPage from "./drops/dropPage";
import CartPage from "./cart/cartPage";
import ShippingPage from "./shipping/shippingPage";
import PaymentPage from "./paymentPage/paymentPage";
import ThankYou from "./thankYou/thankYou";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LandingPage() {
  return (
    <ProductProvider>
        <article className="landingPage">
          <ToastContainer position="top center" />
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/marketplace" element={<ProductPage />} />
            <Route path="/marketplace/:id" element={<ProductDetailPage />} />
            <Route path="/auction" element={<AuctionPage />} />
            <Route path="/auction/livestream" element={<LiveStreamPage />} />
            <Route path="/drop" element={<DropPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/shipping" element={<ShippingPage />} />
            <Route path="/cart/shipping/payment" element={<PaymentPage />} />
            <Route path="/cart/payment/thankYou" element={<ThankYou />} />
          </Routes>
          {/* <ProductDetailPage /> */}
          {/* <ShippingPage /> */}

          <Footer />
        </article>
    </ProductProvider>
  );
}
