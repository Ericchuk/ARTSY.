import "./cssfile/shippingForm.css";

export default function ShippingForm() {
  const form = [
    {
      id: 0,
      label: "Your email",
      type: "text",
      placeholder: "Enter your email",
      required: true,
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
    },
    {
      id: 3,
      label: "Country",
      type: "text",
      placeholder: "",
      required: true,
    },
    {
      id: 4,
      label: "Postal-code",
      type: "number",
      placeholder: "",
      required: true,
    },
    {
      id: 5,
      label: "Number",
      type: "number",
      placeholder: "",
      required: true,
    },
  ];

  // map through form
  const formData = form.map((each) => {
    return (
      <aside>
        <label htmlFor={each.label}>{each.label}</label>
        {each.type === "dropdown" ? (
          <select>
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
          />
        )}
      </aside>
    );
  });

  return <section className="shippingForm">{formData}</section>;
}
