import "./cssfile/walletForm.css";

export default function WalletForm() {
  const inputs = [
    {
      id: 0,
      type: "text",
      name: "Wallet type",
    },
    {
      id: 1,
      type: "text",
      name: "Key",
      placeholder: "Please enter your key",
    },
    {
      id: 2,
      type: "number",
      name: "Expiry date",
    },
    {
      id: 3,
      type: "text",
      name: "Safe code",
    },
  ];

  const input = inputs.map((each) => {
    return (
      <div className="input" key={each.id}>
        <label htmlFor={each.type}>{each.name}</label>
        <input type={each.type} placeholder={each.placeholder} />
      </div>
    );
  });

  return (
    <section className="wallet-form">
      <aside>
        {input}
        <div className="instruction">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">
            Save my wallet details & information for future transactions
          </label>
        </div>
        <button>Confirm</button>
      </aside>

      <aside>
        <h4>Payment Summary</h4>
        <div>
          <p>Metamask wallet : 002345KJi90pzzz3</p>
          <p>Actively linked to Yaba, Lagos Nigeria.</p>
        </div>
        <div>
          <p>Expected arrival date: Between 22nd September and 26th September 2022</p>
        </div>
        <section className="">
          <aside>
            <div>
              <p>Products in cart:</p>
              <p>
                <b>4 items</b>
              </p>
            </div>
            <div>
              <p>Shipping:</p>
              <p>
                <b>$2.50</b>
              </p>
            </div>
            <div>
              <p>Total</p>
              <p>
                <b>$114.00</b>
              </p>
            </div>

            <hr />
            <div>
              <p>Grand total:</p>
              <p>
                <b>$116.50</b>
              </p>
            </div>
          </aside>
        </section>
      </aside>
    </section>
  );
}
