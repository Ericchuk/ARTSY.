import WalletType from "./walletType";
import WalletForm from "./walletForm";
import Href from "../productPage/productHref";
import "./cssfile/paymentPage.css";

export default function PaymentPage() {
  return (
    <section className="payment-page-container">
      <section className="payment-page">
        {window.innerWidth < 700 ? <Href /> : ""}
        <WalletType />
        <WalletForm />
      </section>
    </section>
  );
}
