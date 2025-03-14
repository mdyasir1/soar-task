import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
// import RecentTransferList from './features/RecentTransferList'
import Accounts from './components/NavbarItems/Accounts'
import Setting from './components/NavbarItems/Setting'
import Loans from './components/NavbarItems/Loans'
import Investments from './components/NavbarItems/Investments'
import CreditCards from './components/NavbarItems/CreditCards'
import Dashboard from './components/NavbarItems/Dashboard'
import Transactions from './components/NavbarItems/Transactions'
import Services from './components/NavbarItems/Services'
import Privilege from './components/NavbarItems/MyPrivileges'

function App() {
  return (
    <div className="flex">
      <Navbar />
      {/* <RecentTransferList /> */}
      <Routes>
        <Route path="/dashboard" element={<h1>{<Dashboard />}</h1>} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/cards" element={<CreditCards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/priviliges" element={<Privilege />} />
      </Routes>
    </div>
  )
}

export default App
