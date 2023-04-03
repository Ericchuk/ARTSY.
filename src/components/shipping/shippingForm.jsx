import "./cssfile/shippingForm.css";
import { useContext } from "react";
import { ProductContext } from "../productContectApi";

export default function ShippingForm() {
  const {
    email,
    setEmail,
    city,
    setCity,
    country,
    setCountry,
    number,
    setNumber,
    select,
    setSelect,
    postalcode,
    setpostalcode,
  } = useContext(ProductContext);
  const form = [
    {
      id: 0,
      label: "Your email",
      type: "text",
      placeholder: "Enter your email",
      required: true,
      value: email,
      change: (e) => setEmail(e.target.value),
    },
    {
      id: 1,
      label: "Choose a wallet",
      type: "dropdown",
      placeholder: "",
      required: true,
    },
    {
      id: 2,
      label: "City",
      type: "text",
      placeholder: "",
      required: true,
      value: city,
      change: (e) => setCity(e.target.value),
    },
    {
      id: 3,
      label: "Country",
      type: "text",
      placeholder: "",
      required: true,
      value: country,
      change: (e) => setCountry(e.target.value),
    },
    {
      id: 4,
      label: "Postal-code",
      type: "number",
      placeholder: "",
      required: true,
      value:postalcode,
      change: (e) => setpostalcode(e.target.value),
    },
    {
      id: 5,
      label: "Number",
      type: "number",
      placeholder: "",
      required: true,
      value: number,
      change: (e) => setNumber(e.target.value),
    },
  ];

  // map through form
  const formData = form.map((each) => {
    return (
      <aside key={each.id}>
        <label htmlFor={each.label}>{each.label}</label>
        {each.type === "dropdown" ? (
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value=""></option>
            <option value="Metamask">Metamusk</option>
            <option value="Trust wallet">Trust wallet</option>
            <option value="AlphaWallet">AlphaWallet</option>
            <option value="Coinbase Wallet">Coinbase Wallet</option>
          </select>
        ) : (
          <input
            type={each.type}
            placeholder={each.placeholder}
            required={each.required}
            value={each.value}
            onChange={each.change}
          />
        )}
      </aside>
    );
  });

  return (
    <section className="shippingForm">
      {formData}
    </section>
  );
}
