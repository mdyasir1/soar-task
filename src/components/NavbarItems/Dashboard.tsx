import Card from '../Card'
import ExpenseStatistics from '../ExpenseStatistics'

function Dashboard() {
  return (
    <div>
      <div id="cards-box" className="flex max-w-[800px] overflow-x-scroll no-scrollbar">
        <Card
          cardNumber="1234 **** **** 1234"
          balance="1,889"
          name="Emily Cusuma"
          expiry="12/36"
          variant="dark"
        />
        <Card
          cardNumber="1234 **** **** 1234"
          balance="1,889"
          name="Emily Cusuma"
          expiry="12/36"
          variant=""
        />
        <Card cardNumber="1234 **** **** 1234" balance="1,889" name="Emily Cusuma" expiry="12/36" />
        <Card
          cardNumber="1234 **** **** 1234"
          balance="1,889"
          name="Emily Cusuma"
          expiry="12/36"
          variant=""
        />
      </div>
      <ExpenseStatistics />
    </div>
  )
}

export default Dashboard
