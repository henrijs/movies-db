import Link from 'next/link'

// Let's have couple of static routes.
const routes = [
  {href: '/', label: 'Home'},
  {href: '/search', label: 'Search'},
]

export default function Navigation() {
  return (
    <nav>
      <ul className="menu menu-horizontal px-1">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>
            {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}