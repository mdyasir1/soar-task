import { NavLink } from 'react-router'

type menuItemProps = {
  title: string
  path: string
  img: string
}

const menu: menuItemProps[] = [
  { title: 'Dashboard', path: '/dashboard', img: 'Dashboard.svg' },
  { title: 'Transactions', path: '/transactions', img: 'Transactions.svg' },
  { title: 'Accounts', path: '/accounts', img: 'Accounts.svg' },
  { title: 'Investments', path: '/investments', img: 'Investments.svg' },
  { title: 'Credit Cards', path: '/cards', img: 'CreditCards.svg' },
  { title: 'Loans', path: '/loans', img: 'Loans.svg' },
  { title: 'Services', path: '/services', img: 'Services.svg' },
  { title: 'My Priviliges', path: '/priviliges', img: 'MyPriviliges.svg' },
  { title: 'Setting', path: '/settings', img: 'Setting.svg' }
]

function MenuItem({ title, path, img }: menuItemProps) {
  return (
    <div className="flex">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-[16px] py-2 flex gap-6 hover:text-black hover:opacity-100 transition-all ${isActive ? 'border-l-[4px] pl-[12px] opacity-100 text-black font-bold border-black' : 'text-black opacity-50'}`
        }
      >
        <img src={img} alt="" />
        {title}
      </NavLink>
    </div>
  )
}

function Navbar() {
  return (
    <div className="bg-white min-h-screen border">
      <div className="flex gap-2 px-8 py-6 ">
        <img src="SoarTask.svg" alt="" />
        <h1 className="text-xl font-bold text-[#343c6a]">Soar Task</h1>
      </div>
      <div className="w-60 inline max-w-72 flex flex-col gap-4 py-4">
        {menu.map((item) => (
          <MenuItem key={item.title} path={item.path} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  )
}

export default Navbar
