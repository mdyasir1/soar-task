// const menu: MenuProps[] = [
//   { title: 'Dashboad', path: '' },
//   { title: 'Transactions', path: '/Transactions' },
//   { title: 'Accounts', path: '/Accounts' }
// ]

// type MenuProps = {
//   title: string
//   path: string
// }

// const MenuItem = ({ title, path }: MenuProps) => (
//   <a className="w-full block p-6 py-4" href={path}>
//     {title}
//   </a>
// )

// function Navbar() {
//   return (
//     <div className="flex flex-col border-r max-w-56 min-h-screen">
//       {/* {menu.map((item) => ( */}
//       <MenuItem title="Rahman" path="" />
//       {/* ))} */}
//     </div>
//   )
// }

// export default Navbar

const menu = [
  { title: 'Dashboard', path: '/' },
  { title: 'Transactions', path: '/Transactions' },
  { title: 'Accounts', path: '/Accounts' },
  { title: 'Investments', path: '/' },
  { title: 'Credit Cards', path: '/' },
  { title: 'Loans', path: '/' },
  { title: 'Services', path: '/' },
  { title: 'My Priviliges', path: '/' },
  { title: 'Setting', path: '/' }
]

type menuItemProps = {
  title: string
  path: string
}

function MenuItem({ title, path }: menuItemProps) {
  return <a href={path}>{title}</a>
}

function Navbar() {
  return (
    <div className="flex flex-col">
      {menu.map((item) => (
        <MenuItem key={item.title} path={item.path} title={item.title} />
      ))}
    </div>
  )
}

export default Navbar
