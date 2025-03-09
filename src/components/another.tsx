interface AnotherProps {
  name: string
  balance: number
  expirydate: number
  cardNumber: number
}

function Another(props: AnotherProps) {
  return (
    <div id="card-box">
      <header id="first-line">
        <div id="insiders">
          <p className="headings">Balance</p>
          <p className="content">${props.balance}</p>
        </div>
        <img id="chip" src="chip.png" alt="chip" />
      </header>
      <section id="second-line">
        <span id="user-detail">
          <p className="headings">CARD HOLDER</p>
          <h4 className="content">{props.name}</h4>
        </span>
        <span id="card-expiry">
          <p className="headings">VALID THRU</p>
          <h4 className="content">{props.expirydate}</h4>
        </span>
      </section>
      <footer id="third-line">
        <span id="card-number">{props.cardNumber}</span>
        <span id="card-icon">
          <div id="cir-1"></div>
          <div id="cir-2"></div>
        </span>
      </footer>
    </div>
  )
}

export default Another
