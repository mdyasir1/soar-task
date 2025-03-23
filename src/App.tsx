import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dashboard from './components/NavbarItems/Dashboard'

function App() {
  return (
    <div className="flex position-sticky">
      <Navbar />
      <section className="flex-1">
        <Header pageTitle="Overview" />
        <main className="p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </section>
    </div>
  )
}

export default App
