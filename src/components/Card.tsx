function Card() {
  return (
    <div id="card-box">
      <header id="first-line">
        <div id="insiders">
          <p className="headings">Balance</p>
          <p className="content">$5,756</p>
        </div>
        <img id="chip" src="chip.png" alt="chip" />
      </header>
      <section id="second-line">
        <span id="user-detail">
          <p className="headings">CARD HOLDER</p>
          <h4 className="content">Eddy Cusuma</h4>
        </span>
        <span id="card-expiry">
          <p className="headings">VALID THRU</p>
          <h4 className="content">12/22</h4>
        </span>
      </section>
      <footer id="third-line">
        <span id="card-number">3778 **** **** 1234</span>
        <span id="card-icon">
          <div id="cir-1"></div>
          <div id="cir-2"></div>
        </span>
      </footer>
    </div>
  )
}

export default Card
