// import Card from './components/Card'
import Transfer from './components/Transfer'

function App() {
  return (
    <div>
      <div className="flex bg-white gap-8 w-96 max-h-96 overflow-x-scroll p-6">
        <Transfer name="Yasir" title="employee" img="https://avatar.iran.liara.run/public?2" />
        <Transfer name="Tazeem" title="Employee" img="https://avatar.iran.liara.run/public?1" />
        <Transfer name="Tazeem" title="Employee" img="https://avatar.iran.liara.run/public?3" />
        <Transfer name="Tazeem" title="Employee" img="https://avatar.iran.liara.run/public?4" />
      </div>
    </div>
  )
}

export default App
