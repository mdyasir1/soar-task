interface CardProps {
  balance: string
  name: string
  expiry: string
  cardNumber: string
  variant?: string
}

interface LabelValueProps {
  label: string
  value: React.ReactNode
}

function LabelValue(props: LabelValueProps) {
  return (
    <div>
      <label className="text-xs leading-none whitespace-nowrap opacity-50">{props.label}</label>
      <h4 className="font-bold text-lg leading-none whitespace-nowrap">{props.value}</h4>
    </div>
  )
}

function Card(props: CardProps) {
  const { balance, cardNumber, expiry, name, variant = 'dark' } = props
  const isDark = variant === 'dark'
  const darkStyle = {
    container: 'bg-gradient-to-r from-gray-600 to-black text-white',
    footer: 'bg-gradient-to-r from-white/10 to-white/0'
  }
  return (
    <div
      id="card-box"
      className={`${isDark ? darkStyle.container : 'bg-white text-black'} rounded-3xl w-80 min-w-80 max-w-96 m-[14px] font-sans flex flex-col justify-between overflow-hidden box-border`}
    >
      <header id="first-line" className="flex flex-row justify-between px-[30px] py-[22px]">
        <div id="insiders" className="w-[63px] h-[38px]">
          <LabelValue label="Balance" value={`$${balance}`} />
        </div>
        <img
          id="chip"
          src={isDark ? 'chip.png' : 'card-chip-dark.svg'}
          alt="chip"
          className="w-[34.89px] h-[34.89px] flex items-center justify-center"
        />
      </header>
      <section id="second-line" className="flex gap-10 px-[30px] py-[6px]">
        <span id="user-detail">
          <LabelValue label="CARD HOLDER" value={name} />
        </span>
        <span id="card-expiry">
          <LabelValue label="VALID THRU" value={expiry} />
        </span>
      </section>
      <footer
        id="third-line"
        className={`${isDark ? darkStyle.footer : 'bg-white text-black'} flex justify-between items-center px-[30px] py-[20px] mt-3.5 text-lg`}
      >
        <span id="card-number" className="font-bold text-lg tracking-widest">
          {cardNumber}
        </span>
        <span id="card-icon" className="flex">
          <div
            id="cir-1"
            className={`${isDark ? 'bg-[rgba(240,236,236,0.5)]' : 'bg-[rgba(0,0,0,0.5)]'} w-[30px] h-[30px] rounded-full`}
          ></div>
          <div
            id="cir-2"
            className={`${isDark ? 'bg-[rgba(240,236,236,0.5)]' : 'bg-[rgba(0,0,0,0.5)]'} w-[30px] h-[30px] rounded-full -ml-[15px]`}
          ></div>
        </span>
      </footer>
    </div>
  )
}

export default Card
