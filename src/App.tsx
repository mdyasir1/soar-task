// import Another from './components/another'
import Card from './components/Card'

function App() {
  return (
    <div id="card-holder" className="flex content-center">
      <Card
        balance="5225"
        expiry="12/34"
        cardNumber="1234 5678 9012"
        name="John Doe"
        variant="dark"
      />
      <Card
        balance="2205"
        expiry="11/35"
        cardNumber="9012 5678 1234"
        name="Spencer Boone"
        variant="white"
      />
      <Card
        balance="9025"
        expiry="07/28"
        cardNumber="5678 9012 1234"
        name="Emerson Cortez"
        variant="dark"
      />
      <Card
        balance="2125"
        expiry="09/26"
        cardNumber="5678 1234 9012"
        name="Zariah Gomez"
        variant="white"
      />
      <Card
        balance="9025"
        expiry="07/28"
        cardNumber="5678 9012 1234"
        name="Emmalynn Villar"
        variant="dark"
      />
      <Card
        balance="2125"
        expiry="09/26"
        cardNumber="5678 1234 9012"
        name="Liliana Johnston"
        variant="white"
      />
    </div>
  )
}

export default App
