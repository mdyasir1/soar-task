import RecentTransactions from '../components/RecentTransactions'

function RecentTransactionList() {
  return (
    <div className="border border-2 bg-slate-100 max-h-60 rounded-3xl mx-4 my-6 overflow-auto">
      {/* <Navbar /> */}
      <RecentTransactions
        amount={800}
        date="28 January 2025"
        message="Withdrawn from my Card"
        image="https://avatar.iran.liara.run/public?3"
      />
      <RecentTransactions
        amount={2500}
        date="25 January 2025"
        message="Deposit Paypal"
        transaction
        image="https://avatar.iran.liara.run/public?1"
      />
      <RecentTransactions amount={5400} date="21 January 2025" message="Jemi Wilson" transaction />

      <RecentTransactions
        amount={2500}
        date="26 January 2025"
        message="Deposit Paypal"
        transaction
        image="https://avatar.iran.liara.run/public?2"
      />
      <RecentTransactions amount={2500} date="27 January 2025" message="Jemi Wilson" transaction />
    </div>
  )
}

export default RecentTransactionList
